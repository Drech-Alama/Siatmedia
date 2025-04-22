const menu = document.getElementById("header__menu");
const botonAbrir = document.querySelector(".header__boton-cerrar");
const botonCerrar = document.querySelector(".header__boton-abrir");
const enlaces = document.querySelectorAll(".header__enlace");


function menuToggle() {
    menu.classList.toggle("header__menu--active");
}
botonAbrir.addEventListener("click", menuToggle);
botonCerrar.addEventListener("click", menuToggle);


enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("header__menu--active")
    })
});