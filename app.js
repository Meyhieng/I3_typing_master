// Check user session
function checkUserSession() {
    const userInfo = document.getElementById('userInfo');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        welcomeMessage.textContent = `Welcome back, ${user.name}!`;
        userInfo.style.display = 'block';
    } else {
        userInfo.style.display = 'none';
    }
}

// Handle user registration
function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    // Simple validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful! You can now log in.');
    location.href = '4.userLoginPage.html'; // Redirect to login page
}

// Handle user login
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Login successful!');
        location.href = '6.TypingTest.html'; // Redirect to typing test page
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Handle password reset
function handlePasswordReset(event) {
    event.preventDefault();

    const email = document.getElementById('resetEmail').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email) {
        alert('Password reset instructions have been sent to your email!');
        // Here you would implement actual email sending in a real application
    } else {
        alert('Email not found. Please register if you don’t have an account.');
    }
}

// Logout function
function logout() {
    localStorage.removeItem('user');
    alert('You have logged out.');
    location.href = '1.homePage.html'; // Redirect to home page
}

// Example function for starting the typing test
function startTest() {
    // Logic to start the typing test
    alert('Typing test started! Good luck!');
}

// Example function for resetting the test
function resetTest() {
    document.getElementById('typingInput').value = '';
    document.getElementById('currentWpm').textContent = '0';
    document.getElementById('currentAccuracy').textContent = '100%';
    document.getElementById('timeElapsed').textContent = '0:00';
    alert('Test reset successfully!');
}

// Function to update progress during typing
function updateProgress() {
    // Logic to update typing progress and statistics
    const input = document.getElementById('typingInput');
    const sampleText = document.getElementById('sampleText').textContent;

    const inputText = input.value;
    const wpm = calculateWPM(inputText, sampleText);
    const accuracy = calculateAccuracy(inputText, sampleText);

    document.getElementById('currentWpm').textContent = wpm;
    document.getElementById('currentAccuracy').textContent = accuracy + '%';
}

// Function to calculate WPM
function calculateWPM(inputText, sampleText) {
    // Implement logic to calculate words per minute
    return Math.round((inputText.split(' ').length / 1) * 60); // Simple example
}

// Function to calculate accuracy
function calculateAccuracy(inputText, sampleText) {
    const correctChars = inputText.split('').filter((char, index) => char === sampleText[index]).length;
    const accuracy = (correctChars / sampleText.length) * 100;
    return Math.round(accuracy);
}