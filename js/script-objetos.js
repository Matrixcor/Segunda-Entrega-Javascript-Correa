
/*defino objetos*/

class Usuario{
    constructor (User, Nombre, Apellido, Email, Contrasena){
        this.User = User;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.Contrasena = Contrasena;
    }
}
//puedo crear un array que guarde estos nuevos usuarios?
let Usuarios = [];

Usuarios[0] = new Usuario("matrix", "matias", "hendrix", "p@gmail.com", "1234");
Usuarios[1] = new Usuario("neo", "anderson", "hendrix", "f@gmail.com", "123");

//al final deberia crear un objeto producto, para incorporarlo a otro array
let Prod = [];

class Producto{
    constructor (Cod,Categoria,Name,Precio){
        this.Cod = Cod;
        this.Categoria = Categoria;
        this.Name = Name;
        this.Precio = Precio;
    }
}

Prod[0] = new Producto('1', "indumentaria","conjuntos", 6500);
Prod[1] = new Producto('2', "indumentaria", "remeras", 3500);
Prod[2] = new Producto('3',  "indumentaria", "zapatillas", 15000);
Prod[3] = new Producto('4', "indumentaria", "guantes", 1500);
Prod[4] = new Producto('5', "barras", "barras", 12000);
Prod[5] = new Producto('6', "barras", "discos", 7500);
Prod[6] = new Producto('7', "barras", "mancuernas", 6500);
Prod[7] = new Producto('8', "barras", "bandas", 3500);
Prod[8] = new Producto('9', "suplementos", "aminoacidos", 4500);
Prod[9] = new Producto('10', "suplementos", "animal packs", 7500);
Prod[10] = new Producto('11', "suplementos", "proteinas", 6700);
Prod[11] = new Producto('12', "suplementos", "batidos", 5900);

let Zona = [];

class Envio{
    constructor (Cod,Lugar,CostoEnvio){
        this.Cod =Cod;
        this.Lugar = Lugar;
        this.CostoEnvio = CostoEnvio;
    }
}
Zona [0] = new Envio( '1',"Buenos Aires", 500 );
Zona [1] = new Envio( '2',"Caba", 350 );
Zona [2] = new Envio( '3',"Cordoba", 800 );
Zona [3] = new Envio( '4',"Santa Fe", 850 );
Zona [4] = new Envio( '5',"Salta", 1500 ); 
Zona [5] = new Envio( '6',"Entre Rios", 870 );
Zona [6] = new Envio( '7',"Jujuy", 1700 );
Zona [7] = new Envio( '8',"Chubut", 1300 );
Zona [8] = new Envio( '9',"Catamarca", 1050 );
Zona [9] = new Envio( '10',"Rio Negro", 1650 );