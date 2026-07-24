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
/* console.log(`El resultado de la suma es: ${sumar}`); */

//3.- Objetos

let usuario: { readonly nombre: string; edad: number; saludar: () => string } =
  {
    nombre: "Roger",
    edad: 34,
    saludar: () => {
      return `Hola, soy ${nombre} y tengo ${edad} años de edad.`;
    },
  };

//4.- Arrays

let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ["Roger", "Francisca", "Yorgelis"];
let mezcla: (string | number)[] = [22, "Hola"];
let arrayEspecífico: [string, number] = ["Roger", 24]; //No acepta más valores, ya que definimos una cantidad, tipos y orden de valores específico.

//5.- Alias en Tipos

/* Forma 1:
type Usuario = {
  nombre: string;
  edad: number;
}; */

/* Forma 2: 
interface Usuario {
  nombre: string;
  edad: number;
}
*/

let user: Usuario = {
  nombre: "Roger",
  edad: 34,
  genero: "Masculino",
  /*  rol: {
    rol: "Admin"
  } */
  rol: "Admin",
};

let user1: Usuario = {
  nombre: "Francisca",
  edad: 56,
  genero: "Femenino",
  /*  rol: {
    rol: "Dueña"
  } */
  rol: "Dueña",
};

let user2: Usuario = {
  nombre: "Yorgelis",
  edad: 29,
  genero: 2,
  /*  rol: {
    rol: "Admin"
  } */
  rol: "Admin",
};

let user3: Usuario = {
  nombre: "Caramelo",
  edad: 27,
  genero: undefined,
  /*  rol: {
    rol: "Bandid@"
  } */
  rol: "Bandid@",
};

//6.- Unión de tipos | Composición
interface Usuario {
  nombre: string;
  edad: number;
  genero: number | string | undefined;
  rol: Rol;
}

/* Forma ineficiente
 type Rol = {
  rol: string;
};
 */

//Forma ificiente:
type Rol = "Dueña" | "Admin" | "Bandid@" | "";

//7.- Diferencias entre Type e Interface
//Las interfaces trabajan con herencia (POO)
//Las interfaces también se usan como un contrato de obligaciones
//Los Types son mejores para tipos de datos complejos
interface Persona {
  nombre: string;
  edad: number;
  genero?: string;
}

interface Empleado extends Persona {
  readonly rol: string; //No se puede modificar una vez definido
  salario: number | string;
}

let empleado: Empleado = {
  nombre: "Roger Salgado",
  edad: 34,
  rol: "Vice Presidente",
  genero: "Masculino",
  salario: "Impresionante",
};

class Humano implements Empleado {
  rol: string = "";
  salario: string | number = "";
  nombre: string = "";
  edad: number = 1;
  genero?: string;
}

interface ArbolBinario {
  buscar: () => void;
}
class ArbolBinarioPersonas implements ArbolBinario {
  buscar() {}
}

class ArbolBinarioNumeros implements ArbolBinario {
  buscar() {}
}

//8.- Discriminating union
type Loading = {
  status: "Loading";
};
type Success = {
  status: "Success";
  data: string;
};
type Error = {
  status: "Error";
  message: string;
};
type Response = Loading | Success | Error;

const manejarPeticion = (res: Response) => {
  if (res.status === "Loading") {
    console.log("Cargando");
  } else if (res.status === "Success") {
    console.log(res.data);
  } else {
    console.log(res.message);
  }
};

//9.- Narrowing
//Refina un tipo de dato más amplio en varios más específicos
//cada uno dentro de un condicional.
const procesar = (valor: string | number) => {
  if (typeof valor === "number") {
    valor.toExponential(2);
  } else {
    valor.length;
    let number: number = parseInt(valor);
  }
};
procesar(1);
//valor es un tipo de dato amplio; con el narrowing, lo pudimos
//convertir en un tipo de dato diferente, específico y seguro
//dentro de cada condicional.

type Perro = { ladrar: () => void };
type Gato = { maullar: () => void };

const hacerSonido = (animal: Perro | Gato) => {
  if ("ladrar" in animal) {
    animal.ladrar();
  } else if ("maullar" in animal) {
    animal.maullar();
  }
};

function fecha(valor: Date | String) {
  if (valor instanceof Date) {
    valor.getDay();
  } else if (valor instanceof String) {
    valor.concat();
  }
}

const ejemplo = (x: string | null) => {
  if (x === null) return;
  console.log(x.toUpperCase());
};
//10.- Type guards
const esString = (valor: unknown): valor is string => {
  return typeof valor === "string";
};
//Se asegura que el tipo de dato sea el que deseamos.
const usar = (valor: unknown) => {
  if (esString(valor)) {
    console.log(valor.toUpperCase());
  }
};

//Primero definimos los tipos
type isSuccess = { data: string };
type isError = { error: string };

//Luego nos aseguramos de que siempre sea Success
const esSuccess = (res: isSuccess | isError): res is isSuccess => {
  return "data" in res;
};

//Finalmente manejamos los dos escenarios (Success | Error)
const manejar = (res: isSuccess | isError) => {
  if (esSuccess(res)) {
    console.log(res.data);
  } else {
    console.log(res.error);
  }
};

//11.- Literal Types

//Definimos un tipo (puede ser casi que cualquiera)
//Si le colocamos dicho tipo a una variable
//La misma sólo puede recibir los valores
//definidos en dicho tipo
type Direccion = "izquierda" | "derecha";
let mover: Direccion = "derecha";
//Si a "mover" le intentamos pasar un valor diferente
//a los definidos en "Direccion" el sistema arroja error.

const configTema = {
  modo: "oscuro",
} as const;
//as const, lo que hace es que configTema sea tratado como un tipo,
//de esa forma su valor aparece como readonly
//si le quitamos el as const, ya es un objeto común,
//su valor es del tipo de dato general definido(por ejemplo: string),
//y el mismo puede ser cambiado.

//12.- Enums

enum Direcciones {
  Arriba = 1,
  Abajo,
  Izquierda,
  Derecha,
}
let moverse: Direcciones = Direcciones.Abajo;
console.log(moverse);
//Nos devuelve la posición en la que está definida Arriba
//Comenzando por el 0 como la primera posición.
//Lo que nos crea es un array de números,
//pero con valor semántico (Mucho más fácil de leer)
//Existe la posibilidad de que en vez de números,
//les definamos valores que reemplacen a dichos números,
//puede ser con otros números, o con otros tipos de valores,
//pero esto es más tedioso.

//13.- Tipados de callback

//Se tipan funciones pasándoles como parámetro otra función
//Estas funciones que reciben funciones como parámetro,
//Se denominan "Funciones callback".

const funcionesDentroDeFunciones = (callback: (message: string) => void) => {
  callback("Hola Mundo!");
};

funcionesDentroDeFunciones((msj) => {
  console.log(msj);
});

//14.- Genéricos, Restricciones y keyof
//1:11:50
