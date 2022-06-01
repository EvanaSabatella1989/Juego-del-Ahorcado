// import {palabras} from "agregar.js"
String.prototype.replaceAt = function(index, character){return this.substr(0, index) + character + this.substr(index+character.length);}


palabrasSecretas = ["HTML", "JAVASCRIPT", "CSS", "GIT", "PYTHON", "ANGULAR", "MYSQL", "LOGICA", "CODIGO", "JSON"];
localStorage.setItem("palabrasSecretas", JSON.stringify(palabrasSecretas)); 
palabrasSecretasAlmacenadas = JSON.parse(localStorage.getItem("palabrasSecretas"));
var palabra = palabrasSecretasAlmacenadas[Math.floor(Math.random()*palabrasSecretas.length)];
// console.log(palabrasSecretasAlmacenadas)
var contadorFallos = 0;

var letrasErradas = [];

var lista = document.querySelector("#letrasErradas"); 

var palabraConGuiones = palabra.replace(/./g,"_ ");
// var entrada = document.querySelector("#output");
// entrada.innerHTML = palabraConGuiones;
document.querySelector("#output").innerHTML = palabraConGuiones;
// var perdido = document.querySelector("#perdedor");
document.querySelector("#calcular").addEventListener("click",() => 
{
    var letra = document.querySelector("#letra").value.toUpperCase();
    // var contadorFallos = 0;
    let haFallado = true;
    
    for(const i in palabra){
        if(letra == palabra[i]){
            // alert("exito");
            palabraConGuiones = palabraConGuiones.replaceAt(i*2,letra);
            haFallado = false;
        }
    
    }
        
    if(haFallado){
        // contadorFallos++;
        // dibujarHorca();
        if(!letrasErradas.includes(letra.toUpperCase())){
            contadorFallos++;
            dibujarHorca();
            letrasErradas.push(letra.toUpperCase());
            var li = document.createElement("li");
            li.textContent = letra;
            li.innerHTML = letra;
            lista.appendChild(li);
        }else{
            alert("Letra repetida");
        }
       
    }else{
        if(palabraConGuiones.indexOf("_")< 0){
            document.querySelector("#ganador").style.display = 'flex';
        }
    }
   
    document.querySelector("#output").innerHTML = palabraConGuiones;
    document.querySelector("#letra").value = '';
    document.querySelector("#letra").focus();

   

    
 
});
var pantalla = document.querySelector("canvas");
console.log(pantalla);
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey"; //propiedad
pincel.fillRect(0,0,600,400); //funcion

pincel.fillStyle = "black"; //propiedad
pincel.fillRect(90, 320, 150, 10); //funcion

pincel.fillRect(160, 70, 10, 250); //funcion

pincel.fillRect(160, 60, 150, 10); //funcion

pincel.fillRect(300, 60, 10, 50); //funcion


function dibujarHorca(){
    
    if(contadorFallos === 1){
        //cabeza
        pincel.beginPath();
        pincel.arc(305, 140, 30, 0, 2 * 3.14);
        pincel.fill();
        pincel.fillStyle = "lightgrey"; //propiedad
        pincel.beginPath();
        pincel.arc(305, 140, 25, 0, 2 * 3.14);
        pincel.fill();
    } 
    if(contadorFallos === 2){
        //cuerpo
        pincel.fillStyle = "black"; //propiedad
        pincel.fillRect(303, 165, 6, 80); //funcion
    } 
    if(contadorFallos === 3){
        //pierna derecha
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.lineWidth = 6;
        pincel.lineTo(330,290);
        pincel.lineTo(305, 240);
        pincel.stroke(); 
        
    }
    if(contadorFallos === 4){
        //pierna izquierda
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.lineWidth = 6;
        pincel.moveTo(306, 240);
        pincel.lineTo(285, 290);
        pincel.stroke();
    }
    if(contadorFallos === 5){
        //brazo derecho
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.lineWidth = 6;
        pincel.lineTo(340,210);
        pincel.lineTo(306, 180);
        pincel.stroke();
    }
    if(contadorFallos === 6){
        //brazo izquierdo
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.lineWidth = 6;
        pincel.lineTo(270,210);
        pincel.lineTo(306, 180);
        pincel.stroke();
        // alert("Perdiste el juego")
        // recargarPagina();
        document.querySelector("#perdedor").style.display = 'flex';
    }
}




var btnNuevaJugada = document.getElementById("btn-nueva-jugada")

var btnMeRindo = document.getElementById("btn-me-rindo")









function recargarPagina(){
    location.reload();

}

function meRindo(){
    location.href="index.html";
}





btnMeRindo.onclick = meRindo;

btnNuevaJugada.onclick = recargarPagina;