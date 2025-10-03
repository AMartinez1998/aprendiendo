/* ejercicio 1*/ 

const boton=document.getElementById("cambiarColor");
const caja=document.getElementById("caja");

boton.addEventListener('click', ()=>{
    caja.style.backgroundColor = "blue";
});

/* Ejercicio 2*/ 
const botons=document.getElementById("resaltar");
const cajis=document.getElementById("texto");

botons.addEventListener('click', ()=>{
     cajis.classList.add('blue')
});
/*Ejercicio 3*/
const botin= document.getElementById("cambiarTexto");
const cajo= document.getElementById("titulo");

botin.addEventListener('click',()=>{
    cajo.innerHTML="Hola, soy Jack";
});
/*Ejercicio 4*/

const boten= document.getElementById("agregar");
const cajin= document.getElementById("lista");

boten.addEventListener('click',()=>{
    const nuevoElemento= document.createElement("li");
    nuevoElemento.textContent="Elemento nuevo";
    cajin.appendChild(nuevoElemento)
})

/*Ejercicio 5*/ 

const eliminar=document.getElementById("eliminar");
const cosa= document.getElementById("caja");

eliminar.addEventListener('click', ()=>{
    cosa.remove(); // con esto eliminamos todo hasta el div
    cosa.innerHTML = ""; // 🔥 Vacía el contenido pero deja el div
});
/*Ejercicio 6*/ 
const alternar= document.getElementById("alternar");
const contenido=document.getElementById("caja");

alternar.addEventListener('click',()=>{
    contenido.classList.toggle("verde");
})
/*Ejercicio 7*/ 

const botun = document.getElementById("sumar");
const contador=document.getElementById("contador");

botun.addEventListener('click',()=>{
    contador.innerHTML= Number( contador.innerHTML) +1;
})

/*Ejercicio 8*/ 
const boron = document.getElementById("agregars");
const texto = document.getElementById("textos");
const lista = document.getElementById("listasss");

boron.addEventListener('click', () => {
    const valor = texto.value; // 1️⃣ Capturamos el texto del input
    if (valor.trim() === "") return; // 2️⃣ Evita añadir si está vacío

    const nuevoElemento = document.createElement("li"); // 3️⃣ Creamos un <li>
    nuevoElemento.textContent = valor; // 4️⃣ Le ponemos el texto
    lista.appendChild(nuevoElemento); // 5️⃣ Lo agregamos a la lista

    texto.value = ""; // 6️⃣ Vaciar el input después de añadir
});
/*Ejercicio 9*/ 
const buton = document.getElementById("eliminar");
const listas = document.getElementById("lista");

buton.addEventListener('click', () => {
    // 1️⃣ Seleccionamos todos los <li> dentro de la lista
    const elementos = listas.querySelectorAll("li");

    // 2️⃣ Recorremos cada uno
    elementos.forEach(li => {
        // 3️⃣ Si el texto contiene la palabra "Borrar"
        if (li.textContent.includes("Borrar")) {
            li.remove(); // 4️⃣ Lo eliminamos
        }
    });
});
/*Ejercicio 10*/ 

const butron = document.getElementById("cambiarEstilo");
// Seleccionamos todos los párrafos con querySelectorAll
const parrafos = document.querySelectorAll("p");

butron.addEventListener('click', () => {
    parrafos.forEach(p => {
        p.classList.add("cambio");
    });
});

/*Ejercicio 1 intermedio*/ 

const frutas = ["Manzana", "Banana", "Cereza", "Naranja"];
const listo = document.getElementById("listaFrutas");

frutas.forEach(fruta => {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = fruta; // 🔥 Ponemos el nombre de la fruta
    listo.appendChild(nuevoElemento);
});

/*Ejercicio 2 */
const productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 35 },
  { nombre: "Zapatos", precio: 50 }
];

const listado=document.getElementById("contenedorProductos");

productos.forEach(producto=>{
   const nuevoProducto=document.createElement("div");
    nuevoProducto=producto;
    nuevoProducto.classList.add("producto");
    listado.appendChild(nuevoProducto);

})

/*Ejercico 3*/
const tareas = ["Hacer la cama", "Estudiar JS", "Comprar pan"];
const tareos = document.getElementById("listaTareas");

