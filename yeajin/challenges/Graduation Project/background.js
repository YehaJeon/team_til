const images=["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","012.jpg","013.jpg","014.jpg","015.jpg","016.jpg","017.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];
console.log(chosenImage);
const bgImage= document.createElement("img");
bgImage.src = `${chosenImage}`;
console.log(bgImage);
document.body.appendChild(bgImage);