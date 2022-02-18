const menu=document.querySelector(".toggle");
const bar=document.querySelectorAll("span");
console.log(bar);
function changeBar(){
  menu.classList.toggle("active");
  menu.classList.toggle("colorChange");
  menu.classList.toggle("barColor");
}
menu.addEventListener("click",changeBar);

