//detalle como abrir el console antes de que se inicie javascript
let Log= false;
let Sub_Total= 0;
let Total= 0;
//inicio el carrito con Login
Log = confirm("Usted esta registrado en la pagina NO Gravity?");
Solicito_Datos(Log,Usuarios); //creacion y login de usuarios
alert ("Bienvenido a la tienda NO GRAVITY \n Por favor abra la CONSOLA.") //seccion tienda
let Encontrado = Busca_Productos(Prod);
alert("Para agregar un producto al carrito seleccione el codigo del producto")
let MiCompra = Compra_Productos(Encontrado);//la funcion busca producto mas el seleccionado elijo el array
alert("Bienvenido a la seccion de CHECK OUT")//funcion despacho o check out
Check_Out(MiCompra,Sub_Total,Zona);

function Solicito_Datos(Log,Usuarios){

    if(Log){ //si esta registrado
        let User = prompt("Ingrese su Usuario");
        let Contrasena = prompt("Ingrese su Contraseña");

        Valida_Datos(User,Contrasena,Usuarios);

    }else{ //si no esta registrado crea un usuario
        alert("Bienvenido al area de registro")
        let User=""; //por el scope de esta variable la declaro afuera del while
        let Existe = true;
        while(Existe){ //evito que se repita el usuario
            User = prompt("Ingrese su Usuario");
            Existe = Usuarios.some((Usuario)=> Usuario.User === User);
            if(Existe){
                alert("El nombre de usuario elegido ya Existe, por favor elija otro")
            }
        }
        let Contrasena = prompt("Ingrese su Contraseña");
        let Nombre = prompt("Ingrese su Nombre");
        let Apellido = prompt("Ingrese su Apellido");
        let Email = prompt("Ingrese su Email");
        Crea_Usuario(User,Nombre,Apellido,Email,Contrasena,Usuarios);
    }
};
function Valida_Datos(User,Contrasena,Usuarios){
    let Persona = Usuarios.find((Usuario) => Usuario.User === User); //busco si existe el usuario
    if(typeof Persona === 'undefined'){
        alert("El usuario ingresado no existe");
    }else{
        if((User === Persona.User)){
            if(Contrasena === Persona.Contrasena){
                alert("Bienvenido "+Persona.Nombre)
            } else{
                alert("La contraseña ingresada es incorrecta, Intenta nuevamente")
            }
        }else{
            alert("El usuario ingresado es incorrecto, Intenta nuevamente")
        }
    }
    let Exit = confirm("Desea continuar navegando sin loggearse?");         
    if(!Exit){
        Solicito_Datos(Log, Usuarios);
    }else{
        alert("Recuerde que para continuar comprando debe estar registrado.")
    }
};

function Crea_Usuario(User,Nombre,Apellido,Email,Contrasena,Usuarios){
    let Cliente = new Usuario(User,Nombre,Apellido,Email,Contrasena)
    Usuarios.push(Cliente);
    alert("Muchas gracias por registrarse")
    console.log(Usuarios.length);
};
function Busca_Productos(Prod){ //recibe el array con todos los objetos producto
    let flag = true;
    let Resu = "";
    do{
        let prod = prompt("Ingrese el producto buscado")
        Resu = Prod.filter((Producto)=>Producto.Name.includes(prod));
        if (Resu != 0){
            console.log("El resultado de la busqueda es:\n");
            Resu.forEach((Prod) => { console.log(Prod) })
        }else{
            alert("El producto buscado no arrojo resultados")
        }
        flag = confirm("Desea Seguir buscando?");
    }while(flag);
    return (Resu);
};
function Compra_Productos(Encontrado){ //recibe el array con los productos buscados
    let Hacer = false;
    let Salir = false;
    let Agregar =false;
    let ArrayCompra = [];
    do{
        let Seleccion = prompt("Ingrese el codigo del producto");
        let arr = Encontrado.find((Producto)=> Producto.Cod === Seleccion);
        if(typeof arr === 'undefined'){
            console.log("El producto ingresado no existe");
        }else{
            console.log("El producto Seleccionado es:\n");
            console.log(arr);
            Agregar = confirm("Desea agregarlo al carrito?");
            if(Agregar){
                ArrayCompra.push(arr);
                Sub_Total = Sub_Total+ arr.Precio;
            }
            Hacer = confirm("Desea Seleccionar otro producto? o realizar una nueva busqueda");
            if(!Hacer){
                Encontrado = Busca_Productos(Prod); // retornar el valor de la nueva busqueda
                console
            }else{
                Salir = confirm("Antes de seleccionar otro producto, desea SALIR?");
            }
        }
    }while(!Salir)
   return ArrayCompra; //devuelve array con productos seleccionados para la compra
};

function Check_Out(MiCompra,Sub_Total,Zona,Total){
    let Exit = true;
    do{
        let Mi_NuevaCompra = [];
        console.log("El carrito de compras contiene:\n");
        MiCompra.forEach((Prod) => { console.log(Prod) })
        console.log(Sub_Total);
        let Modifica = confirm("Desea AGREGAR o ELIMINAR algun producto?");
        if(Modifica){
            Mi_NuevaCompra = Modifica_Carrito(MiCompra);//llamo a funcion modifica
            console.log("el carrito modificado es\n");
            Mi_NuevaCompra.forEach((Prod) => { console.log(Prod) })
        }else{
            //seccion envio
            let envio = confirm("Desea recibir su producto en casa?");
            if(envio){
                let Lugar = prompt(" Seleccione:\n -1 para Buenos Aires,\n -2 para Caba,\n -3 para Cordoba,\n -4 para Santa Fe,\n -5 para Salta,\n -6 para Entre Rios,\n -7 para Jujuy,\n -8 para Chubut,\n -9 para Catamarca,\n -10 para Rio Negro\n");
                let Lugar_Envio = Zona.find((Envio)=> Envio.Cod === Lugar);
                Total= Sub_Total + Lugar_Envio.CostoEnvio; 
            }
            Terminar= confirm("Desea finalizar la compra?");
            Exit= confirm("Desea Salir de la seccion de Compras?");
            if(Terminar==true && Exit==false){
                console.log("usted ha comprado:\n");
                Mi_NuevaCompra.forEach((Prod) => { console.log(Prod) })
                console.log("El importe total de la compra es: "+Total);
                if(envio){
                    console.log("El lugar seleccionado fue: "+ Lugar_Envio.Lugar+ ", cuyo costo de envio es: "+ Lugar_Envio.CostoEnvio);
                    
                }else{
                    console.log("Por favor pase a retirar sus productos por nuestra sucursa en Capital");
                }
            }
        }
   }while(!Exit)
};
function Modifica_Carrito(MiCompra,Sub_Total){
    let nueva = [];
    nueva = MiCompra;
    let Opcion1 = confirm("Desea AGREGAR algun producto?");
    if(Opcion1){
        let Nuevo_Item = Busca_Productos(Prod);
        let Nueva_Compra = Compra_Productos(Nuevo_Item);
        console.log("el producto devuelto por la funcion es");
        for(var i=0; i< Nueva_Compra.length ; i++){
            nueva.push(Nueva_Compra[i]);
        }
    }
    let Opcion2 = confirm("Desea BORRAR algun producto?");
    if(Opcion2){
        let Borra = prompt("Ingrese el codigo de elemento a eliminar");
        for(var k=0; k < nueva.length; k++){
            if(nueva[k].Cod === Borra){
                Sub_Total = Sub_Total - nueva[k].Precio;
                nueva.splice(k,1)
            }
        }
    }
    return nueva;
};