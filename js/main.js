/* SANIP/EQASA - shared frontend utilities */

document.addEventListener('DOMContentLoaded', function () {
  // Load the shared visual refinement layer without requiring every HTML page
  // to be edited individually.
  if (!document.querySelector('link[data-sanip-overrides]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/overrides.css';
    link.dataset.sanipOverrides = 'true';
    document.head.appendChild(link);
  }

  // Navigation and forms self-initialize from their own scripts.
  initializeBackToTop();
  initializeExternalLinks();
});

function setActiveNavLink() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[href]').forEach(function (link) {
    const href = link.getAttribute('href').split('#')[0].split('/').pop();
    if (href && href === currentFile) link.classList.add('active');
  });
}

function initializeExternalLinks() {
  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

function initializeBackToTop() {
  const links = document.querySelectorAll('.back-to-top');
  links.forEach(function (link) {
    if (link.dataset.initialized === 'true') return;
    link.dataset.initialized = 'true';
    link.addEventListener('click', function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function toggleElement(selector) {
  const element = document.querySelector(selector);
  if (element) element.classList.toggle('active');
}

function hideAll(selector) {
  document.querySelectorAll(selector).forEach(function (element) {
    element.classList.remove('active');
    element.hidden = true;
  });
}

function showElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.add('active');
    element.hidden = false;
  }
}
