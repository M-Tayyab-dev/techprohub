document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('registrationForm');
    const validationMessage = document.getElementById('validation-message');
    
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('cpassword').value;
            
            // Validation
            validationMessage.textContent = '';
            
            if(!name || !email || !password || !confirmPassword) {
                validationMessage.textContent = 'Please fill all fields';
                return;
            }
            
            if(password !== confirmPassword) {
                validationMessage.textContent = 'Passwords do not match';
                return;
            }
            
            if(!email.includes('@')) {
                validationMessage.textContent = 'Please enter a valid email';
                return;
            }

            // Set authentication flag
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('currentUser', name);
            
            // Show logout button
            document.getElementById('logout-row').style.display = 'block';
            
            // Add logout handler
            document.getElementById('logout-btn').addEventListener('click', () => {
                localStorage.removeItem('isAuthenticated');
                localStorage.removeItem('currentUser');
                window.location.href = 'signup.html';
            });
            
            // Redirect to stories page after 3 seconds
            setTimeout(() => {
                window.location.href = 'story.html';
            }, 3000);
        });
    }
});
