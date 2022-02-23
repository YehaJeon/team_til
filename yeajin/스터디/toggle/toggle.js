const toggleIn= document.querySelector(".toggleIn");
const toggleOut=document.querySelector(".toggleOut")
const bgc=document.querySelector("body");
let cnt=1;
function countClick(){
  cntPlus=cnt++;
  console.log(cnt);
}
function bgcChange(){
  if(cnt%2==0){
    bgc.classList.remove("colorChangeAgain");
    bgc.classList.add("colorChange");
    toggleIn.classList.remove("moveAgain");
    toggleIn.classList.add("move");
  }
  else{
    toggleIn.classList.remove("move");
    toggleIn.classList.add("moveAgain");
    bgc.classList.remove("colorChange");
    bgc.classList.add("colorChangeAgain");
  }
}
toggleIn.addEventListener("click",countClick);
toggleIn.addEventListener("click",bgcChange);
