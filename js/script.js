const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
}
document.querySelectorAll('#year').forEach(node => node.textContent = new Date().getFullYear());


// Free-assistance enquiry modal
const assistanceModal = document.getElementById('assistance-modal');
const assistanceForm = document.getElementById('assistance-form');
const courseSelect = document.getElementById('student-course');
const assistanceStatus = document.getElementById('assistance-status');
const closeAssistance = () => {
  if (!assistanceModal) return;
  assistanceModal.hidden = true;
  document.body.classList.remove('modal-open');
};
document.querySelectorAll('.assistance-trigger').forEach(button => {
  button.addEventListener('click', () => {
    if (!assistanceModal) return;
    const selectedCourse = button.dataset.course || '';
    if (courseSelect) {
      if (courseSelect.tagName === 'SELECT') {
        const match = [...courseSelect.options].find(option => option.text === selectedCourse || option.value === selectedCourse);
        courseSelect.value = match ? match.value : '';
      } else {
        courseSelect.value = selectedCourse;
      }
    }
    assistanceStatus.textContent = '';
    assistanceModal.hidden = false;
    document.body.classList.add('modal-open');
    document.getElementById('student-name')?.focus();
  });
});
assistanceModal?.querySelector('.modal-close')?.addEventListener('click', closeAssistance);
assistanceModal?.addEventListener('click', event => {
  if (event.target === assistanceModal) closeAssistance();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && assistanceModal && !assistanceModal.hidden) closeAssistance();
});
assistanceForm?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!assistanceForm.reportValidity()) return;
  const submitButton = assistanceForm.querySelector('[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = 'Sending…';
  assistanceStatus.textContent = 'Sending your enquiry securely…';
  const payload = new FormData(assistanceForm);
  payload.append('_subject', 'New KAIORA free-assistance enquiry');
  payload.append('_replyto', payload.get('email') || '');
  payload.append('_template', 'table');
  payload.append('_captcha', 'true');
  try {
    const response = await fetch('https://formsubmit.co/ajax/kaioratechnologies@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: payload
    });
    const result = await response.json();
    if (!response.ok || result.success !== 'true' && result.success !== true) {
      throw new Error(result.message || 'The enquiry could not be sent.');
    }
    assistanceStatus.textContent = 'Thank you! Your enquiry has been sent to KAIORA TECHNOLOGIES.';
    assistanceForm.reset();
  } catch (error) {
    assistanceStatus.textContent = 'We could not send the enquiry right now. Please email kaioratechnologies@gmail.com instead.';
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
});
