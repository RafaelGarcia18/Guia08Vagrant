var form;
var boton;
function iniciar() {
    form = document.getElementById("formulario");
    boton = document.getElementById("boton");
    form.style.display = "none";
}

function mostrar() {
    if (boton.textContent === "Mostrar texto") {
        form.style.display = "block";
        document.querySelector('#boton').textContent = "Ocultar texto";
    } else {
        form.style.display = "none";
        document.querySelector('#boton').textContent = "Mostrar texto";
    }
}
