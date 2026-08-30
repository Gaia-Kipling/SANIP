/* ==========================================================================
   SANIP/EQASA Website - Navigation JS
   ========================================================================== */

/**
 * Initialize mobile navigation menu toggle
 */
function initializeNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav');
  
  if (!menuToggle) return;
  
  // Toggle menu on hamburger click
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMobileMenu();
  });
  
  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMobileMenu();
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
      closeMobileMenu();
    }
  });
  
  // Close menu on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });
  
  // Set active nav link
  setActiveNavLink();
}

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav');
  
  if (!menuToggle || !navMenu) return;
  
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('mobile-open');
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav');
  
  if (!menuToggle || !navMenu) return;
  
  menuToggle.classList.remove('active');
  navMenu.classList.remove('mobile-open');
}

/**
 * Handle dropdown menus
 */
function initializeDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (!toggle || !menu) return;
    
    // Open/close on click
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Close other dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(m => {
        if (m !== menu) {
          m.style.display = 'none';
          m.parentElement.classList.remove('active');
        }
      });
      
      // Toggle this dropdown
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
        dropdown.classList.remove('active');
      } else {
        menu.style.display = 'block';
        dropdown.classList.add('active');
      }
    });
    
    // Close when clicking menu item
    const items = menu.querySelectorAll('.dropdown-item');
    items.forEach(item => {
      item.addEventListener('click', function() {
        menu.style.display = 'none';
        dropdown.classList.remove('active');
      });
    });
  });
  
  // Close dropdowns on outside click
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(m => {
        m.style.display = 'none';
        m.parentElement.classList.remove('active');
      });
    }
  });
}

/**
 * Keyboard navigation for menus
 */
function initializeKeyboardNavigation() {
  const navItems = document.querySelectorAll('.nav-link');
  
  navItems.forEach((item, index) => {
    item.addEventListener('keydown', function(e) {
      let targetIndex = index;
      
      // Right arrow or Down arrow
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        targetIndex = (index + 1) % navItems.length;
        navItems[targetIndex].focus();
      }
      
      // Left arrow or Up arrow
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        targetIndex = (index - 1 + navItems.length) % navItems.length;
        navItems[targetIndex].focus();
      }
      
      // Home key
      if (e.key === 'Home') {
        e.preventDefault();
        navItems[0].focus();
      }
      
      // End key
      if (e.key === 'End') {
        e.preventDefault();
        navItems[navItems.length - 1].focus();
      }
    });
  });
}

/**
 * Handle mobile menu accessibility
 */
function setupMenuAccessibility() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav');
  
  if (!menuToggle) return;
  
  menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
  menuToggle.setAttribute('aria-expanded', 'false');
  
  // Update aria-expanded when menu is toggled
  const originalToggle = toggleMobileMenu;
  window.toggleMobileMenu = function() {
    originalToggle();
    const isOpen = navMenu.classList.contains('mobile-open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
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
