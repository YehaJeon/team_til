const back=document.querySelector("body");
// back: 배경색을 의미 body전체를 back으로 지정해 색을 바꿀 때 back을 사용/
const colors=["ivory","violet","rgb(96, 138, 228)","rgb(190, 245, 168)","rgb(240, 140, 140)"];
// array로 색들을 둠 색상은 css파일에서 색을 찾음
function changebgc(){//resize할 때마다 bgcolor를 바꾸는 함수 설정
    const whole=window.innerWidth;//화면의 폭을 whole로 정함 
    if(whole<=700){//화면 폭이 700이하일 때 색상을 violet으로 바꿈
        back.style.backgroundColor=colors[1];
    }else if(whole>700 && whole <=900 ){
        back.style.backgroundColor = colors[2]
    }else if(whole>900 && whole <=1100){
        back.style.backgroundColor = colors[3]
    }else if(whole>1100 &&whole <=1300){
        back.style.backgroundColor=colors[4]
    }else{//위 조건에 모두 해당되지 않을 때(폭이 1300초과일 때)
        back.style.backgroundColor=colors[0]
    }
}
window.addEventListener("resize",changebgc);//화면 전체인 window가 resize이벤트를 듣고 changebgc함수를 실행하도록 함