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
        let input = document.getElementById("contenidoAñadir");
        input.value = ""; 

        let parrafo = document.createElement("p");
        let body= document.getElementsByTagName("body")[0];
        parrafo.textContent = "Se ha añadido un nuevo elemento";
        body.appendChild(parrafo);
    /*alert("Se ha añadido un elemento a la lista" ); */
    }

    
    
}

function eliminarProducto() {

    let lista = document.getElementById("lista");
    let ultimoElemento = lista.lastElementChild;
    lista.removeChild(ultimoElemento); 
    /*alert("Se ha modificado la lista, eliminado elemento: " + ultimoElemento.textContent); */
    let parrafo = document.createElement("p");
        let body= document.getElementsByTagName("body")[0];
        parrafo.textContent = "Se ha eliminado el último elemento";
        body.appendChild(parrafo);
    }
    
    function eliminarProductoPorPosicion(){
    
        let lista = document.getElementById("lista");
        let posicion = parseInt(document.getElementById("contenidoEliminarPos").value.trim());
       
        if (posicion >= 1 || posicion <= lista.children.length) {
        lista.removeChild(lista.children[posicion-1]);

        let parrafo = document.createElement("p");
        let body= document.getElementsByTagName("body")[0];
        parrafo.textContent = "Se ha eliminado el elemento en la posición "+ (posicion);
        body.appendChild(parrafo);
        /*alert("Se ha modificado la lista, eliminado elemento en la posición deseada");*/

    
     }}