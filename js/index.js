const carSec = document.getElementById('carrousel__section')
const verMenuBtn = document.getElementById('verMenuBtn')

verMenuBtn.addEventListener('click', function () {
    var nombre = document.getElementById("nombre").value;
    var mesa = document.getElementById("mesa").value;
    if (nombre.length >= 3 && mesa.length >= 3) {
        verMenu();
    } else {
        alert("Por favor, ingrese al menos 3 caracteres en ambos campos.");
    }
});

function verMenu() {
    fetch('https://api-menu-six.vercel.app/api/productos/')
        .then(response => response.json())
        .then(data => {
            carSec.innerHTML = ""; // Limpiar contenido anterior

            if (data.status === "success") {
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
