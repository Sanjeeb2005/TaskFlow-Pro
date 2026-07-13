const formInput = document.querySelector('#signinForm');

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const showHide = document.querySelector('.eye');

const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');

formInput.addEventListener('submit', function(event){

    event.preventDefault();

    const email = emailInput.value.trim();
    const regex = /^[A-Za-z0-9_.]+@[A-Za-z]+\.[A-Za-z]+$/;

    if(email === ''){
        emailError.textContent = 'email required';
        emailError.style.display = 'block';
    }else if(!regex.test(email)){
        emailError.textContent = 'Incorrect email';
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

    

});