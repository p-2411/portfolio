document.addEventListener('DOMContentLoaded', function() {
    const dayHeaders = document.querySelectorAll('.day-header');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event listeners to all tab buttons
    dayHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all headers and tab contents
            dayHeaders.forEach(h => h.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked header
            this.classList.add('active');
            
            // Show corresponding tab content
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Smooth scrolling to content section when tab is clicked
    dayHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const contentSection = document.getElementById('content-section');
            contentSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add some interactive hover effects
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click animation to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});