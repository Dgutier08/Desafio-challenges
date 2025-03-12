let amigos = []; // Array para almacenar nombres

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no está vacío
    if (nombreAmigo === "") {
        alert("Ingrese un nombre");
        return;
    }

    amigos.push(nombreAmigo); // Agregar nombre al array
    actualizarLista();

    inputAmigo.value = ""; // Limpiar campo de entrada
    inputAmigo.focus();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const listaAmigoUL = document.getElementById("listaAmigos");
    listaAmigoUL.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoUL.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos registrados para el sorteo. Ingrese nombres.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUL = document.getElementById("resultado");
    resultadoUL.innerHTML = `<li>${amigoSorteado}</li>`;
}

// Asignar eventos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});
