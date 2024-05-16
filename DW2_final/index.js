// Creamos un array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const carritoContainer = document.querySelector('.carrito');
    // Limpiamos el contenido del contenedor del carrito
    carritoContainer.innerHTML = '';

    // Recorremos los productos en el carrito y los mostramos en la vista
    carrito.forEach((producto, index) => {
        const productoHTML = `
            <div class="producto-carrito">
                <span>${producto.nombre} - $${producto.precio}</span>
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
            </div>
        `;
        carritoContainer.innerHTML += productoHTML;
    });
}

// Ejemplo de uso
// Supongamos que tienes una lista de productos y quieres agregar uno al carrito
const productoEjemplo = {
    nombre: "Camiseta",
    precio: 20
};
agregarAlCarrito(productoEjemplo);
