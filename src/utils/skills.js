const skillsAnimation = () => {

const circleRotate1 = document.querySelector(".circle");
const circleRotate2 = document.querySelector(".circle2");
const circleBorder = document.querySelector(".circle-border");
const left = document.querySelector(".skills__left");
const right = document.querySelector(".skills__right");
const text = document.querySelector(".skills__click-text");
const clickOnSound = new Audio('mixkit-arcade-game-jump-coin-216.wav');

function rotation() {
    circleRotate1.classList.toggle("rotate");
    circleRotate2.classList.toggle("rotate2");
    circleBorder.classList.toggle("border");
    left.classList.toggle("click");
    right.classList.toggle("click");
    text.classList.toggle("onclick");
    clickOnSound.loop = false;
    clickOnSound.play();
}

text.addEventListener("click", rotation, {once:true});

};

export default skillsAnimation;