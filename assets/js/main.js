// GA4 event helper — never send PII (email, company, website) as parameters
function track(name, params) {
  if (typeof gtag === 'function') gtag('event', name, params || {});
}

// Fire an event, then run next() once GA confirms it or after 500ms,
// so a page redirect can't cut the event off (and ad blockers can't stall it)
function trackThen(name, params, next) {
  let done = false;
  const go = () => { if (!done) { done = true; next(); } };
  track(name, Object.assign({}, params, { transport_type: 'beacon', event_callback: go }));
  setTimeout(go, 500);
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) {
      item.classList.add('open');
      track('faq_open', { question: btn.textContent.trim().slice(0, 100) });
    }
  });
});

// CTA clicks that lead to the report form
document.addEventListener('click', e => {
  const link = e.target.closest('a[href*="#report-form"]');
  if (!link) return;
  let location = 'page_body';
  if (link.closest('header')) location = 'header';
  else if (link.closest('footer')) location = 'footer';
  else if (link.closest('.hero, .page-hero')) location = 'hero';
  else if (link.closest('.section--cta')) location = 'bottom_cta';
  else if (link.closest('.post-content')) location = 'post_inline';
  track('cta_click', { cta_location: location });
});

// Form engagement — first focus in each webhook form
document.querySelectorAll('form[data-webhook]').forEach(form => {
  form.addEventListener('focusin', () => {
    track('form_start', { form_id: form.dataset.formId || 'unknown' });
  }, { once: true });
});

// Free email domains blocklist
const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com','googlemail.com','yahoo.com','yahoo.co.uk','yahoo.co.in','yahoo.fr',
  'yahoo.de','yahoo.es','yahoo.it','yahoo.com.au','ymail.com','hotmail.com',
  'hotmail.co.uk','hotmail.fr','hotmail.de','hotmail.it','hotmail.es',
  'outlook.com','outlook.co.uk','live.com','live.co.uk','msn.com','passport.com',
  'aol.com','aim.com','icloud.com','me.com','mac.com','protonmail.com',
  'proton.me','pm.me','tutanota.com','tuta.io','zohomail.com','zoho.com',
  'mail.com','email.com','gmx.com','gmx.net','gmx.de','gmx.us','web.de',
  'inbox.com','fastmail.com','fastmail.fm','hushmail.com','lavabit.com',
  'guerrillamail.com','mailinator.com','throwam.com','trashmail.com',
  'sharklasers.com','guerrillamailblock.com','grr.la','spam4.me','yopmail.com',
  'tempmail.com','temp-mail.org','fakeinbox.com','dispostable.com'
]);

// Specific test/allowlisted addresses that bypass the free-email block
const ALLOWLISTED_EMAILS = new Set([
  'theoj178@gmail.com',
]);

function isBlockedEmail(email) {
  if (ALLOWLISTED_EMAILS.has(email.toLowerCase())) return false;
  const domain = email.split('@')[1]?.toLowerCase();
  return domain ? FREE_EMAIL_DOMAINS.has(domain) : false;
}

// Inject honeypot + timestamp into every webhook form
document.querySelectorAll('form[data-webhook]').forEach(form => {
  // Honeypot — hidden field bots fill, humans don't
  const hp = document.createElement('input');
  hp.type = 'text';
  hp.name = '_hp_website';
  hp.autocomplete = 'off';
  hp.tabIndex = -1;
  hp.setAttribute('aria-hidden', 'true');
  hp.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;opacity:0;';
  form.appendChild(hp);

  // Timestamp — reject submissions under 4 seconds (bot speed)
  const ts = document.createElement('input');
  ts.type = 'hidden';
  ts.name = '_form_ts';
  ts.value = Date.now();
  form.appendChild(ts);
});

// Generic n8n form handler
document.querySelectorAll('form[data-webhook]').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const webhook = form.dataset.webhook;
    const btn = form.querySelector('button[type="submit"]');
    const msg = form.querySelector('.form-message');

    const formId = form.dataset.formId || 'unknown';
    let redirecting = false;

    const showError = (text, errorType) => {
      track('form_error', { form_id: formId, error_type: errorType });
      if (msg) { msg.className = 'form-message error'; msg.textContent = text; }
      btn.disabled = false;
      btn.textContent = btn.dataset.label || 'Submit';
    };

    // Honeypot check — bots get no feedback
    const honeypot = form.querySelector('input[name="_hp_website"]');
    if (honeypot && honeypot.value) return;

    // Timing check — reject if under 4 seconds
    const tsField = form.querySelector('input[name="_form_ts"]');
    if (tsField && Date.now() - parseInt(tsField.value) < 4000) {
      return showError('Please wait a moment, then try again.', 'timing');
    }

    btn.disabled = true;
    btn.textContent = 'Sending…';
    if (msg) { msg.className = 'form-message'; msg.textContent = ''; }

    // Work email check
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && isBlockedEmail(emailInput.value)) {
      return showError('Please use your work email address.', 'free_email');
    }

    // Strip internal spam fields before sending
    const formData = new FormData(form);
    formData.delete('_hp_website');
    formData.delete('_form_ts');
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      if (form.dataset.redirect) {
        redirecting = true;
        trackThen('generate_lead', { form_id: formId }, () => {
          window.location.href = form.dataset.redirect;
        });
        return;
      }
      track('generate_lead', { form_id: formId });
      if (msg) {
        msg.className = 'form-message success';
        msg.textContent = form.dataset.successMsg || 'Thanks! We\'ll be in touch soon.';
      }
      form.reset();
    } catch {
      track('form_error', { form_id: formId, error_type: 'server' });
      if (msg) {
        msg.className = 'form-message error';
        msg.textContent = 'Something went wrong. Please try again.';
      }
    } finally {
      if (!redirecting) {
        btn.disabled = false;
        btn.textContent = btn.dataset.label || 'Submit';
      }
    }
  });
});
