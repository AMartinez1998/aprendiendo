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