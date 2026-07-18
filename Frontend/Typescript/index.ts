//1.- Tipos

let nombre: string = "Roger";
let edad: number = 34;
let precio: number = 99.95;
let activo: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;
let datoCualquiera: any = "gol";
datoCualquiera = true;
let desconocido: unknown = "gol";

function saludar(): void {
  console.log("Hola");
}

function error(): never {
  throw new Error("Error");
}

/* console.log(`Hola, mi nombre es ${nombre}, tengo ${edad}.`); */

//2.- Funciones

function sumar(a: number, b: number): number {
  return a + b;
}

const restar = function (a: number, b: number): number {
  return a - b;
};

const producto = (a: number, b: number): number => {
  return a * b;
};

function saludo(nombre?: string) {
  console.log(`Hola ${nombre}`);
}

let resultado = sumar(1, 5);
console.log(resultado);

//3.- Objetos

let usuario: { nombre: string; edad: number; saludar: () => string } = {
  nombre: "Roger",
  edad: 34,
  saludar: () => {
    return `Hola, soy ${nombre} y tengo ${edad} años de edad.`;
  },
};

console.log(usuario.saludar());

//00:22:15
