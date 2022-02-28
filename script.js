const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordErrorMessage = document.querySelector(".password-error-message");


confirmPassword.addEventListener("change", checkPasswords);

function checkPasswords(){
    if(password.value == "") return;
    if(password.value != confirmPassword.value){
        confirmPassword.classList.add("sign-up-form-input-error");
        // confirmPassword.setCustomValidity("Passwords do not match");
        // confirmPassword.reportValidity();
        passwordErrorMessage.textContent = "* Passwords do not match";
    } else {
        confirmPassword.classList.remove("sign-up-form-input-error");
        // confirmPassword.setCustomValidity("");
        passwordErrorMessage.textContent = "";
    }
}

