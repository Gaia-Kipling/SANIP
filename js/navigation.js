/* SANIP/EQASA - navigation */

function initializeNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav');
  if (!menuToggle || !navMenu || menuToggle.dataset.initialized === 'true') return;
  menuToggle.dataset.initialized = 'true';

  menuToggle.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMobileMenu();
  });

  // Close the mobile menu when a real navigation link is selected.
  // Dropdown toggle buttons must remain open so their submenu can be used on mobile.
  document.querySelectorAll('.nav-link').forEach(function (link) {
    if (link.classList.contains('dropdown-toggle')) return;
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('nav') && !event.target.closest('.menu-toggle')) closeMobileMenu();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMobileMenu();
      closeAllDropdowns();
    }
  });

  if (typeof setActiveNavLink === 'function') setActiveNavLink();
}

function toggleMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav');
  if (!menuToggle || !navMenu) return;
  const isOpen = !navMenu.classList.contains('mobile-open');
  navMenu.classList.toggle('mobile-open', isOpen);
  menuToggle.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

function closeMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav');
  if (!menuToggle || !navMenu) return;
  navMenu.classList.remove('mobile-open');
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown.active').forEach(function (dropdown) {
    dropdown.classList.remove('active');
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });
}

function initializeDropdowns() {
  document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (!toggle || !menu || toggle.dataset.initialized === 'true') return;
    toggle.dataset.initialized = 'true';

    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-haspopup', 'true');

    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      const open = dropdown.classList.contains('active');
      closeAllDropdowns();
      dropdown.classList.toggle('active', !open);
      toggle.setAttribute('aria-expanded', String(!open));
    });

    menu.querySelectorAll('.dropdown-item').forEach(function (item) {
      item.addEventListener('click', function () {
        dropdown.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        closeMobileMenu();
      });
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.dropdown')) closeAllDropdowns();
  });
}

function initializeKeyboardNavigation() {
  const navItems = Array.from(document.querySelectorAll('.nav-link'));
  if (!navItems.length) return;
  navItems.forEach(function (item, index) {
    if (item.dataset.keyboardInitialized === 'true') return;
    item.dataset.keyboardInitialized = 'true';
    item.addEventListener('keydown', function (event) {
      let targetIndex = index;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') targetIndex = (index + 1) % navItems.length;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') targetIndex = (index - 1 + navItems.length) % navItems.length;
      else if (event.key === 'Home') targetIndex = 0;
      else if (event.key === 'End') targetIndex = navItems.length - 1;
      else return;
      event.preventDefault();
      navItems[targetIndex].focus();
    });
  });
}

function setupMenuAccessibility() {
  const menuToggle = document.querySelector('.menu-toggle');
  if (!menuToggle) return;
  menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
  menuToggle.setAttribute('aria-expanded', 'false');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializeDropdowns();
    initializeKeyboardNavigation();
    setupMenuAccessibility();
  });
} else {
  initializeNavigation();
  initializeDropdowns();
  initializeKeyboardNavigation();
  setupMenuAccessibility();
}
