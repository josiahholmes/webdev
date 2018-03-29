$(document).ready(function() {
    $('#register-form').css('display', 'none');

    var userBase = [];
    var regForm = document.getElementById('register-form');
    var loginForm = document.getElementById('login-form');

    function userExists(uname) { 
        if (userBase.hasOwnProperty(uname)) 
            return true;
        return false;
    }
    
    function validateUser(uname) {
        return userBase.hasOwnProperty(uname);
    }
    
    function validatePassword(uname, passwd) {
        return (userBase[uname] == passwd);
    }
    
    function addUser(uname, passwd) {
        userBase[uname] = passwd;
        alert("Registration successful!");
    }
    
    $('#signup-btn').on('click', function(e) {
        e.preventDefault();
        $('#login-form').css('display', 'none');
        $('#register-form').css('display', 'block');
    });

    loginForm.onsubmit = function() {
        var loginUsername = document.getElementById('login-user').value;
        var loginPassword = document.getElementById('login-password').value;

        if (validateUser(loginUsername)) {
            if (validatePassword(loginUsername, loginPassword)) {
                alert("Login successful!");
            }
            else {
                alert("Incorrect password!");
            }
        } else {
            alert("Incorrect username!");
        }
    }

    regForm.onsubmit = function() {
        var regUsername = document.getElementById('reg-user').value;
        var regPassword = document.getElementById('reg-password').value;
        var regReEnterPassowrd = document.getElementById('reg-reenter-password').value;

        if (regUsername == "") { 
            alert("Please provide a username!"); 
        }
        else if (userExists(regUsername)) {
            alert("Username is taken!");
        }
        else if (regPassword != regReEnterPassowrd) {
            alert("Passwords do not match!");
        }
        else if (regPassword.length < 8) {
            alert("Password is too short! Try a length of 8 or more.");
        }
        else {
            addUser(regUsername, regPassword);
        }
    }
});