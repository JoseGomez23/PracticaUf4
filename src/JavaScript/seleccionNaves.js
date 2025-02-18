"use strict";
let derecha = document.getElementsByClassName("flechaD");
let izquierda = document.getElementsByClassName("flechaI");
let lock = document.getElementsByClassName("lock");
for (let i = 0; i < derecha.length; i++) {
    derecha[i].addEventListener("click", function (event) { mover(event, i, "d"); });
    izquierda[i].addEventListener("click", function (event) { mover(event, i, "i"); });
}
function mover(event, number, direction) {
    let naves = ["ovni", "rocket", "plane"];
    let colorLista = ["Blue", "Colorfull", "Green", "Purple", "Red", "Yellow"];
    let foto = document.getElementsByClassName(naves[number])[0];
    let posColor = 0;
    for (let i = 0; i < colorLista.length; i++) {
        let color = foto.id.split((naves[number]))[1];
        if (color == colorLista[i]) //AQUE PUEDE HABER UN FALLO EN EL SPLIT
         {
            posColor = i;
        }
    }
    switch (direction) {
        case "d":
            ((posColor + 1) == colorLista.length) ? posColor = 0 : posColor++;
            break;
        default:
            ((posColor - 1) < 0) ? posColor = colorLista.length - 1 : posColor--;
    }
    if (isLocked() == false) {
        lock[number].setAttribute("hidden", "hidden");
    }
    else {
        lock[number].removeAttribute("hidden");
    }
    foto.id = naves[number] + colorLista[posColor];
    foto.setAttribute("src", foto.getAttribute("src").split(naves[number])[0] + naves[number] + colorLista[posColor] + ".svg");
}
function isLocked() {
    return false;
}
function choose() {
}
//# sourceMappingURL=seleccionNaves.js.map