const button=document.querySelector("#btn");
const div=document.querySelector(".modal");
const btn1=document.querySelector("#btn1");
function click(){
    div.classList.remove("hidden");
}
function remove(){
    div.classList.add("hidden");
}

button.addEventListener("click", click);
btn1.addEventListener("click",remove);
