let listaContactos = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Florez",
    telefono: "3134523690",
    ubicacion: "Calle 123",
    ciudad: "Manizales",
    direccion: "Casa 1",
  },
  {
    id: 2,
    nombre: "María",
    apellido: "Charry",
    telefono: "3117909916",
    ubicacion: "Avenida 456",
    ciudad: "Manizales",
    direccion: "Apartamento 2",
  },
  {
    id: 3,
    nombre: "María",
    apellido: "García",
    telefono: "3116225872",
    ubicacion: "Carrera 789",
    ciudad: "Cali",
    direccion: "Oficina 3",
  },
  {
    id: 4,
    nombre: "Pablo",
    apellido: "Caro",
    telefono: "3216654322",
    ubicacion: "Avenida 012",
    ciudad: "Bogotá",
    direccion: "Casa 4",
  },
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(
  id,
  nombre,
  apellido,
  telefono,
  ubicacion,
  ciudad,
  direccion
) {
  listaContactos.push({
    id: id,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    ubicacion: ubicacion,
    ciudad: ciudad,
    direccion: direccion,
  });
}

// Función para borrar un contacto existente de la lista
function borrarContacto(id) {
  let indice = listaContactos.findIndex((contacto) => contacto.id === id);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}

// Función para actualizar un contacto existente de la lista
function actualizarContacto(
  id,
  nombre,
  apellido,
  telefono,
  ubicacion,
  ciudad,
  direccion
) {
  let indice = listaContactos.findIndex((contacto) => contacto.id === id);
  if (indice !== -1) {
    listaContactos[indice].nombre = nombre;
    listaContactos[indice].apellido = apellido;
    listaContactos[indice].telefono = telefono;
    listaContactos[indice].ubicacion = ubicacion;
    listaContactos[indice].ciudad = ciudad;
    listaContactos[indice].direccion = direccion;
  }
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log(listaContactos);
}

// Agregamos un nuevo contacto a la lista
agregarContacto(
  5,
  "Ana",
  "Gómez",
  "3227903125",
  "Calle 456",
  "Bogotá",
  "Apartamento 5"
);

// Borramos un contacto existente de la lista
borrarContacto(3);


// Actualizamos un contacto existente de la lista
actualizarContacto(
  2,
  "Lucía",
  "Charry",
  "3101234567",
  "Avenida 789",
  "Medellín",
  "Casa 2"
);

// Imprimimos la lista de contactos actualizada
imprimirContactos();
