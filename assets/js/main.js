// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Generic n8n form handler
// Each form needs data-webhook="YOUR_N8N_WEBHOOK_URL"
document.querySelectorAll('form[data-webhook]').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const webhook = form.dataset.webhook;
    const btn = form.querySelector('button[type="submit"]');
    const msg = form.querySelector('.form-message');

    btn.disabled = true;
    btn.textContent = 'Sending…';
    if (msg) { msg.className = 'form-message'; msg.textContent = ''; }

    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
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
