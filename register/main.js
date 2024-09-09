

document.addEventListener('DOMContentLoaded', () => {
    const continueWithEmailBtn = document.getElementById('continueWithEmail');
    const signupSlideIn = document.getElementById('signupSlideIn');
    const closeSlideIn = document.getElementById('closeSlideIn');
    const signupForm = document.getElementById('signupForm');


    continueWithEmailBtn.addEventListener('click', () => {
        signupSlideIn.classList.add('show');
    });


    closeSlideIn.addEventListener('click', () => {
        signupSlideIn.classList.remove('show');
    });


    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill out all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }


        alert('Sign up successful!');


        signupSlideIn.classList.remove('show');


    });
});
