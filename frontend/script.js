document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.video-bg');
    
    if (video) {
        // Log video events
        video.addEventListener('loadeddata', () => console.log('Video data loaded'));
        video.addEventListener('playing', () => console.log('Video is playing'));
        video.addEventListener('error', (e) => console.error('Video error:', e));
        
        // Force play
        video.play().catch(error => {
            console.error("Video playback failed:", error);
        });
    }
    
    const signInBtn = document.querySelector('.sign-in-btn');
    const signUpForm = document.querySelector('.signup-form');

    // --- Optional: Handle Sign In button click (if it were to trigger a modal or redirect) ---
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            console.log('Sign In button clicked!');
            // In a real application, you might:
            // 1. Redirect to a login page: window.location.href = 'login.html';
            // 2. Show a login modal: toggleLoginModal();
            alert('Sign In functionality would be implemented here (e.g., redirect to login page or open a modal).');
        });
    }

    // --- Handle Sign Up form submission ---
    if (signUpForm) {
        signUpForm.addEventListener('submit', (event) => {
            // Prevent the default form submission behavior (page reload)
            event.preventDefault();

            console.log('Sign Up form submitted!');

            // Get input values
            const nameInput = signUpForm.querySelector('input[type="text"]');
            const emailInput = signUpForm.querySelector('input[type="email"]');

            const name = nameInput.value.trim(); // .trim() removes whitespace
            const email = emailInput.value.trim();

            // Basic validation (can be expanded)
            if (name === '' || email === '') {
                alert('Please fill in all fields.');
                return; // Stop the function if validation fails
            }

            // Simple email format check (more robust regex needed for production)
            if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }

            console.log('Name:', name);
            console.log('Email:', email);

            // In a real application, you would send this data to a server:
            // fetch('/api/register', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ name, email }),
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         alert('Registration successful!');
            //         // Optionally clear the form
            //         nameInput.value = '';
            //         emailInput.value = '';
            //     } else {
            //         alert('Registration failed: ' + data.message);
            //     }
            // })
            // .catch(error => {
            //     console.error('Error during registration:', error);
            //     alert('An error occurred during registration.');
            // });

            alert(`Thank you, ${name}! Your email ${email} has been submitted.`);

            // Optionally clear the form after successful submission
            nameInput.value = '';
            emailInput.value = '';
        });
    }
});
