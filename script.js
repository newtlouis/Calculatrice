const memoireElt = document.querySelector("#memoire");
const ecranElt = document.querySelector("#ecran");

let precedent = 0;
let affichage = "";
let operation = null;
let memoire;

window.onload = () => {
    let touches = document.querySelectorAll("span");
    for (let touche of touches) {
        touche.addEventListener("click", gererTouches);
    }
}

function gererTouches() {
    let strValeur = this.innerText;

    if(parseFloat(strValeur)>=0 || strValeur ==="."){
        affichage = strValeur;
        ecranElt.innerText = affichage;
    }
}

