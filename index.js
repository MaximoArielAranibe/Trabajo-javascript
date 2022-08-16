
let carrito = [];
let arrayProductos = [];
const signo = '$';
const DOMcarrito = document.querySelector('#carrito');
const changeMode = document.querySelector('body');
const toggle = document.getElementById('toggle');
const lista = document.querySelector('#lista');
const miLocalStorage = window.localStorage; //Global
const openModal = document.querySelector('#carrito');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const DOMtotal = document.querySelector('#total');
const openModalVaciar = document.querySelector('#boton-vaciar');


/* Change theme */
toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}


openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
})

closeModal.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

//LLAMADO A API.JSON
/* fetch('api.json')
.then(respuesta => respuesta.json()) */
function renderizarProductos(){
    baseDeDatos.forEach((producto) => {
    //MiNodo es el div completo de la card
    const miNodo = document.createElement('div');
    miNodo.classList.add('card' , 'bg-light' , 'ms-2' , 'px-3' ,'py-2');
    miNodo.style.width= "350px";//Agrego altura y ancho fijo
    miNodo.style.height="550px";
    //Titulo del producto
    const miNodoTitle = document.createElement('h3');
    miNodoTitle.classList.add('fw-bold');
    miNodoTitle.textContent = producto.title;
    //Imagen del producto
    const miNodoImagen = document.createElement('img');
    miNodoImagen.setAttribute('src',producto.image);
    miNodoImagen.classList.add('border','border-4','border-dark');
    miNodoImagen.style.width= "300px";
    miNodoImagen.style.height= "250px";
    //Precio del producto
    const miNodoPrecio = document.createElement('p');
    miNodoPrecio.classList.add('fs-4', 'mt-3' , 'fw-bold' , 'text-dark');
    miNodoPrecio.textContent = `${signo}${producto.precio}`;
    //Div de los buttons
    const miNodoDivButtons = document.createElement('div');
    miNodoDivButtons.classList.add('d-grid' , 'gap-3');
    //Button comprar
    const miNodoButtonComprar = document.createElement('button');
    miNodoButtonComprar.classList.add('btn', 'btn-primary' ,'btn-lg' , 'text-light' , 'fw-bold' , 'position-relative');
    miNodoButtonComprar.textContent = 'Comprar' ;
    //Button carrito
    const miNodoButtonCarrito = document.createElement('button');
    miNodoButtonCarrito.setAttribute('marcador' , producto.id);
    miNodoButtonCarrito.classList.add('btn' , 'btn-primary' , 'btn-lg' , 'text-light' , 'fw-bold' , 'hero__cta');
    miNodoButtonCarrito.textContent = 'Añadir al carrito';
    miNodoButtonCarrito.addEventListener('click', anyadirProductoAlCarrito);
    /* miNodoButtonCarrito.addEventListener('click', añadirAlCarrito); */
    miNodo.appendChild(miNodoTitle);
    miNodo.appendChild(miNodoImagen);
    miNodo.appendChild(miNodoPrecio);
    miNodo.appendChild(miNodoDivButtons);
    miNodoDivButtons.appendChild(miNodoButtonComprar);
    miNodoDivButtons.appendChild(miNodoButtonCarrito);
    lista.appendChild(miNodo);
    })
}
//Pintar CARDS

function anyadirProductoAlCarrito(evento){
    carrito.push(evento.target.getAttribute('marcador'));
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
}

function renderizarCarrito() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [... new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDeDatos) => {
            return itemBaseDeDatos.id === parseInt(item);
            });
        const numeroUnidadesItem = carrito.reduce((total,itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const openModalVaciar = document.querySelector('#boton-vaciar');
        openModalVaciar.textContent = 'X22';
        openModalVaciar.textContent = `${numeroUnidadesItem} x ${miItem[0].precio} ${signo}`;
        
        //Boton de borrar
        openModalVaciar.dataset.item = item;
        openModalVaciar.addEventListener('click', borrarItemCarrito);
        openModalVaciar.appendChild(DOMtotal);
        });
        DOMtotal.textContent = calcularTotal();
    }


function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
}


function calcularTotal() {
    return carrito.reduce((total,item) => {
        const miItem = baseDeDatos.filter((itemBaseDeDatos) => {
            return itemBaseDeDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    },0).toFixed(2);
}

function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    localStorage.clear();
}

function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

openModalVaciar.addEventListener('click', vaciarCarrito);

cargarCarritoDeLocalStorage();
renderizarCarrito();
renderizarProductos();
/*             const agregarAlCarrito = (prodId) => {
                const item = productos.find((prod) => prod.id === prodID)
                carrito.push(item)
                console.log(carrito);
            }
             */


//Arrays
        //Metodo lenght: Sirve para obtener el largo de un array
/* const numeros = [1,2,3,4,5,7];

for (let i= 0; i < numeros.length; i++){
    console.log(numeros[i]);
} */

/* let carrito = [];
let usuario;
let usuarioEnLocalStorage = localStorage.getItem("usuario");

if(usuarioEnLocalStorage){
    usuario = usuarioEnLocalStorage;
    alert("Bienvenido " + usuario);
}else{
    usuario = prompt("Ingrese su nombre de usuario");
    localStorage.setItem("usuario" , usuario);
} */

//Pasamos los productos al carrito.
/* localStorage.setItem("carrito", JSON.stringify(Productos));
 */
