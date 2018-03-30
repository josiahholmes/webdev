$(document).ready(function() {
    $('#register-form').css('display', 'none');

    var regForm = document.getElementById('register-form');
    var loginForm = document.getElementById('login-form');

    function makeUser(uname, passwd) {
        localStorage.setItem("user", uname);
        localStorage.setItem("pass", passwd);
        alert("Registration successful!");
    }

    function checkIfUserExists(uname) { 
        var user = localStorage.getItem("user");
        return (uname == user);
    }
    
    function validatePassword(passwd) {
        var pass = localStorage.getItem("pass");
        return (passwd == pass);
    }
    
    $('#signup-btn').on('click', function(e) {
        e.preventDefault();
        $('#login-form').css('display', 'none');
        $('#register-form').css('display', 'block');
    });

    loginForm.onsubmit = function() {
        var loginUsername = document.getElementById('login-user').value;
        var loginPassword = document.getElementById('login-password').value;

        if (checkIfUserExists(loginUsername)) {
            if (validatePassword(loginPassword)) {
                alert("Login successful!");
            }
            else {
                alert("Incorrect password!");
            }
        } else {
            alert("User not found! Did you create an account?");
        }
    }

    regForm.onsubmit = function() {
        var regUsername = document.getElementById('reg-user').value;
        var regPassword = document.getElementById('reg-password').value;
        var regReEnterPassowrd = document.getElementById('reg-reenter-password').value;

        if (regUsername == "") { 
            alert("Please provide a username!"); 
        }
        else if (checkIfUserExists(regUsername)) {
            alert("Username is taken!");
        }
        else if (regPassword != regReEnterPassowrd) {
            alert("Passwords do not match!");
        }
        else if (regPassword.length < 8) {
            alert("Password is too short! Try a length of 8 or more.");
        }
        else {
            makeUser(regUsername, regPassword);
        }
    }
});