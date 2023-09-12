const container = document.querySelector(".container");
const changeColor = document.getElementById("change-color");

changeColor.addEventListener("click", ()=>{
    let x = Math.floor(Math.random()*255);
    let y = Math.floor(Math.random()*255);
    let z = Math.floor(Math.random()*255);
    container.style.backgroundColor = `rgb(${x}, ${y}, ${z})`; 
    changeColor.innerHTML = `rgb(${x}, ${y}, ${z})`;
})