

let Carrito = [];
let ProDesta = [];
//busca productos destacados
ProDesta = Prod.filter(Prod => Prod.Status == 1);

Muestra_Producto(ProDesta);

function Muestra_Producto(ProDesta){ //card

    const Container = document.querySelector("#Seccion")
    Container.innerHTML = "";

    //ver msj cuando no haya productos destacados
    ProDesta.forEach(Prod => {
        let BoxDesta = document.createElement('div');
        
        BoxDesta.setAttribute('class','col');
        BoxDesta.setAttribute('id','card_'+Prod.Cod);
        BoxDesta.innerHTML = `
        
            <div class="card Animacion">
                <img src= "./${Prod.Img}"></img>
                <div class="card-body">
                    <h3 class="card__titulo"> ${Prod.Name} </h3>
                </div>
                <p class="item-price">$ ${Prod.Precio}</p>
                <a href="javascript:IncorporaCarrito(${Prod.Cod},carrito)" class="btn card__boton bg-info">Comprar</a>
            </div>           
          `;
        Container.appendChild(BoxDesta);
        });
};

//capturo productos desde el html, con eventos

let Buscar = document.getElementById("Buscador_Boton")
Buscar.onclick = ()=> { 
    let q = document.getElementById("Buscador").value; //en este caso capturo el vaor de un input, pero  podria  crearlo
    Busca_Productos(q);
};

function Busca_Productos(q) { 
    let resultado = [];
    resultado = Prod.filter( Prod => Prod.Name.includes(q));  
    resultado.forEach((Prod) => { console.log(Prod)});
    Muestra_Producto(resultado);
}


let carrito = [];
function IncorporaCarrito(Cod,carrito){
    let Existe = carrito.some( prod => prod.Cod === Cod );
    if (Existe){
        console.log("Existe, debo sumar la cantidad"); // se agrego correctaemnte
        const Items = carrito.map( prod => {
            if(prod.Cod === Cod)
            {
                prod.Cantidad++;
                return prod;            //debo colocar el total
            }else
            {
                return prod;
            }
            });
    }else{
        console.log("se agrega el nuevo producto"); //se agrego  correctamente
        carrito.push( Prod.find(Prod => Prod.Cod == Cod));
    }
    
    carrito.forEach((Prod) => { Prod.Total=Prod.Total + Prod.Total});
    Muestra_Carrito(carrito);
};

function EliminaItems(Cod,carrito){
    console.log("Funcion elimina item");
    let Produc = Prod.find(Prod => Prod.Cod == Cod);

    if(Produc.Cantidad >1){
        const Items = carrito.map( prod => {
            if(prod.Cod === Cod )
            {
                console.log("mayor que 1");
                prod.Cantidad--;
                return prod;
            } 
        });
        console.log(Items.Cantidad);
    }else{
        
        for(var k=0; k < carrito.length; k++){
            if(carrito[k].Cod === Produc.Cod){
                carrito.splice(k,1)
            }
        }
        alert("se quito el item")
    }
    carrito.forEach((Prod) => { console.log(Prod)});
    Muestra_Carrito(carrito);
};


let Abre = document.getElementById("AbreCarrito")
Abre.onclick = ()=> { 
    Muestra_Carrito(carrito);
};

function Muestra_Carrito(carrito){
    const Container = document.querySelector("#cuerpocarrito")
    Container.innerHTML = "";
    console.log(carrito);

    carrito.forEach(Prod => {
        let BoxCarrito = document.createElement('div');
        
        BoxCarrito.setAttribute('class','row');
        BoxCarrito.setAttribute('id','card_'+Prod.Cod);
        BoxCarrito.innerHTML = `
        <div>
            <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                <img src= "./${Prod.Img}"></img>
                <h3 class="card__titulo"> ${Prod.Name} </h3>
            </div> 
            <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                <p class="item-price">$ ${Prod.Precio} </p>
            </div>
            <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                <p> Cantidad: ${Prod.Cantidad}</p>
            </div>  
            
                <b> Total a pagar: ${Prod.Total}</b>
                <a href="javascript:EliminaItems(${Prod.Cod},carrito)" class="btn btn-primary me-md-1" type="button"> <b>-</b> </a>              
        </div>
            `;
        Container.appendChild(BoxCarrito);
        });
        
};