tareas.forEach(tarea => {
    // 1️⃣ Crear el <li> y añadirle el texto
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tarea;

    // 2️⃣ Crear el botón
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    // 3️⃣ Añadir evento para eliminar
    botonEliminar.addEventListener("click", () => {
        nuevaTarea.remove(); // ✅ elimina ese <li>
    });

    // 4️⃣ Agregar el botón dentro del <li>
    nuevaTarea.appendChild(botonEliminar);

    // 5️⃣ Agregar el <li> completo a la lista
    tareos.appendChild(nuevaTarea);
});

/*Ejercicio 4*/
const imagenes = [
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/120",
  "https://via.placeholder.com/150"
];

const contenedor = document.getElementById("galeria");

imagenes.forEach(imagen => {
  const nuevaImagen = document.createElement("img");
  nuevaImagen.src = imagen;              // 👈 aquí está el cambio clave
  nuevaImagen.alt = "Imagen generada";   // ✅ buena práctica (texto alternativo)

  contenedor.appendChild(nuevaImagen);
});

/*Ejercico 5*/
const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 6 }
];

const clase = document.getElementById("estudiantes");

estudiantes.forEach(estudiante => {
  const nuevoAlumno = document.createElement("div");
  nuevoAlumno.classList.add("alumno");
  nuevoAlumno.style.padding = "10px";
  nuevoAlumno.style.margin = "5px";
  nuevoAlumno.style.color = "white";

  // 🧠 Texto inicial según la nota
  if (estudiante.nota < 5) {
    nuevoAlumno.style.backgroundColor = "red";
  } else {
    nuevoAlumno.style.backgroundColor = "green";
  }

  // 📛 Nombre del estudiante
  const nombreAlumno = document.createElement("p");
  nombreAlumno.textContent = `${estudiante.nombre} - Nota: ${estudiante.nota}`;

  // 🔘 Botón interactivo
  const boton = document.createElement("button");
  boton.textContent = "Cambiar estado";

  // 🧠 Evento para alternar color y nota
  boton.addEventListener("click", () => {
    if (nuevoAlumno.style.backgroundColor === "red") {
      nuevoAlumno.style.backgroundColor = "green";
      boton.textContent = "Reprobar";
    } else {
      nuevoAlumno.style.backgroundColor = "red";
      boton.textContent = "Aprobar";
    }
  });

  // 🏗️ Añadir elementos al contenedor
  nuevoAlumno.appendChild(nombreAlumno);
  nuevoAlumno.appendChild(boton);
  clase.appendChild(nuevoAlumno);
});


/*Ejercicio 1*/

const input = document.getElementById("meter");
const bota = document.getElementById("yatu");
const liston = document.getElementById("liston");

bota.addEventListener("click", () => {
  const valor = input.value.trim(); // ✅ obtenemos el texto limpio

  if (valor !== "") { // ✅ comprobamos que NO esté vacío
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = valor; // ✅ añadimos el texto

    liston.appendChild(nuevoLi); // ✅ lo agregamos a la lista

    input.value = ""; // ✨ limpiamos el input
  }
});
/*Ejercicio 2*/

/*Ejercicio 2*/

const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const biton = document.getElementById("sape");
const div = document.getElementById("sapu");

biton.addEventListener('click', () => {
  const valor = nombre.value.trim();
  const edid = edad.value.trim();

  if (valor !== "" && edid !== "") {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("tarjeta"); // (opcional) para estilo

    // ✅ Crear elementos para nombre y edad
    const nombreP = document.createElement("p");
    nombreP.textContent = `Nombre: ${valor}`;

    const edadP = document.createElement("p");
    edadP.textContent = `Edad: ${edid}`;

    // ✅ Agregarlos al nuevo div
    nuevoDiv.appendChild(nombreP);
    nuevoDiv.appendChild(edadP);

    // ✅ Agregar el nuevo div al contenedor
    div.appendChild(nuevoDiv);

    // ✨ Limpiar los inputs
    nombre.value = "";
    edad.value = "";
  }
});
/* Ejercicio 3 */

const productes = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 35 },
  { nombre: "Zapatos", precio: 50 },
  { nombre: "Gorra", precio: 15 },
  { nombre: "Chaqueta", precio: 60 },
  { nombre: "Bufanda", precio: 10 },
  { nombre: "Calcetines", precio: 5 },
  { nombre: "Reloj", precio: 120 },
  { nombre: "Mochila", precio: 40 },
  { nombre: "Cinturón", precio: 25 }
];

const filtro = document.getElementById("filtro");
const container = document.getElementById("contenedorProductos");

