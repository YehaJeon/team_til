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

///2022.02.20
//모멘텀수정중

///2022.02.21

//flex froggy를 해보았당

//<justfy-content>
// flex-start: 요소들을 컨테이너의 왼쪽으로 정렬합니다.
// flex-end: 요소들을 컨테이너의 오른쪽으로 정렬합니다.
// center: 요소들을 컨테이너의 가운데로 정렬합니다.
// space-between: 요소들 사이에 동일한 간격을 둡니다.
// space-around: 요소들 주위에 동일한 간격을 둡니다.

//<align-items>
// flex-start: 요소들을 컨테이너의 꼭대기로 정렬합니다.
// flex-end: 요소들을 컨테이너의 바닥으로 정렬합니다.
// center: 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.
// baseline: 요소들을 컨테이너의 시작 위치에 정렬합니다.
// stretch: 요소들을 컨테이너에 맞도록 늘립니다.

//<flex-direction>
//row: 요소들을 텍스트의 방향과 동일하게 정렬합니다.
// row-reverse: 요소들을 텍스트의 반대 방향으로 정렬합니다.
// column: 요소들을 위에서 아래로 정렬합니다.
// column-reverse: 요소들을 아래에서 위로 정렬합니다.

//<order>
//flex요소의 순서를 정함

//align-self는 개별 요소에 적용할 수 있는 또 다른 속성

//<flex-wrap>
// nowrap: 모든 요소들을 한 줄에 정렬합니다.
// wrap: 요소들을 여러 줄에 걸쳐 정렬합니다.
// wrap-reverse: 요소들을 여러 줄에 걸쳐 반대로 정렬합니다.

// flex-direction과 flex-wrap이 자주 같이 사용되기 때문에,
// flex-flow가 이를 대신할 수 있습니다. 이 속성은 공백문자를 이용하여 두 속성의 값들을 인자로 받습니다.

//<align-content>
//flex-start: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.
// flex-end: 여러 줄들을 컨테이너의 바닥에 정렬합니다.
// center: 여러 줄들을 세로선 상의 가운데에 정렬합니다.
// space-between: 여러 줄들 사이에 동일한 간격을 둡니다.
// space-around: 여러 줄들 주위에 동일한 간격을 둡니다.
// stretch: 여러 줄들을 컨테이너에 맞도록 늘립니다.

// 이 속성을 사용하는 방법이 어려울 수 있습니다. align-content는 여러 줄들 사이의 간격을 지정하며, align-items는
// 컨테이너 안에서 어떻게 모든 요소들이 정렬하는지를 지정합니다. 한 줄만 있는 경우, align-content는 효과를 보이지 않습니다.

///2022.02.22
// 토이프로젝트 디자인중

///2022.02.23

///2022.02.24
///js 기능구현중

///2022.02.25
///토이프로젝트 말씀 랜덤 띄우는 기능 구현, 코틀린 강좌

///2022.02.26
///토이프로젝트 예진이가 한 css 가져와서 작업하는중

///2022.02.27
///히든 클래스 문제 해결. 상위요소에 flex 넣는거 조심
