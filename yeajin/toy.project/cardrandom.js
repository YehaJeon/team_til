const cardBtn = document.querySelector('#cardBtn');

const img = ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","012.jpg","013.jpg","014.jpg","015.jpg","016.jpg","017.jpg"];

const chosenImg1 = img[Math.floor(Math.random() * img.length)];

textDiv2.style = `background-image: url(/img/${chosenImg1})`;

cardBtn.addEventListener('click', () => {
    const chosenImg2 = img[Math.floor(Math.random() * img.length)];
    console.log('hello');
    textDiv2.style = `background-image: url(/img/${chosenImg2}) `;
});
