const back=document.querySelector("body");
const colors=["ivory","violet","rgb(96, 138, 228)","rgb(190, 245, 168)","rgb(240, 140, 140)"];

back.style.backgroundColor=colors[0];

function resize(){
    const whole=window.innerWidth;
    if(whole<=200){
        back.style.backgroundColor=colors[1];
    }else if(whole>200 && whole <=400 ){
        back.style.backgroundColor = colors[2]
    }else if(whole>400 && whole <=600){
        back.style.backgroundColor = colors[3]
    }else if(whole>800 &&whole <=1000){
        back.style.backgroundColor=colors[4]
    }
}

window.addEventListener("resize",resize);