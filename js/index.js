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
    // Tu lógica para mostrar el menú aquí
    alert("¡Mostrando el menú!");
}
