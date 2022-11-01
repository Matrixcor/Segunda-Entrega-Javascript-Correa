let login =false;
function Valida_Usuario(usuario,contrasena){ //deberia ser valida usuario

    let Persona = Usuarios.find((Usuario) => Usuario.User === usuario); //busco si existe el usuario
    if(typeof Persona === 'undefined'){
        //Swal.fire('El usuario ingresado no existe')
    alert("El usuario ingresado no existe");
    }else{
        if(Persona.Contrasena === contrasena){
        console.log("paso");
        login = true;
            alert("Bienvenido "+Persona.Nombre) 
        } else{
            alert("Los datos ingresados son incorrectos");
            //Swal.fire('La contraseña ingresada es incorrecta, Intenta nuevamente')
            login = false;
        }
    }
    
};
