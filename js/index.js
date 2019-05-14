// Your code goes here


const funBusImg = document.querySelector(".intro img")
const welcome = document.querySelector(".intro h2")
const body = document.querySelector("body")
const firstParagraph = document.querySelector(".intro p")
const header = document.querySelector(".main-navigation")
// const adventureImg = document.querySelector("img/adventure.jpg")
// const destinationImg = document.querySelector("img/destination/jpg")


// Changes Intro h2 as you mouse over and mouseleave
funBusImg.addEventListener("mouseover", funBusFunctionMouseOver)
function funBusFunctionMouseOver(event) {
    welcome.textContent = "Hello!";
}
funBusImg.addEventListener("mouseleave", funBusFunctionMouseLeave)
function funBusFunctionMouseLeave(event) {
    welcome.textContent = "Welcome To Fun Bus!";
}

// Changes intro paragraph
body.addEventListener("keydown", keyDownFunction)
function keyDownFunction (event) {
    firstParagraph.textContent = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
}
body.addEventListener("keyup", keyUpFunction)
function keyUpFunction (event) {
    firstParagraph.textContent = "Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition."
}

// Changes header when wheel scrolled
body.addEventListener("wheel", changeColor)
function changeColor (event) {
    header.style.backgroundColor = "lightgray"
}

// I do NOT recommend activating this one, the alert will never go away
// body.addEventListener("drag", dragFunction)
// function dragFunction (event) {
//     funBusImg.src = "img/fun.jpg"
// }
// body.addEventListener("drop", dropFunction)
// function dropFunction (event) {
//     funBusImg.src = "fun-bus.jpg"
// }


// body.addEventListener("load", loadWelcome)
// function loadWelcome (event) {
//     Alert("Hello!")
// }
