// Update navigation based on authentication status
document.addEventListener('DOMContentLoaded', () => {
    const updateNavigation = () => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        const navLinks = document.querySelectorAll('nav a, .mobile-nav a');
        
        navLinks.forEach(link => {
            if (link.textContent.includes('Stories') || link.textContent.includes('Sign Up') || link.textContent.includes('Editor')) {
                if (isAuthenticated) {
                    if (link.textContent.includes('Sign Up')) {
                        link.href = 'story.html';
                        link.textContent = 'Stories';
                    }
                    if (link.textContent.includes('Editor')) {
                        link.style.display = 'block';
                    }
                } else {
                    if (link.textContent.includes('Editor')) {
                        link.style.display = 'none';
                    } else {
                        link.href = 'signup.html';
                        link.textContent = 'Sign Up';
                    }
                }
            }
        });
    };

    // Update on page load
    updateNavigation();
    
    // Update when authentication status changes
    window.addEventListener('storage', (e) => {
        if (e.key === 'isAuthenticated') {
            updateNavigation();
        }
    });
});
