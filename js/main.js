
/*
profe tuve muchas dificultades con javascript, no llegue en tiempo 
por eso tiene muy pocas funcionalidades la pagina

document.addEventListener('DOMContentLoaded', () => {

    // Cargar el carrito con el localstorage, si no hay nada asignarle un array vacio
    
    carrito = JSON.parse( localStorage.getItem("carrito_compra") );
});*/

//Swal.fire('Recuerde que ara navegar debe estar loggeado')

let enviar = document.getElementById("acepta");
enviar.onclick=()=>{
    let usuario = document.getElementById("usuario").value;
let contrasena = document.getElementById("contrasena").value;
    Valida_Usuario(usuario,contrasena);
};

