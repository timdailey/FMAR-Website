// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
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

function isBlockedEmail(email) {
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

    const showError = text => {
      if (msg) { msg.className = 'form-message error'; msg.textContent = text; }
      btn.disabled = false;
      btn.textContent = btn.dataset.label || 'Submit';
    };

    btn.disabled = true;
    btn.textContent = 'Sending…';
    if (msg) { msg.className = 'form-message'; msg.textContent = ''; }

    // Honeypot check
    const honeypot = form.querySelector('input[name="_hp_website"]');
    if (honeypot && honeypot.value) return;

    // Timing check — reject if under 4 seconds
    const tsField = form.querySelector('input[name="_form_ts"]');
    if (tsField && Date.now() - parseInt(tsField.value) < 4000) return;

    // Work email check
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && isBlockedEmail(emailInput.value)) {
      return showError('Please use your work email address.');
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
        window.location.href = form.dataset.redirect;
        return;
      }
      if (msg) {
        msg.className = 'form-message success';
        msg.textContent = form.dataset.successMsg || 'Thanks! We\'ll be in touch soon.';
      }
      form.reset();
    } catch {
      if (msg) {
        msg.className = 'form-message error';
        msg.textContent = 'Something went wrong. Please try again.';
      }
    } finally {
      btn.disabled = false;
      btn.textContent = btn.dataset.label || 'Submit';
    }
  });
});
