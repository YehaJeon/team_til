const clockTitle=document.querySelector(".js-clock");


setInterval(
function hello(){
const today=new Date();
const dDay=new Date(2022,11,25);
const gap=dDay.getTime()-today.getTime();
const second = Math.floor((gap / 1000) % 60);
const minute = Math.floor((gap / 1000 / 60) % 60);
const hour = Math.floor(gap / 1000 / 60 / 60) % 24;
const day = Math.floor(gap / 1000 / 60 / 60 / 24);
  clockTitle.innerText= `${day}d ${hour < 10 ? `0${hour}` : hour}h ${minute < 10 ? `0${minute}` : minute}m ${
    second < 10 ? `0${second}` : second}s`;
},1000);

