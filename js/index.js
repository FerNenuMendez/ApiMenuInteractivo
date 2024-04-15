const carSec = document.getElementById('carrousel__section')
const verMenuBtn = document.getElementById('verMenuBtn')
const mesaInput = document.getElementById('mesa');
const info = document.getElementById('info')
const main = document.getElementById('main')

const pedido = {}

// Función para obtener el parámetro "mesa" del URL
function obtenerNumeroDeMesa() {
    const urlParams = new URLSearchParams(window.location.search);
    const mesa = urlParams.get('mesa');

    // Asignar el valor de "mesa" al input con id "mesa"
    if (mesa) {
        mesaInput.value = mesa;
    }
}

// Llamar a la función al cargar la página
window.onload = obtenerNumeroDeMesa;

verMenuBtn.addEventListener('click', function () {
    var nombre = document.getElementById("nombre").value;
    var mesa = mesaInput.value; // Obtener el número de mesa del input
    if (nombre.length >= 3 && mesa.length >= 1) { // Cambio en la validación para el número de mesa
        const menuDiv = crearBotonesMenu();
        document.body.appendChild(menuDiv);
    } else {
        alert("Por favor, ingrese al menos 3 caracteres en el nombre y seleccione una mesa válida.");
    }
});

// Funcion para los botones de seccion
function crearBotonesMenu() {
    // ocultamos la seccion info
    info.classList.add('no__visible')
    // Crear un nuevo div
    const divMenu = document.createElement('div');
    divMenu.classList.add('seleccion__btn'); // Agregar una clase al div 

    // Crear botón "Bebidas"
    const btnBebidas = document.createElement('button');
    btnBebidas.textContent = 'Bebidas';
    btnBebidas.classList.add('seleccion__btn__btn'); // Agregar una clase al botón 
    // Añadir evento click al botón
    btnBebidas.addEventListener('click', function () {
        verBebidas();
    });


    // Crear botón "Pizzas"
    const btnPizzas = document.createElement('button');
    btnPizzas.textContent = 'Pizzas';
    btnPizzas.classList.add('seleccion__btn__btn'); // Agregar una clase al botón 

    btnPizzas.addEventListener('click', function () {
        verPizzas();
    });


    // Crear botón "Postres"
    const btnPostres = document.createElement('button');
    btnPostres.textContent = 'Postres';
    btnPostres.classList.add('seleccion__btn__btn'); // Agregar una clase al botón 

    // Agregar los botones al div
    divMenu.appendChild(btnBebidas);
    divMenu.appendChild(btnPizzas);
    divMenu.appendChild(btnPostres);

    // Devolver el div con los botones
    return divMenu;
}


// VER PIZZAS

function verPizzas() {
    fetch('https://api-menu-six.vercel.app/api/productos/')
        .then(response => response.json())
        .then(data => {
            carSec.innerHTML = ""; // Limpiar contenido anterior

            if (data.status === "success") {

                const h2 = document.createElement('h2')
                h2.textContent = 'Pizzas'
                h2.classList.add('menu__h2')
                carSec.append(h2)
                const productos = data.payload;
                productos.forEach(producto => {
                    const card = document.createElement("div");
                    card.classList.add("card");

                    const imagen = document.createElement("img");
                    imagen.classList.add("card__img");
                    imagen.src = producto.foto;
                    imagen.alt = producto.nombre;
                    card.appendChild(imagen);

                    const nombre = document.createElement("h3");
                    nombre.classList.add("card__nombre");
                    nombre.textContent = producto.nombre;
                    card.appendChild(nombre);

                    const detalle = document.createElement("p");
                    detalle.classList.add("card__detalle");
                    detalle.textContent = producto.detalle;
                    card.appendChild(detalle);

                    const precio = document.createElement("p");
                    precio.classList.add("card__precio");
                    precio.textContent = `Precio: $${producto.precio}`;
                    card.appendChild(precio);

                    // Sección para añadir al pedido
                    const agregarPedido = document.createElement('div');
                    agregarPedido.classList.add('agregar__pedido');

                    const btnRestar = document.createElement('button');
                    btnRestar.textContent = '-';
                    btnRestar.classList.add('cantidad__btn')
                    btnRestar.addEventListener('click', function () {
                        let cantidad = parseInt(inputCantidad.value);
                        if (cantidad > 1) {
                            cantidad--;
                            inputCantidad.value = cantidad;
                        }
                    });
                    agregarPedido.appendChild(btnRestar);

                    const inputCantidad = document.createElement('input');
                    inputCantidad.type = 'number';
                    inputCantidad.value = '1';
                    inputCantidad.min = '1';
                    inputCantidad.classList.add('cantidad__input');
                    agregarPedido.appendChild(inputCantidad);

                    const btnSumar = document.createElement('button');
                    btnSumar.textContent = '+';
                    btnSumar.classList.add('cantidad__btn')
                    btnSumar.addEventListener('click', function () {
                        let cantidad = parseInt(inputCantidad.value);
                        cantidad++;
                        inputCantidad.value = cantidad;
                    });
                    agregarPedido.appendChild(btnSumar);

                    const btnAgregarPedido = document.createElement('button');
                    btnAgregarPedido.textContent = 'Agregar al pedido';
                    btnAgregarPedido.addEventListener('click', function () {
                        // Aquí puedes agregar la lógica para agregar el producto al pedido
                        console.log(`Agregado ${producto.nombre} al pedido`);
                    });
                    btnAgregarPedido.classList.add('cantidad__btn');

                    card.appendChild(agregarPedido);
                    card.appendChild(btnAgregarPedido);

                    carSec.appendChild(card);
                });
            } else {
                console.error('Error en la respuesta del servidor:', data);
            }
        })
        .catch(error => {
            console.error('Error al obtener los productos:', error);
        });
}

