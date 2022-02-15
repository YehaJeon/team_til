const range=document.querySelector("#rangeNum");
const guess=document.querySelector("#choseNum");
const playButton=document.querySelector("#btn");
const alarm=document.querySelector("#notice");
const result=document.querySelector("#result");
function gameStart(event){
  event.preventDefault();

  const rangeNum=range.value;
  const guessNum=guess.value;
  const randomNum= Math.ceil(Math.random()*rangeNum);
  alarm.classList.remove("hidden");
  alarm.innerText=`You chose: ${guessNum}, the machine chose: ${randomNum}`
  if(Number(randomNum)==(guessNum)){
    result.classList.remove("hidden");
    result.innerText="You Won!";
  }
  else if(Number(rangeNum)<Number(guessNum)){
    result.classList.remove("hidden");
    result.innerText="Please choose number in range"

  }
  else{
    result.classList.remove("hidden");
    result.innerText="You lost~";
  }
}
playButton.addEventListener("click", gameStart);