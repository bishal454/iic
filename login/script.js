
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username && password) {
        // Simulate token generation
        const token = btoa(username + ':' + new Date().getTime()); // Base64 encode

        // Store the simulated token in localStorage
        localStorage.setItem('authToken', token);

        // Redirect based on username (or any condition you choose)
        if (username === 'admin') {
            window.location.href = "dashboard.html"; // Admin dashboard page
        } else {
            window.location.href = "profile.html"; // User profile page
        }
    } else {
        alert('Please enter both username and password.');
    }
});


// Handle SSO login
function handleSSOLogin(provider) {
    alert(`You are logged in via ${provider}.`);
    // Simulate token generation for SSO
    const token = generateToken(provider, 'sso');
    localStorage.setItem('authToken', token);
    // Redirect to dashboard page
    window.location.href = "dashboard.html";
}

// Attach event listeners to SSO buttons
document.getElementById('google-login').addEventListener('click', function() {
    handleSSOLogin('Google');
});

document.getElementById('facebook-login').addEventListener('click', function() {
    handleSSOLogin('Facebook');
});

document.getElementById('github-login').addEventListener('click', function() {
    handleSSOLogin('GitHub');
});

// Function to generate a simple token (for SSO simulation)
function generateToken(username, password) {
    // In real cases, a token would be more complex and secure
    return btoa(username + ':' + password + ':' + new Date().getTime());
}

// Function to check token and redirect if not valid
function checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        alert('You are not authenticated. Redirecting to login page.');
        window.location.href = "index.html";
    }
}

// Call checkAuth() on protected pages
if (window.location.pathname.includes('dashboard.html') || window.location.pathname.includes('profile.html')) {
    checkAuth();
}



