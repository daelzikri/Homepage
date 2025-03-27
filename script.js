document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    function showError(errorElement, message) {
        errorElement.textContent = message;
    }

    function clearError(errorElement) {
        errorElement.textContent = '';
    }

    function validateUsername() {
        const usernameValue = username.value.trim();
        
        if (usernameValue === '') {
            showError(usernameError, 'Username cannot be empty');
            return false;
        }

        if (usernameValue.length < 3) {
            showError(usernameError, 'Username must be at least 3 characters long');
            return false;
        }

        clearError(usernameError);
        return true;
    }

    function validatePassword() {
        const passwordValue = password.value;
        
        if (passwordValue === '') {
            showError(passwordError, 'Password cannot be empty');
            return false;
        }

        if (passwordValue.length < 6) {
            showError(passwordError, 'Password must be at least 6 characters long');
            return false;
        }

        if (!/[A-Z]/.test(passwordValue)) {
            showError(passwordError, 'Password must contain at least one uppercase letter');
            return false;
        }

        if (!/[0-9]/.test(passwordValue)) {
            showError(passwordError, 'Password must contain at least one number');
            return false;
        }

        clearError(passwordError);
        return true;
    }

    username.addEventListener('input', validateUsername);
    password.addEventListener('input', validatePassword);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();

        if (isUsernameValid && isPasswordValid) {
            alert('Login successful!');
        }
    });
});