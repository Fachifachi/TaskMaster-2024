var inputTarea = document.getElementById("inputTarea");
var listaTarea = document.getElementById("listaTarea");
var fechaActual = document.getElementById("fechaActual");

// Obtener la fecha actual
function obtenerFechaActual() {
    var fecha = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', options);
}

// Mostrar la fecha actual
fechaActual.textContent = obtenerFechaActual();

inputTarea.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && inputTarea.value) {
        agregarTarea(inputTarea.value);
        inputTarea.value = "";
    }
});
// AGREGAR NUEVA TAREA
function agregarTarea(textoTarea){
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function(){
        li.classList.toggle("completed");
    });
    var texto = document.createElement("p");
    texto.innerHTML = textoTarea;
    var botonEliminar = document.createElement("span");
    botonEliminar.classList.add("delete");
    botonEliminar.innerHTML = "<ion-icon name='sad-outline'></ion-icon>";
    //Al apretar el boton, se elimina la tarea
    botonEliminar.addEventListener("click", function(){
        li.parentNode.removeChild(li);
    });
    li.appendChild(checkbox);
    li.appendChild(texto);
    li.appendChild(botonEliminar);
    listaTarea.appendChild(li);

}