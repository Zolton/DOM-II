// Your code goes here


const funBusImg = document.querySelector(".intro img")
const welcome = document.querySelector(".intro h2")
const body = document.querySelector("body")
const firstParagraph = document.querySelector(".intro p")
const header = document.querySelector(".main-navigation")
const adventureImg = document.querySelector(".img-content img")
const destinationImg = document.querySelector(".content-destination.img")
const funImg = document.querySelector(".inverse-content img")
const footer = document.querySelector(".footer p")
const destinationTxt = document.querySelector("textarea")
const btn = document.querySelector(".btn")

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

// Switches images around when someone drags something
body.addEventListener("drag", dragFunction)
function dragFunction (event) {
    funBusImg.src = "img/adventure.jpg";
    adventureImg.src = "img/destination.jpg";
    funImg.src = "img/fun-bus.jpg";
}


// Strange, not sure why this isn't working
window.addEventListener("load", loadWelcome)
function loadWelcome (event) {
    console.log("Page is fully loaded")
}

window.addEventListener("focus", focusFunction)
function focusFunction (event) {
    console.log("No Bubbles Here")
}

window.addEventListener("blur", focusFunction2)
function focusFunction2 (event) {
    console.log("Blur")
}

//window.addEventListener("resize", resizeFunction)
window.onresize = resizeFunction;
function resizeFunction (event) {
    console.log(window.innerHeight + " x " + window.innerWidth)
}


// Starting to understand window command
window.addEventListener("scroll", scrollFunction)
function scrollFunction (event) {
    console.log("<-- Number of Scrolls activated")
    footer.style.backgroundColor = "red"
}

window.addEventListener("click", dblClickFunction)
function dblClickFunction (event) {
    console.log("Please come back later")
}

// Had to change HTML class to input, since select only works
// on input or textarea elements
destinationTxt.addEventListener("select", selectFunction)
function selectFunction(event) {
    console.log("You won't find better prices anywhere")
}