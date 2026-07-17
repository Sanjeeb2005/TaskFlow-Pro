const signupForm = document.querySelector('#signupForm');

const fullNameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');

const nameError = document.querySelector('#fullNameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const confirmPasswordError = document.querySelector('#confirmPasswordError');

signupForm.addEventListener('submit', function(event){

    event.preventDefault();

    const fullName = fullNameInput.value.trim();
    if(fullName === ""){
        nameError.textContent = 'Full Name Required';
        nameError.style.display = 'block';
    }else if(fullName.length<3){
        nameError.textContent = 'Full Name should be more than 3 letters';
        nameError.style.display = 'block';
    }else{
        nameError.textContent = '';
        nameError.style.display = 'none';
    }
    const email = emailInput.value.trim();
    const regex = /^[A-Za-z0-9._]+@[A-Za-z]+\.[A-Za-z]+$/;
    if(email === ''){
        emailError.textContent = 'Email Required';
        emailError.style.display = 'block';
    }else if(!regex.test(email)){
        emailError.textContent = 'Incorrect Email';
        emailError.style.display = 'block';
    }else{
        emailError.textContent = '';
        emailError.style.display = 'none';
    }
    const password = passwordInput.value.trim();

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[@#&%$!_+]/.test(password);
    if(password === ''){
        passwordError.textContent = 'Password Required';
        passwordError.style.display = 'block';
    }else if(!(password.length>=8 && password.length<=16)){
        passwordError.textContent = 'Password must have 8 to 16 Characters';
        passwordError.style.display = 'block';    
    }else if(!hasUpperCase){
        passwordError.textContent = 'Password must contain at least one Uppercase Letter';
        passwordError.style.display = 'block';
    }else if(!hasLowerCase){
        passwordError.textContent = 'Password must contain at least one Lowercase Letter';
        passwordError.style.display = 'block';
    }else if(!hasNumber){
        passwordError.textContent = 'Password must contain at least one number';
        passwordError.style.display = 'block';
    }else if(!hasSpecialCharacter){
        passwordError.textContent = 'Password must contain at least one Special Characters';
        passwordError.style.display = 'block';
    }else{
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }

    const confirmPassword = confirmPasswordInput.value.trim();
    if(confirmPassword === ''){
        confirmPasswordError.textContent = 'Confirm Password Required';
        confirmPasswordError.style.display= 'block';
    }else if(confirmPassword !== password){
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
    }else{
        confirmPasswordError.textContent = '';
        confirmPasswordError.style.display = 'none';
    }

    fetch('http://localhost:3000/signup',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName,
            email,
            password
        })
    });
    
});