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
  alarm.innerText=`너는 ${guessNum}, 나는 ${randomNum}`;
  if(Number(randomNum)==(guessNum)){
    result.classList.remove("hidden");
    result.innerText="어떻게 알았지?";
  }
  else if(Number(rangeNum)<Number(guessNum)){
    result.classList.remove("hidden");
    result.innerText="사이의 값을 넣으라니까ㅜㅜ"

  }
  else{
    result.classList.remove("hidden");
    result.innerText="땡~!! 틀렸지롱ㅎ";
  }
}
playButton.addEventListener("click", gameStart);