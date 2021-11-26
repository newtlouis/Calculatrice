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

    memoire = (localStorage.memoire) ? parseFloat(localStorage.memoire) : 0;
    if (memoire != 0) memoireElt.style.display = "initial";
}

function gererTouches() {
    let strValeur = this.innerText;

    if (parseFloat(strValeur) >= 0 || strValeur === ".") {
        affichage = (affichage === "") ? strValeur.toString() : affichage + strValeur.toString();
        ecranElt.innerText = affichage;
    }
    else {
        switch (strValeur) {
            case "C":
                precedent = 0;
                affichage = "";
                operation = null;
                ecranElt.innerText = 0;
                break;

            case "+":
            case "-":
            case "*":
            case "/":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                operation = strValeur;
                affichage = "";
                break;

            case "=":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                affichage = precedent;
                precedent = 0;
                break;
            
            case "M+":
                localStorage.memoire = (localStorage.memoire) ? parseFloat(localStorage.memoire) + parseFloat(affichage) : parseFloat(affichage);
                memoireElt.style.display = "initial";
                break;
            case "MC":
                localStorage.memoire = 0;
                memoireElt.style.display = "none";
                break;
        }
    }
}

/**
 * 
 * @param {float} nb1 
 * @param {float} nb2 
 * @param {string} operation
 * @returns float 
 */
function calculer(nb1, nb2, operation) {
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);
    if (operation === "+") return nb1 + nb2;
    if (operation === "-") return nb1 - nb2;
    if (operation === "*") return nb1 * nb2;
    if (operation === "/") return nb1 / nb2;
}

