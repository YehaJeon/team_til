let today = new Date();   
const todayDate=document.querySelector("#date");
let year = today.getFullYear(); 
let month = today.getMonth() + 1; 
let date = today.getDate();
todayDate.innerText=`${year}.${month}.${date}`;