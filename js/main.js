
// FORMULARIO DE CONTACTO

document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;

    alert("¡Gracias " + nombre + "! Tu mensaje fue registrado correctamente.");

    this.reset();

});
