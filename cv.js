function myMenu() {

    var efecto = document.getElementById("menu");
    var desplazar = document.getElementById("menu__article");
    var ocultar = document.getElementById("menu__article");
    var resetX = document.getElementById("menu__article ul");

    efecto.classList.toggle("ancho");
    desplazar.classList.toggle("desplazar");
    resetX.classList.toggle("reset-x");
    ocultar.classList.toggle("ocultar");
}