// 🔁 Función para renderizar productos
function mostrarProductos(lista) {
  container.innerHTML = ""; // limpiar antes
  lista.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("fortu");
    card.textContent = `${producto.nombre} - ${producto.precio}€`;
    container.appendChild(card);
  });
}

// 🖱️ Mostrar todos al inicio
mostrarProductos(productos);

// 📤 Filtrar mientras el usuario escribe
filtro.addEventListener("input", () => {
  const texto = filtro.value.toLowerCase().trim();

  const filtrados = productos.filter(prod =>
    prod.nombre.toLowerCase().includes(texto)
  );

  mostrarProductos(filtrados);
});

/*Ejercicio 4*/

// Seleccionamos todas las tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');

// Recorremos cada tarjeta
tarjetas.forEach(tarjeta => {
  const contador = tarjeta.querySelector('.contador');
  const btnSumar = tarjeta.querySelector('.sumar');
  const btnRestar = tarjeta.querySelector('.restar');

  // Evento sumar
  btnSumar.addEventListener('click', () => {
    let valor = parseInt(contador.textContent);
    contador.textContent = valor + 1;
  });

  // Evento restar
  btnRestar.addEventListener('click', () => {
    let valor = parseInt(contador.textContent);
    if (valor > 0) {
      contador.textContent = valor - 1;
    }
  });
});

/*Ejercicio 5*/

const listes=document.getElementById("lista");
const to=document.getElementById("eliminarTodo");

listes.forEach(lista =>{
  const btneliminar=document.querySelector('.eliminar');

  btneliminar.addEventListener('click',()=>{
    lista.remove()
  })

  to.addEventListener('click',()=>{
    listes.remove()
  })

})

/*Ejercicio 6*/

const nombres = ["Juan", "Ana", "Pedro", "María"];
const listu = document.getElementById("lista");

nombres.forEach(nombre => {
  const li = document.createElement("li");
  li.textContent = nombre;
  listu.appendChild(li);

  li.addEventListener('click',()=>{
    li.classList.toggle('blue');
  })
});

/*Ejercicio 7*/

/* Ejercicio 7 */

const tareis = ["Hacer la cama", "Estudiar JS", "Comprar pan"];
const conte = document.getElementById("contenedortareis");

tareis.forEach(tarea => {
  // Crear el <li> dinámico
  const li = document.createElement("li");
  li.textContent = tarea;

  // Botón eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.addEventListener("click", () => {
    li.remove(); // Ahora sí funciona
  });

  // Botón marcar como hecha
  const btnHecho = document.createElement("button");
  btnHecho.textContent = "✔ Hecho";
  btnHecho.addEventListener("click", () => {
    li.classList.toggle("sape"); // Cambia el estilo al hacer clic
  });

  // Añadir botones al li
  li.appendChild(btnEliminar);
  li.appendChild(btnHecho);

  // Añadir el li al contenedor
  conte.appendChild(li);
});

/* Ejercicio 8 */
const articulos = [
  {
    titulo: "Laptop Gamer",
    descripcion: "Una laptop potente ideal para videojuegos y tareas exigentes.",
    imagen: "https://via.placeholder.com/150"
  },
  {
    titulo: "Auriculares Inalámbricos",
    descripcion: "Disfruta de tu música sin cables con gran calidad de sonido.",
    imagen: "https://via.placeholder.com/150"
  },
  {
    titulo: "Smartwatch",
    descripcion: "Reloj inteligente con monitor de actividad y notificaciones.",
    imagen: "https://via.placeholder.com/150"
  }
];

// 📦 contenedor donde meteremos las tarjetas
const contenedore = document.getElementById("contenedorArticulos");

articulos.forEach(articulo => {
  // Crear el div de la tarjeta
  const nuevoArticulo = document.createElement("div");
  nuevoArticulo.classList.add("tarjeta");

  // Crear imagen
  const nuevaImagen = document.createElement("img");
  nuevaImagen.src = articulo.imagen;
  nuevaImagen.alt = articulo.titulo;

  // Crear título
  const nuevoTitulo = document.createElement("h3");
  nuevoTitulo.textContent = articulo.titulo;

  // Crear descripción
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = articulo.descripcion;

  // Añadir todo al div
  nuevoArticulo.appendChild(nuevaImagen);
  nuevoArticulo.appendChild(nuevoTitulo);
  nuevoArticulo.appendChild(nuevoParrafo);

  // Agregar la tarjeta al contenedor principal
  contenedore.appendChild(nuevoArticulo);
});





