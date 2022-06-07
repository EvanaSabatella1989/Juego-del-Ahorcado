var btnAgregar = document.getElementById("btnGuardar");
var palabraNueva = document.getElementById("nueva-palabra");
var cancelar = document.getElementById("btnCancelar")



btnAgregar.onclick = agregar;
cancelar.onclick = recargarPagina;

var palabrasAgregadas = [];
var palabrasSecretasAlmacenadas = [];
function agregar(){
    palabrasSecretas = ["HTML", "JAVASCRIPT", "CSS", "GIT", "PYTHON", "ANGULAR", "MYSQL", "LOGICA", "CODIGO", "JSON",];
    
    if(!palabrasAgregadas.includes(palabraNueva.value.toUpperCase())){
        palabrasSecretas[palabrasSecretas.length] = palabraNueva.value.toUpperCase();
        localStorage.setItem("palabrasSecretas", JSON.stringify(palabrasSecretas));
        palabrasSecretasAlmacenadas = JSON.parse(localStorage.getItem("palabrasSecretas"));
        alert("Palabra agregada")
        palabrasAgregadas.push(palabraNueva.value.toUpperCase());
        console.log(palabrasSecretasAlmacenadas);
        palabraNueva.value ='';
        palabraNueva.focus();
    }else{
        alert("Palabra repetida")
        console.log(palabrasSecretasAlmacenadas);
        palabraNueva.value ='';
        palabraNueva.focus();
    }
    
    
    return palabrasSecretasAlmacenadas
}


