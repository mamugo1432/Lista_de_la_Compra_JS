document.addEventListener("DOMContentLoaded", function () {

document.getElementById("botonAñadir").addEventListener("click", añadirProducto);
document.getElementById("botonEliminar").addEventListener("click", eliminarProducto);
document.getElementById("botonEliminarPos").addEventListener("click", eliminarProductoPorPosicion);

});

function añadirProducto() {
    let nuevoElemento = document.getElementById("contenidoAñadir").value.trim();

    if(nuevoElemento!=""){
        let nuevoElementoLi = document.createElement("li");
        nuevoElementoLi.textContent = nuevoElemento;
        document.getElementById("lista").appendChild(nuevoElementoLi);
        document.getElementById("contenidoAñadir").value = ""; 
    }
    alert("Se ha modificado la lista, añadido elemento: " + nuevoElemento); 
}

function eliminarProducto() {

    let lista = document.getElementById("lista");
    let ultimoElemento = lista.lastElementChild;
    lista.removeChild(ultimoElemento); 
    alert("Se ha modificado la lista, eliminado elemento: " + ultimoElemento.textContent); 
    }
    