// VER BEBIDAS

function verBebidas() {
    fetch('https://api-menu-six.vercel.app/api/bebidas/')
        .then(response => response.json())
        .then(data => {
            carSec.innerHTML = ""; // Limpiar contenido anterior

            if (data.status === "success") {

                const h2 = document.createElement('h2')
                h2.textContent = 'Bebidas'
                h2.classList.add('menu__h2')
                carSec.append(h2)
                const productos = data.payload;
                productos.forEach(producto => {
                    const card = document.createElement("div");
                    card.classList.add("card");

                    const imagen = document.createElement("img");
                    imagen.classList.add("card__img");
                    imagen.src = producto.foto;
                    imagen.alt = producto.nombre;
                    card.appendChild(imagen);

                    const nombre = document.createElement("h3");
                    nombre.classList.add("card__nombre");
                    nombre.textContent = producto.nombre;
                    card.appendChild(nombre);

                    const detalle = document.createElement("p");
                    detalle.classList.add("card__detalle");
                    detalle.textContent = producto.detalle;
                    card.appendChild(detalle);

                    const precio = document.createElement("p");
                    precio.classList.add("card__precio");
                    precio.textContent = `Precio: $${producto.precio}`;
                    card.appendChild(precio);

                    // Sección para añadir al pedido
                    const agregarPedido = document.createElement('div');
                    agregarPedido.classList.add('agregar__pedido');

                    const btnRestar = document.createElement('button');
                    btnRestar.textContent = '-';
                    btnRestar.classList.add('cantidad__btn')
                    btnRestar.addEventListener('click', function () {
                        let cantidad = parseInt(inputCantidad.value);
                        if (cantidad > 1) {
                            cantidad--;
                            inputCantidad.value = cantidad;
                        }
                    });
                    agregarPedido.appendChild(btnRestar);

                    const inputCantidad = document.createElement('input');
                    inputCantidad.type = 'number';
                    inputCantidad.value = '1';
                    inputCantidad.min = '1';
                    inputCantidad.classList.add('cantidad__input');
                    agregarPedido.appendChild(inputCantidad);

                    const btnSumar = document.createElement('button');
                    btnSumar.textContent = '+';
                    btnSumar.classList.add('cantidad__btn')
                    btnSumar.addEventListener('click', function () {
                        let cantidad = parseInt(inputCantidad.value);
                        cantidad++;
                        inputCantidad.value = cantidad;
                    });
                    agregarPedido.appendChild(btnSumar);

                    const btnAgregarPedido = document.createElement('button');
                    btnAgregarPedido.textContent = 'Agregar al pedido';
                    btnAgregarPedido.addEventListener('click', function () {
                        // Aquí puedes agregar la lógica para agregar el producto al pedido
                        console.log(`Agregado ${producto.nombre} al pedido`);
                    });
                    btnAgregarPedido.classList.add('cantidad__btn');

                    card.appendChild(agregarPedido);
                    card.appendChild(btnAgregarPedido);

                    carSec.appendChild(card);
                });
            } else {
                console.error('Error en la respuesta del servidor:', data);
            }
        })
        .catch(error => {
            console.error('Error al obtener los productos:', error);
        });
}
