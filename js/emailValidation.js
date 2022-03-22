const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const userForm = document.getElementById("userForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userNameText = document.getElementById("nameAlert");
const userEmailText = document.getElementById("emailAlert");

userForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    if(!userName.value){
        userName.className = "input-error";
        userNameText.innerText = "Digite seu nome!";
    }else{
        userName.className = "input-border";
        userNameText.innerText = " ";
    }    
    if(!userEmail.value){
        userEmail.className = "input-error";
        userEmailText.innerText = "Digite seu email!";
    }else if(emailRegex.test(userEmail.value) ){
        userForm.submit();
    }else{
        userEmailText.innerText = "Digite um email válido!";
    }
})
