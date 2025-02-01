// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre == "") {
        alert("Por favor, ingrese un nombre");
    } else {
        amigos.push(nombre);
    }
    document.getElementById("amigo").value = "";
    mostrarAmigos();
}

function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        let elemento = document.createElement("li");
        elemento.textContent = nombre;
        lista.appendChild(elemento);
    });
}