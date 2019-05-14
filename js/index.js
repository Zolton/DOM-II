// Your code goes here

console.log("hello world")
const funBusImg = document.querySelector(".intro img")
console.log(funBusImg);
const welcome = document.querySelector(".intro h2")

// Changes Intro h2 as you mouse over and mouseleave
funBusImg.addEventListener("mouseover", funBusFunctionMouseOver)
function funBusFunctionMouseOver(event) {
    welcome.textContent = "Hello!";
}
funBusImg.addEventListener("mouseleave", funBusFunctionMouseLeave)
function funBusFunctionMouseLeave(event) {
    welcome.textContent = "Welcome To Fun Bus!";
}

const body = document.querySelector("body")
const firstParagraph = document.querySelector(".intro p")

// Changes intro paragraph
body.addEventListener("keydown", keyDownFunction)
function keyDownFunction (event) {
    firstParagraph.textContent = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
}
body.addEventListener("keyup", keyUpFunction)
function keyUpFunction (event) {
    firstParagraph.textContent = "Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition."
}

const header = document.querySelector(".main-navigation")

// Changes header when wheel scrolled
body.addEventListener("wheel", changeColor)
function changeColor (event) {
    header.style.backgroundColor = "lightgray"
}



