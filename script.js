// Selectors
const container = document.querySelector('.container');
const showSignupBtn = document.getElementById('showSignup');
const showLoginBtn = document.getElementById('showLogin');

// Show Signup Form
showSignupBtn.addEventListener('click', () => {
    container.classList.add('signup-active');
});

// Show Login Form
showLoginBtn.addEventListener('click', () => {
    container.classList.remove('signup-active');
});
