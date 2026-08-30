/* ==========================================================================
   SANIP/EQASA Website - Main JavaScript
   ========================================================================== */

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('SANIP/EQASA Website initialized');
  
  // Initialize all components
  initializeNavigation();
  initializeForms();
  initializeBackToTop();
  initializeExternalLinks();
  initializeSmothScroll();
});

/* ==========================================================================
   GENERAL UTILITIES
   ========================================================================== */

/**
 * Add 'active' class to current page link
 */
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href)) {
      link.classList.add('active');
    }
  });
}

/**
 * Initialize smooth scrolling
 */
function initializeSmothScroll() {
  // Already handled by CSS scroll-behavior: smooth
}

/**
 * Open external links in new tab
 */
function initializeExternalLinks() {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  
  externalLinks.forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

/**
 * Back to top button
 */
function initializeBackToTop() {
  const backToTopLink = document.querySelector('.back-to-top');
  
  if (!backToTopLink) return;
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopLink.style.display = 'inline-block';
    } else {
      backToTopLink.style.display = 'none';
    }
  });
  
  backToTopLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Utility: Show/hide element
 */
function toggleElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.toggle('active');
  }
}

/**
 * Utility: Hide all elements matching selector
 */
function hideAll(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    el.classList.remove('active');
    el.style.display = 'none';
  });
}

/**
 * Utility: Show element
 */
function showElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.add('active');
    element.style.display = 'block';
  }
}

/* ==========================================================================
   CONSOLE LOGGING (for debugging)
   ========================================================================== */

console.log(
  '%cSANIP/EQASA Website',
  'color: #2c5f2d; font-size: 18px; font-weight: bold;'
);
console.log(
  '%cImproving equestrian education through responsive design',
  'color: #666; font-style: italic;'
);
