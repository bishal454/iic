
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username && password) {
        
        const token = btoa(username + ':' + new Date().getTime());

        
        localStorage.setItem('authToken', token);

        
        if (username === 'admin') {
            window.location.href = "dashboard.html"; 
        } else {
            window.location.href = "profile.html"; 
        }
    } else {
        alert('Please enter both username and password.');
    }
});



function handleSSOLogin(provider) {
    alert(`You are logged in via ${provider}.`);
   
    const token = generateToken(provider, 'sso');
    localStorage.setItem('authToken', token);
    
    window.location.href = "dashboard.html";
}


document.getElementById('google-login').addEventListener('click', function() {
    handleSSOLogin('Google');
});

document.getElementById('facebook-login').addEventListener('click', function() {
    handleSSOLogin('Facebook');
});

document.getElementById('github-login').addEventListener('click', function() {
    handleSSOLogin('GitHub');
});


function generateToken(username, password) {
  
    return btoa(username + ':' + password + ':' + new Date().getTime());
}


function checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        alert('You are not authenticated. Redirecting to login page.');
        window.location.href = "index.html";
    }
}


if (window.location.pathname.includes('dashboard.html') || window.location.pathname.includes('profile.html')) {
    checkAuth();
}



