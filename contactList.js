// Creamos una lista de contactos vacía
let listaContactos = [];

// Agregamos algunos contactos predefinidos a la lista
listaContactos.push("Juan Florez");
listaContactos.push("María Charry");
listaContactos.push("María García");
listaContactos.push("Pablo Caro");

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombreApellido) {
  listaContactos.push(nombreApellido);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombreApellido) {
  let indice = listaContactos.indexOf(nombreApellido);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log(listaContactos);
}

// Agregamos un nuevo contacto a la lista
agregarContacto("Ana Gómez");

// Borramos un contacto existente de la lista
borrarContacto("María García");

// Imprimimos la lista de contactos actualizada
imprimirContactos();
