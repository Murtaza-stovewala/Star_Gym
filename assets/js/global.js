/**
 * Global JavaScript for Gym Website
 * Handles common interactions like mobile navigation defaults, smooth scrolling, etc.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Mobile Header Logic (if we had a hamburger menu, we'd toggle it here)
    // Currently, mobile nav is bottom-fixed or handled via HTML duplication.

    // Example: Highlight active link based on URL if NOT hardcoded
    const currentPath = window.location.pathname;
    // This logic is overlapping with hardcoded active classes.
    // We can leave it for now or implement if we removed hardcoded classes.
    // Since we hardcoded 'active' class in HTML for simplicity, we don't need dynamic highlighting here.
});
