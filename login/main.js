document.addEventListener('DOMContentLoaded', function () {

    const showHiddenPassword = (inputPassword, inputIcon) => {
        const input = document.getElementById(inputPassword);
        const iconEye = document.getElementById(inputIcon);

        iconEye.addEventListener('click', () => {
            if (input.type === 'password') {
                input.type = 'text';
                iconEye.classList.add('ri-eye-line');
                iconEye.classList.remove('ri-eye-off-line');
            } else {
                input.type = 'password';
                iconEye.classList.remove('ri-eye-line');
                iconEye.classList.add('ri-eye-off-line');
            }
        });
    }


    showHiddenPassword('password', 'input-icon');


    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!email || !password) {
            alert('Please fill out all fields.');
            return;
        }

        authenticateUser(email, password);
    });

    function authenticateUser(email, password) {
        const mockServerResponse = (email === 'test@example.com' && password === 'password123');

        if (mockServerResponse) {
            alert('Login successful!');
        } else {
            alert('Invalid email or password.');
        }
    }
});
