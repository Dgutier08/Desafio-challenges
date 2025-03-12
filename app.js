let amigos = []; // declaracion Array para almacenar nombres de los amigos

// 1. Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo"); // Obtiene el elemento del campo de entrada por su id
    const nombreAmigo = inputAmigo.value.trim(); // Obtiene el valor del campo y elimina los espacios al principio y final

    // 2. Validar que el campo no está vacío
    if (nombreAmigo === "") { 
        alert("Ingrese un nombre"); // Si el campo está vacío, muestra una alerta
        return; // Termina la función si el campo está vacío
    }

    amigos.push(nombreAmigo); // Agrega el nombre del amigo al array 'amigos'
    actualizarLista(); // Llama a la función para actualizar la lista en pantalla

    inputAmigo.value = ""; // Limpia el campo de entrada después de agregar el amigo
    inputAmigo.focus(); // Vuelve a enfocar el campo de entrada para facilitar agregar otro amigo
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const listaAmigoUL = document.getElementById("listaAmigos"); // Obtiene el elemento UL donde se mostrarán los amigos
    listaAmigoUL.innerHTML = ""; // Limpia el contenido previo de la lista

    amigos.forEach(amigo => { // Itera sobre cada amigo en el array 'amigos'
        const li = document.createElement("li"); // Crea un nuevo elemento de lista (li)
        li.textContent = amigo; // Establece el nombre del amigo como contenido del li
        listaAmigoUL.appendChild(li); // Agrega el nuevo li a la lista (UL)
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) { // Verifica si no hay amigos en la lista
        alert("No hay amigos registrados para el sorteo. Ingrese nombres."); // Si la lista está vacía, muestra una alerta
        return; // Termina la función si no hay amigos para sortear
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio dentro del rango de la lista
    const amigoSorteado = amigos[indiceAleatorio]; // Obtiene el amigo sorteado usando el índice aleatorio

    const resultadoUL = document.getElementById("resultado"); // Obtiene el elemento UL donde se mostrará el resultado
    resultadoUL.innerHTML = `<li>${amigoSorteado}</li>`; // Muestra el amigo sorteado dentro de la lista de resultados
}

// Asignar eventos al cargar la página
document.addEventListener('DOMContentLoaded', () => { // Espera a que el contenido de la página se cargue completamente
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo); // Asocia la función agregarAmigo al botón de añadir
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo); // Asocia la función sortearAmigo al botón de sortear
});
