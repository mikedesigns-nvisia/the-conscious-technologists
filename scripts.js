/**
 * Main JavaScript for The Conscious Technologists website
 */

// Initialize all interactive elements when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Mobile menu functionality
    initMobileMenu();
    
    // Form validation and submission
    initFormHandling();
    
    // Add any other initialization here
});

/**
 * Initialize smooth scrolling for all anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('#mobile-menu');
    const closeMenuButton = document.querySelector('#mobile-menu button');
    
    if (mobileMenuButton && mobileMenu) {
        // Open menu
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'true');
        });
        
        // Close menu
        if (closeMenuButton) {
            closeMenuButton.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        }
        
        // Close menu when clicking on links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

/**
 * Initialize form validation and submission
 */
function initFormHandling() {
    const joinForm = document.getElementById('join-form');
    
    if (joinForm) {
        const submitButton = joinForm.querySelector('button[type="button"]');
        
        if (submitButton) {
            submitButton.addEventListener('click', function() {
                if (validateForm(joinForm)) {
                    submitForm(joinForm);
                }
            });
        }
    }
}

/**
 * Validate form fields
 * @param {HTMLFormElement} form - The form to validate
 * @returns {boolean} - Whether the form is valid
 */
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    // Clear previous error messages
    form.querySelectorAll('.error-message').forEach(el => el.remove());
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            showFieldError(field, 'This field is required');
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
            isValid = false;
            showFieldError(field, 'Please enter a valid email address');
        }
    });
    
    // Check consent checkbox
    const consentCheckbox = form.querySelector('#consent');
    if (consentCheckbox && !consentCheckbox.checked) {
        isValid = false;
        showFieldError(consentCheckbox, 'You must agree to join the network');
    }
    
    return isValid;
}

/**
 * Display error message for a form field
 * @param {HTMLElement} field - The field with an error
 * @param {string} message - The error message to display
 */
function showFieldError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
    field.classList.add('border-red-500');
    
    // Remove error highlighting when field is edited
    field.addEventListener('input', function() {
        field.classList.remove('border-red-500');
        const errorMsg = field.parentNode.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    }, { once: true });
}

/**
 * Check if email is valid
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Submit form data
 * @param {HTMLFormElement} form - The form to submit
 */
function submitForm(form) {
    // Get form data
    const formData = new FormData(form);
    const formDataObj = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });
    
    // In a real implementation, you would send this data to your server
    console.log('Form submitted:', formDataObj);
    
    // Show success message
    const formContainer = form.parentNode;
    form.style.display = 'none';
    
    const successMessage = document.createElement('div');
    successMessage.className = 'text-center py-8';
    successMessage.innerHTML = `
        <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-check text-green-600 text-2xl"></i>
        </div>
        <h3 class="text-2xl font-bold mb-2 text-slate-800">Thank You!</h3>
        <p class="text-slate-600">We've received your submission and will be in touch soon.</p>
    `;
    
    formContainer.appendChild(successMessage);
}
