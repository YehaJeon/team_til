const back=document.querySelector("body");
const colors=["ivory","violet","rgb(96, 138, 228)","rgb(190, 245, 168)","rgb(240, 140, 140)"];

function resize(){
    const whole=window.innerWidth;
    if(whole<=700){
        back.style.backgroundColor=colors[1];
    }else if(whole>700 && whole <=900 ){
        back.style.backgroundColor = colors[2]
    }else if(whole>900 && whole <=1100){
        back.style.backgroundColor = colors[3]
    }else if(whole>1100 &&whole <=1300){
        back.style.backgroundColor=colors[4]
    }else{
        back.style.backgroundColor=colors[0]
    }
}
window.addEventListener("resize",resize);