/* SANIP/EQASA - forms */

function initializeForms() {
  document.querySelectorAll('form').forEach(function (form) {
    if (form.dataset.initialized === 'true') return;
    form.dataset.initialized = 'true';

    form.querySelectorAll('input, textarea, select').forEach(function (input) {
      input.addEventListener('change', function () { validateField(this); });
      input.addEventListener('blur', function () { validateField(this); });
    });

    form.addEventListener('submit', function (event) {
      if (!form.getAttribute('action') || form.getAttribute('data-no-submit') === 'true') {
        event.preventDefault();
        handleFormSubmit(form);
      }
    });
  });
}

function validateField(field) {
  const value = field.value.trim();
  const type = field.type;
  clearFieldError(field);

  if (field.hasAttribute('required') && !value) {
    showFieldError(field, 'This field is required');
    return false;
  }

  if (!value && !field.hasAttribute('required')) return true;

  if (type === 'email' && !isValidEmail(value)) {
    showFieldError(field, 'Please enter a valid email address');
    return false;
  }
  if (type === 'tel' && !isValidPhone(value)) {
    showFieldError(field, 'Please enter a valid phone number');
    return false;
  }
  if (type === 'url' && !isValidURL(value)) {
    showFieldError(field, 'Please enter a valid URL');
    return false;
  }
  if (type === 'password' && value.length < 6) {
    showFieldError(field, 'Password must be at least 6 characters');
    return false;
  }
  if (type === 'number' && isNaN(value)) {
    showFieldError(field, 'Please enter a valid number');
    return false;
  }

  showFieldSuccess(field);
  return true;
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('input[required], textarea[required], select[required]').forEach(function (field) {
    if (!validateField(field)) valid = false;
  });
  return valid;
}

function showFieldError(field, message) {
  field.classList.add('is-invalid');
  field.classList.remove('is-valid');
  let error = field.parentElement.querySelector('.form-text.error');
  if (!error) {
    error = document.createElement('small');
    error.className = 'form-text error';
    field.parentElement.appendChild(error);
  }
  error.textContent = message;
}

function showFieldSuccess(field) {
  field.classList.add('is-valid');
  field.classList.remove('is-invalid');
  const error = field.parentElement.querySelector('.form-text.error');
  if (error) error.remove();
}

function clearFieldError(field) {
  field.classList.remove('is-invalid');
  const error = field.parentElement.querySelector('.form-text.error');
  if (error) error.remove();
}

function handleFormSubmit(form) {
  if (!validateForm(form)) return false;
  showFormSuccess(form);
  return false;
}

function showFormSuccess(form) {
  let alert = form.querySelector('.alert-success');
  if (!alert) {
    alert = document.createElement('div');
    alert.className = 'alert alert-success';
    alert.innerHTML = '<h4>Success!</h4><p>This form is currently a frontend-only demonstration and does not send data to a server.</p>';
    form.insertBefore(alert, form.firstChild);
  }
  alert.style.display = 'block';
  alert.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[\d\s\-\+\(\)]{10,}$/.test(phone);
}

function isValidURL(url) {
  try { new URL(url); return true; } catch (error) { return false; }
}

function getPasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[!@#$%^&*]/.test(password)) strength++;
  return strength;
}

function showPasswordStrength(passwordInput) {
  let indicator = passwordInput.parentElement.querySelector('.password-strength');
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.className = 'password-strength';
    indicator.style.cssText = 'margin-top:var(--space-sm);height:4px;border-radius:var(--radius-sm);background:#e0e0e0;overflow:hidden;';
    const bar = document.createElement('div');
    bar.style.cssText = 'height:100%;width:0%;transition:width var(--transition-fast);';
    indicator.appendChild(bar);
    passwordInput.parentElement.appendChild(indicator);
  }
  const strength = getPasswordStrength(passwordInput.value);
  const bar = indicator.querySelector('div');
  bar.style.width = ((strength / 6) * 100) + '%';
}

function initializePasswordStrength() {
  document.querySelectorAll('input[type="password"]').forEach(function (field) {
    if (field.dataset.passwordInitialized === 'true') return;
    field.dataset.passwordInitialized = 'true';
    field.addEventListener('input', function () { showPasswordStrength(this); });
  });
}

function validateCheckboxGroup(groupName) {
  const boxes = Array.from(document.querySelectorAll('input[name="' + groupName + '"]'));
  const checked = boxes.some(function (box) { return box.checked; });
  boxes.forEach(function (box) { box.classList.toggle('is-invalid', !checked); });
  return checked;
}

function validateRadioGroup(groupName) {
  return validateCheckboxGroup(groupName);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    initializeForms();
    initializePasswordStrength();
  });
} else {
  initializeForms();
  initializePasswordStrength();
}
