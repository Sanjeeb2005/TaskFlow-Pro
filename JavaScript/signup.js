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
    if(!regex.test(email)){
        emailError.textContent = 'Incorrect Email';
        emailError.style.display = 'block';
    }else{
        emailError.textContent = '';
        emailError.style.display = 'none';
    }
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    
});