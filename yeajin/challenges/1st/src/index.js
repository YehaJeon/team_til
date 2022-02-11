const title=document.querySelector("h2");
title.style.color="#1abc9c";

const mouseenter=()=>{
    title.innerText="The mouse in here!"
    title.style.color="#3498db";
}
function mouseleave(){
    title.innerText="The mouse is gone!"
    title.style.color="#9b59b6";
}
function contextmenu(){
    title.innerText="That was a right click!"
    title.style.color="#f39c12";
}
function resize(){
    title.innerText="You just resized!"
    title.style.color="#e74c3c";
}
title.addEventListener("mouseenter",mouseenter);
title.addEventListener("mouseleave", mouseleave);
window.addEventListener("contextmenu",contextmenu);
window.addEventListener("resize",resize);