/* alert("Hola Programador");
 */

let nombre = "Roger Salgado";
let edad = 34;

const contenido = document.getElementById("contenido");
const frutas = document.getElementById("frutas");
contenido.innerHTML = `<p>Hola, soy ${nombre} y tengo ${edad} años de edad.</p>`;

if (edad > 0 && edad < 4) {
  console.log("Deberías estar jugando");
} else if (edad >= 4 && edad < 60) {
  console.log("Deberías estar estudiando y/o trabajando");
} else {
  console.log("Deberías estar jubilad@");
}

let arrayFrutas = [
  "Fresa",
  "Mango",
  "Manzana",
  "Maní",
  "Piña",
  "Arándanos",
  "Ciruela",
  "Mandarina",
  "Naranja",
];

for (let i = 0; i < arrayFrutas.length; i++) {
  frutas.innerHTML += `<li id="fruta">${arrayFrutas[i]}</li>`;
}
