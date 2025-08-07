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

    // Handle Sign In button click (optional logic)
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            console.log('Sign In button clicked!');
            alert('Sign In functionality would be implemented here (e.g., redirect to login page or open a modal).');
        });
    }

    // Handle Sign Up form submission
    if (signUpForm) {
        signUpForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page reload

            const nameInput = signUpForm.querySelector('input[type="text"]');
            const emailInput = signUpForm.querySelector('input[type="email"]');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();

            // Basic validation
            if (name === '' || email === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }

            console.log('Name:', name);
            console.log('Email:', email);

            // Send data to backend
            fetch('https://mini-project-y6mj.onrender.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Registration successful!');
                    nameInput.value = '';
                    emailInput.value = '';
                } else {
                    alert('Registration failed: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error during registration:', error);
                alert('An error occurred during registration.');
            });
        });
    }
});
