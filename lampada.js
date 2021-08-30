"use strict"
const lampada = document.getElementById("lampada")

function ligarLampada() {
     lampada.src = "img/ligada.jpg"
}
//eventos
document.getElementById("ligar")
.addEventListener("click", ligarLampada)

function desligarLampada() {
    lampada.src = "img/desligada.jpg"
}

document.getElementById("desligar")
.addEventListener("click", desligarLampada)