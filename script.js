
var botonAgregar = document.querySelector("#agregar-palabra");
var botonIniciar = document.querySelector("#iniciar-juego");
var botonCancelar = document.querySelector("#cancelar");

botonAgregar.addEventListener("click",function(){
    console.log("hiciste click en agregar")
    location.href="agregar.html";
});

botonCancelar.addEventListener("click", function(){
    console.log("hiciste click en cancelar")
    location.href="index.html"
});