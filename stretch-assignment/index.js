console.log("hello world")
const funBusImg = document.querySelector(".intro img")
console.log(funBusImg);
const welcome = document.querySelector(".intro h2")
funBusImg.addEventListener("mouseover", funBusFunction)

function funBusFunction(event) {
    console.log("hello world")
  
    //welcome.textContent = "Hello!";
    console.log(event);
}
