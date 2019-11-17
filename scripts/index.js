const logo = $(".logo");
const cells = $(".mid-screen__grid__cell");

// Panels
const midScreen = $(".mid-screen");
const rightScreen = $(".right-screen");
const leftScreen = $(".left-screen");

// Buttons
const rightBtn = $("#rightBtn");
const leftBtn = $("#leftBtn");

// Chevrons
const rightChevron = $("#rightBtn img");
const leftChevron = $("#leftBtn img");


const Wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
};

const FadeIn = async () => {
    for (let index = 0; index < cells.length; index++) {
       await Wait(250);
       cells[index].classList.toggle("fadeIn");
    }
}

rightBtn.click(() => {
    midScreen.toggleClass("right");
    rightScreen.toggleClass("toggle-right");
    leftBtn.toggleClass("hide");
    rightChevron.toggleClass("exit");
    logo.toggleClass("right");
});

leftBtn.click(() => {
    midScreen.toggleClass("left");
    leftScreen.toggleClass("toggle-left");
    rightBtn.toggleClass("hide");
    leftChevron.toggleClass("exit");
    logo.toggleClass("left");
});

FadeIn();