// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username && password) {
        alert(`Logged in as: ${username}`);
    } else {
        alert('Please enter both username and password.');
    }
});

document.getElementById('google-login').addEventListener('click', function() {
    alert('Redirecting to Google SSO...');
    // Add logic to redirect to Google SSO
});

document.getElementById('facebook-login').addEventListener('click', function() {
    alert('Redirecting to Facebook SSO...');
    // Add logic to redirect to Facebook SSO
});

document.getElementById('github-login').addEventListener('click', function() {
    alert('Redirecting to GitHub SSO...');
    // Add logic to redirect to GitHub SSO
});
