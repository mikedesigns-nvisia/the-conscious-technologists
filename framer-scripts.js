// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Mobile menu toggle functionality
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            // This will be replaced with actual mobile menu functionality
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            } else {
                console.log('Mobile menu not implemented yet');
            }
        });
    }
});

// Framer-specific interaction hooks
window.FramerInteractions = {
    // Methods that Framer can call to trigger specific interactions
    toggleMobileMenu: function() {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    },
    
    submitForm: function(formId) {
        const form = document.getElementById(formId);
        if (form) {
            // This would normally submit the form, but we'll just log for now
            console.log('Form submission triggered by Framer');
            
            // Get form data for Framer to use
            const formData = new FormData(form);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            console.log('Form data:', formDataObj);
            return formDataObj;
        }
        return null;
    },
    
    scrollToSection: function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
};
