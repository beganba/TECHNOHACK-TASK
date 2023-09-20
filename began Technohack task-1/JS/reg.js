const togglePassword = document
.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', () => {
// Toggle the type attribute using
// getAttribure() method
const type = password
    .getAttribute('type') === 'password' ?
    'text' : 'password';
password.setAttribute('type', type);
// Toggle the eye and bi-eye icon
this.classList.toggle('bi-eye');
});

//verify password and confirm password match    
function Validate() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    else{
        alert("successfully registered...!")
    }
    return true;
}

