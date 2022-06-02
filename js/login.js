document.getElementById('login-submit').addEventListener('click', function(){

    // Get username from input
    const emailField = document.getElementById('user-name');
    const userEmail = emailField.value;

    // Get username from input
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // Check email and password
    if (userEmail == 'asif@amarbank.com' && userPassword == 'asif123') {
        window.location.href = './pages/bank.html';
    }
    else {
        alert ('Invalid User');
    }
})