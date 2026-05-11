document.addEventListener('DOMContentLoaded', () => {

    // Contact form
    const form = document.getElementById('contact-form');
    const thanksMessage = document.getElementById('thanks-message');
  
    if (form) {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
  
        const formData = new FormData(form);
        
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          form.style.display = 'none';
          thanksMessage.style.display = 'block';
        } else {
          alert("Oops! There was a problem submitting your form. Please try again.");
        }
      });
    }
  
    // Hamburger menu
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('mobile-menu');
  
    if (btn && menu) {
      btn.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
      });
    }
  
  });

  document.addEventListener('DOMContentLoaded', () => {

    // --- Cookie Banner ---
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');
  
    // Only show if user hasn't already chosen
    if (banner) {
      const cookieChoice = localStorage.getItem('cookieConsent');
  
      if (cookieChoice) {
        banner.classList.add('hidden');
      }
  
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.classList.add('hidden');
      });
  
      declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        banner.classList.add('hidden');
      });
    }
  
    // --- Contact Form ---
    const form = document.getElementById('contact-form');
    const thanksMessage = document.getElementById('thanks-message');
  
    if (form) {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          form.style.display = 'none';
          thanksMessage.style.display = 'block';
        } else {
          alert("Oops! There was a problem submitting your form. Please try again.");
        }
      });
    }
  
    // --- Hamburger Menu ---
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('mobile-menu');
  
    if (btn && menu) {
      btn.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
      });
    }
  
  });