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
///test
///test

///2022.02.15
///숫자게임 함수. 더욱 깔끔하게 짜도록 노력해보자

function numberHandler(event) {
    event.preventDefault();
    const numberIt = parseInt(numberInput.value) + 1;
    const guessIt = parseInt(guessInput.value);
    const number = Math.floor(Math.random() * numberIt);
    const score = document.querySelector('#textP');
    const conclusion = document.querySelector('#textH3');

    console.log(number);
    console.dir(guessInput);

    if (numberInput.value === '' || guessInput.value === '') {
        console.log('no!');
    } else if (numberIt < guessIt) {
        console.log('yes');
    } else if (guessIt === number) {
        console.log('you won!');
        score.innerText = 'you chose:' + guessIt + ' , the machine chose:' + number;
        conclusion.innerText = 'You won!';
    } else if (guessIt !== number) {
        console.log('you lost!');
        score.innerText = 'you chose:' + guessIt + ' , the machine chose:' + number;
        conclusion.innerText = 'You lost!';
    }
}

gameForm.addEventListener('submit', numberHandler);

/// 2022.02.16
///챌린지 진행중 남은일수 빼고 완료.

const date = new Date();

let seconds = parseInt(String(date.getSeconds()).padStart(2, '0'));
// console.log(seconds);
seconds = String(59 - seconds).padStart(2, '0');
// console.log(seconds);

let minutes = parseInt(String(date.getMinutes()).padStart(2, '0'));
// console.log(minutes);
minutes = String(59 - minutes).padStart(2, '0');
// console.log(minutes);

let hour = parseInt(String(date.getHours()).padStart(2, '0'));
hour = String(23 - hour).padStart(2, '0');

/// 2022.02.17

const colors = [
    '#ef5777',
    '#575fcf',
    '#4bcffa',
    '#34e7e4',
    '#0be881',
    '#f53b57',
    '#3c40c6',
    '#0fbcf9',
    '#00d8d6',
    '#05c46b',
    '#ffc048',
    '#ffdd59',
    '#ff5e57',
    '#d2dae2',
    '#485460',
    '#ffa801',
    '#ffd32a',
    '#ff3f34',
];

let body = document.querySelector('body');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    let chosencolors1 = colors[Math.floor(Math.random() * colors.length)];
    const result = colors.filter((color) => color != chosencolors1);
    console.log(chosencolors1);
    console.log(result);
    let chosencolors2 = colors[Math.floor(Math.random() * colors.length)];
    console.log(chosencolors1);
    console.log(chosencolors2);
    body.style = `background : linear-gradient(0.25turn, ${chosencolors1},${chosencolors2})`;
});

///2022.02.18
///월수금 스터디 - 물체가 마우스커서 따라오게 하기
const circle = document.querySelector('#circle');

let cnt = 1;

function handleCircle(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    circle.style.left = mouseX + 'px';
    circle.style.top = mouseY + 'px';
}

circle.addEventListener('click', () => {
    cnt++;

    console.log(cnt);

    if (cnt % 2 == 0) {
        document.addEventListener('mousemove', handleCircle);
    } else {
        document.removeEventListener('mousemove', handleCircle);
    }
});

///2022.02.19

//모멘텀todo에 어제 했던 스터디 적용중
