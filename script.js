const body = document.getElementsByTagName("body")[0];
const checkButton = document.getElementById("toggleColor");
const h1 = document.getElementsByClassName("welcome");

checkButton.addEventListener("click", (evento) =>{
    body.classList.toggle("toggle-mode");
    for(let i=0; i< h1.length; i++){
        h1[i].classList.toggle("toggle-text");
    }
});