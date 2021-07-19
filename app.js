

alert("Bienvenid@ a Le Plat Principal");

function saludoCompleto (nombre) {
    return alert(`Hola ${nombre}, esperamos te tientes con todos nuestros productos!`);
}

let nombre = String(prompt("Bienvenido a Le Plat Principal, como te llamas?"));

saludoCompleto (nombre);

localStorage.setItem("nombre", nombre);

alert("Antes de proseguir, nos gustaría contar con tu correo electrónico para poder enviarte novedades y promociones, estas de acuerdo?")

let email = String(prompt("Ingresa tu correo electrónico"));

localStorage.setItem("email", email);



// let consultaUsuario = confirm("Es tu primera vez en nuestro sitio web?");

// if (consultaUsuario == true) {
//     console.log(String(prompt("Por favor, ingresa tu correo electrónico así podemos enviarte nuestras novedades y promociones")));
// } else {
//         console.log(alert("Perfecto, confirmamos que te tenemos en nuestros registros del Newsletter!"));
//     }


alert("A continuacion, te mostraremos nuestras opciones de platos y de conservas");   
    
class Producto {
    constructor (nombre, id, tipo, precio) {
        this.nombre = nombre;
        this.id = id;
        this.tipo = tipo;
        this.precio = precio;
    }

    iva () {
        let calculoDeIva = this.precio * 0.21;
        return calculoDeIva;
    }

    totalConIva () {
        let precioFinal = (this.precio * 0.21) + this.precio;
        return precioFinal; 
    }

    // cuotas (cantidad) {
    //     let resultado = ((this.precio * 1.21) / cantidad)
    //     return resultado;
    // }

    describirProducto () {
        console.log(`Elegiste ${this.nombre} es una ${this.tipo} y cuesta ${this.precio} pesos`);
    }

}

function guardarLocal () {
    let aJson = JSON.stringify(Productos)
    localStorage.setItem("productos", aJson)
}

const Comida1 = new Producto("Guiso de lentejas", 1 , "plato", 350);
const Comida2 = new Producto("Paella", 2, "plato", 420);
const Comida3 = new Producto("Entraña con arroz Indio", 3, "plato", 400);

const Conserva1 = new Producto("Pepinos agridulces", 4,  "conserva", 250);
const Conserva2 = new Producto("Ajos confitados", 5,  "conserva", 330);
const Conserva3 = new Producto("Berenjenas al escabeche", 6 , "conserva", 375);

const Productos = [];

Productos.push(Comida1)
Productos.push(Comida2)
Productos.push(Comida3)
Productos.push(Conserva1)
Productos.push(Conserva2)
Productos.push(Conserva3)

guardarLocal ();
console.log(Productos);

// const guardarComidas = ("Comida", Comida) => { localStorage.setItem("Comida", Comida)};

// for (const Comida of Comidas) {
//     guardarComidas(Comida.id, JSON.stringify(Comidas));
// }



// console.log(Comidas);

let eleccion = Number(prompt("Ingresa el ID del producto que te gustaría comprar, tomando la referencia del 1 al 5"));


// console.log(Comidas.find(Comida => Comida.id == eleccion));

// console.log(Comidas.sort(Comida => Comida.tipo));


function mostrarProducto () {
    for(let Producto of Productos)
    if (eleccion == Producto.id) {
        console.log(Producto.describirProducto());
        break;
    } 
        else {
            console.log("id equivoco")
        }
}

mostrarProducto ();


let tipoProductoElegido = prompt("Que tipo de producto buscas, una comida o una conserva?")

function filtrarTipo () {
    let tipo = Productos.filter(Comida => Productos.tipo == tipoProductoElegido)
    console.log(tipo)
}

console.log(Productos);
filtrarTipo();


// DOM

let sumaHeader = document.getElementsByClassName("section__header1");
console.log(sumaHeader);
sumaHeader[0].innerHTML = "Disfruta la vida, es simplemente deliciosa!"; 


let sumaCardTitle = document.getElementsByClassName("card-title");
console.log(sumaCardTitle[10]);
sumaCardTitle[10].innerHTML = "Inspirate y dejate llevar";


let footer = document.getElementById("footer");
console.log(footer);

let listItem = document.createElement("li");
listItem.textContent = "Aviso legal";
footer[0].appendChild(listItem);


