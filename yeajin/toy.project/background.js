const colors=[ 
"rgb(101, 153, 221)",
"rgb(235, 160, 131)",
"rgb(181, 212, 241)";
];

const body=document.querySelector(".top");
const btn1=document.querySelector("#cgb")
function changeBgc() {
const colorOne=colors[Math.floor(Math.random()*colors.length)];
const colorTwo=colors[Math.floor(Math.random()*colors.length)];
  body.style.background = `linear-gradient(to top,${colorOne}, ${colorTwo})`;
}
btn1.addEventListener("click",changeBgc);