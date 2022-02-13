///2022.02.09 화살표 함수를 이용해 모달창 만들기를 해보았습니다

let cnt = 1;

button.addEventListener('click', () => {
    cnt++;
    if (cnt % 2 === 0) {
        rectangle.classList.remove('hidden');
    } else {
        rectangle.classList.add('hidden');
    }
});

///2022.02.10
('window'); /// 현재 스크립트가 작동 중인 창을 나타내는 객체
('mouseenter'); ///마우스가 위로 올라갔을 때 발생하는 이벤트
('mouseleave'); ///마우스가 떠났을 때 발생하는 이벤트
('contextmenu'); ///사용자가 요소를 마우스 우 클릭해 메뉴를 열 때 발생하는 이벤트
('resize'); ///브라우저 창의 사이즈가 변할 때 발생하는 이벤트

///2022.02.11

///&& --> 양쪽이 모두 true 일때

///2022.02.12

const hello = document.querySelector('a');
console.log(hello);

const yeha = document.querySelector('#yeha');
console.log(yeha);

const nico = document.querySelector('.nico');
console.log(nico);

const wowQ = document.querySelectorAll('.wow');
// const wowQ = document.querySelector('.wow');
console.log(wowQ);

const yehaClass = document.getElementsByClassName('yh');
// const yeha = document.getElementByClassName('yh');
console.log(yehaClass);

const byesClass = document.getElementsByClassName('bye');
console.log(byesClass);
///동일한 class 존재 가능
console.log(byesClass[0]);

const yehaId = document.getElementById('yh');
console.log(yehaId);

const byesId = document.getElementById('bye');
// const byesId = document.getElementsById('bye');
console.log(byesId);
///동일한 id 속성 존재하면 안됨

const wow = document.getElementsByTagName('span');
console.log(wow);

const wowName = document.getElementsByName('wow');
console.log(wowName);

const spanName = document.getElementsByName('name');
console.log(spanName);

///2022.02.13

//휴식
