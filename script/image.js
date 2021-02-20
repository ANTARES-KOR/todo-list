const backgroundDiv = document.querySelector(".background");
const numberOfImages = 8;

function getRandom() {
    const number = Math.floor(Math.random() * numberOfImages) + 1;
    return number;
}
function paintImg(imgNumber) {
    const image = new Image();
    image.src = `/images/${imgNumber}.jpg`;
    backgroundDiv.appendChild(image);
}
function init() {
    const randomNumber = getRandom();
    paintImg(randomNumber);
}

init();
