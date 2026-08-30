/* ==========================================================================
   SANIP/EQASA Website - Forms Validation JS
   ========================================================================== */

/**
 * Initialize form validation and submission
 */
function initializeForms() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    // Validate on input
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('change', function() {
        validateField(this);
      });
      
      input.addEventListener('blur', function() {
        validateField(this);
      });
    });
    
    // Prevent submit if there's no backend
    form.addEventListener('submit', function(e) {
      // Check if form has action (actual backend)
      if (!form.getAttribute('action') || form.getAttribute('data-no-submit') === 'true') {
        e.preventDefault();
        handleFormSubmit(form);
      }
    });
  });
}

/**
 * Validate a single form field
 */
function validateField(field) {
  const value = field.value.trim();
  const type = field.type;
  const required = field.hasAttribute('required');
  const name = field.getAttribute('name');
  
  // Clear previous error
  clearFieldError(field);
  
  // Check if required
  if (required && !value) {
    showFieldError(field, 'This field is required');
    return false;
  }
  
  // Validate by type
  switch(type) {
    case 'email':
      if (!isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
      }
      break;
      
    case 'tel':
      if (!isValidPhone(value)) {
        showFieldError(field, 'Please enter a valid phone number');
        return false;
      }
      break;
      
    case 'url':
      if (!isValidURL(value)) {
        showFieldError(field, 'Please enter a valid URL');
        return false;
      }
      break;
      
    case 'password':
      if (value.length < 6) {
        showFieldError(field, 'Password must be at least 6 characters');
        return false;
      }
      break;
      
    case 'number':
      if (isNaN(value)) {
        showFieldError(field, 'Please enter a valid number');
        return false;
      }
      break;
  }
  
  // Show success
  showFieldSuccess(field);
  return true;
}

/**
 * Validate entire form
 */
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  
  return isValid;
}

/**
 * Show field error message
 */
function showFieldError(field, message) {
  field.classList.add('is-invalid');
  field.classList.remove('is-valid');
  
  // Find or create error message
  let errorMsg = field.parentElement.querySelector('.form-text.error');
  
  if (!errorMsg) {
    errorMsg = document.createElement('small');
    errorMsg.className = 'form-text error';
    field.parentElement.appendChild(errorMsg);
  }
  
  errorMsg.textContent = message;
}

/**
 * Show field success
 */
function showFieldSuccess(field) {
  field.classList.add('is-valid');
  field.classList.remove('is-invalid');
  
  // Remove error message
  const errorMsg = field.parentElement.querySelector('.form-text.error');
  if (errorMsg) {
    errorMsg.remove();
  }
}

/**
 * Clear field error
 */
function clearFieldError(field) {
  field.classList.remove('is-invalid');
  
  const errorMsg = field.parentElement.querySelector('.form-text.error');
  if (errorMsg) {
    errorMsg.textContent = '';
  }
}

/**
 * Handle form submission (frontend only - no backend)
 */
function handleFormSubmit(form) {
  if (!validateForm(form)) {
    return false;
  }
  
  // Get form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Log form submission (for demo purposes)
  console.log('Form submitted (frontend only):', form.getAttribute('id') || 'unnamed form');
  console.log('Form data:', data);
  
  // Show success message
  showFormSuccess(form);
  
  // Note: Without a backend, form data is not actually submitted
  // This is a UI-only mockup
  
  return false;
}

/**
 * Show form success message
 */
function showFormSuccess(form) {
  const successMsg = form.querySelector('.alert-success');
  
  if (successMsg) {
    successMsg.style.display = 'block';
  } else {
    const alert = document.createElement('div');
    alert.className = 'alert alert-success';
    alert.innerHTML = `
      <h4>Success!</h4>
      <p>Note: This is a frontend demonstration. Form data is not actually submitted without a backend server.</p>
    `;
    form.insertBefore(alert, form.firstChild);
  }
  
  // Scroll to message
  alert.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  // Clear form fields after 2 seconds
  setTimeout(() => {
    form.reset();
    form.querySelectorAll('.is-valid, .is-invalid').forEach(field => {
      field.classList.remove('is-valid', 'is-invalid');
    });
  }, 2000);
}

/**
 * Email validation
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Phone validation (basic)
 */
function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

/**
 * URL validation
 */
function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Password strength indicator
 */
function getPasswordStrength(password) {
  let strength = 0;
  
  // Length
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  
  // Uppercase
  if (/[A-Z]/.test(password)) strength++;
  
  // Lowercase
  if (/[a-z]/.test(password)) strength++;
  
  // Numbers
  if (/\d/.test(password)) strength++;
  
  // Special characters
  if (/[!@#$%^&*]/.test(password)) strength++;
  
  return strength;
}

/**
 * Display password strength indicator
 */
function showPasswordStrength(passwordInput) {
  const password = passwordInput.value;
  const strength = getPasswordStrength(password);
  
  let indicator = passwordInput.parentElement.querySelector('.password-strength');
  
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.className = 'password-strength';
    indicator.style.marginTop = 'var(--space-sm)';
    indicator.style.height = '4px';
    indicator.style.borderRadius = 'var(--radius-sm)';
    indicator.style.background = '#e0e0e0';
    indicator.style.overflow = 'hidden';
    
    const bar = document.createElement('div');
    bar.style.height = '100%';
    bar.style.width = '0%';
    bar.style.transition = 'all var(--transition-fast)';
    indicator.appendChild(bar);
    
    passwordInput.parentElement.appendChild(indicator);
  }
  
  const bar = indicator.querySelector('div');
  const percentage = (strength / 6) * 100;
  
  bar.style.width = percentage + '%';
  
  if (strength < 2) {
    bar.style.backgroundColor = '#dc3545'; // red
  } else if (strength < 4) {
    bar.style.backgroundColor = '#ffc107'; // yellow
  } else {
    bar.style.backgroundColor = '#28a745'; // green
  }
}

/**
 * Initialize password strength indicator for password fields
 */
function initializePasswordStrength() {
  const passwordFields = document.querySelectorAll('input[type="password"]');
  
  passwordFields.forEach(field => {
    field.addEventListener('input', function() {
      showPasswordStrength(this);
    });
  });
}

/**
 * Checkbox validation (at least one required)
 */
function validateCheckboxGroup(groupName) {
  const checkboxes = document.querySelectorAll(`input[name="${groupName}"]`);
  const checked = Array.from(checkboxes).some(cb => cb.checked);
  
  checkboxes.forEach(cb => {
    if (!checked) {
      cb.classList.add('is-invalid');
    } else {
      cb.classList.remove('is-invalid');
    }
  });
  
  return checked;
}

/**
 * Radio button group validation
 */
function validateRadioGroup(groupName) {
  const radios = document.querySelectorAll(`input[name="${groupName}"]`);
  const checked = Array.from(radios).some(r => r.checked);
  
  radios.forEach(r => {
    if (!checked) {
      r.classList.add('is-invalid');
    } else {
      r.classList.remove('is-invalid');
    }
  });
  
  return checked;
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    initializeForms();
    initializePasswordStrength();
  });
} else {
  initializeForms();
  initializePasswordStrength();
}
