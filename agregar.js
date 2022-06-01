var btnAgregar = document.getElementById("btnGuardar");
var palabraNueva = document.getElementById("nueva-palabra");
var cancelar = document.getElementById("btnCancelar")



btnAgregar.onclick = agregar;
cancelar.onclick = recargarPagina;


function agregar(){
    palabrasSecretas = ["HTML", "JAVASCRIPT", "CSS", "GIT", "PYTHON", "ANGULAR", "MYSQL", "LOGICA", "CODIGO", "JSON",];
    palabrasSecretas[palabrasSecretas.length] = palabraNueva.value.toUpperCase();
    localStorage.setItem("palabrasSecretas", JSON.stringify(palabrasSecretas));
    palabrasSecretasAlmacenadas = JSON.parse(localStorage.getItem("palabrasSecretas"));
    alert("Palabra agregada")
    // console.log(palabrasSecretas);
    return palabrasSecretasAlmacenadas
}


