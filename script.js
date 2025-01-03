document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.getElementById('successMessage').textContent = '';

    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value;
    if (!/^[a-zA-Z]{2,30}$/.test(name)) {
        document.getElementById('nameError').textContent = 'Name must be 2-30 characters and letters only.';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Validate age
    const age = parseInt(document.getElementById('age').value, 10);
    if (isNaN(age) || age < 18 || age > 120) {
        document.getElementById('ageError').textContent = 'Age must be between 18 and 120.';
        isValid = false;
    }

    // Validate phone
    const phone = document.getElementById('phone').value;
    if (!/^\+\d{1,3}\s\d{2}\s\d{5}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone must match the format +x xx xxxxx.';
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be 8+ characters, with uppercase, lowercase, number, and special character.';
        isValid = false;
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Registration successful!';
    }
});
