const loginInput = document.querySelector(".login-form input");
const loginForm= document.querySelector(".login-form");
function onLoginSubmit(){
  preventDefault()
  const username=loginInput.value;
  console.log(username);
}
loginForm.addEventListener("submit",onLoginSubmit);