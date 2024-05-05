// 1-Ejercicio consola
console.log("Hola, mundo");
console.log("Emiliano");
console.error("Hola, mundo");

let palabra = "Hola";
console.log(palabra);

// Variables y constantes y concatenar

let primerNombre = "Emiliano";
let segundoNombre = "Luis";
let apellido = "Varni";

const NOMBRE_COMPLETO = primerNombre + " " + segundoNombre + " " + apellido;

console.log(NOMBRE_COMPLETO);

// 2-Ejercicios Prompt

let nombreCompleto = prompt("Ingrese su nombre");
console.log(nombreCompleto);

let edadUsuario = prompt("Ingrese su edad");
console.log("Su edad es de " + edadUsuario + " años");

// 3-Ejercicios Alert

alert("Bienvenido a nuestra página web");

let comidaFav = prompt("¿Cúal es su comida preferida?");
alert("Su comida preferida es " + comidaFav);

// 4-Combinación de crossOriginIsolated, Prompt y Alert

alert("Hola! bienvenido a nuestra web! " + nombreCompleto + " tu edad es de " + edadUsuario);

let anioAct = 2024;

const ANIO_NAC = anioAct - edadUsuario;

console.log(ANIO_NAC);

if(ANIO_NAC>=18){
    alert("Puedes ingresar al sitio, sos mayor de edad");
}
else{
    alert("No puedes ingresar al sitio, sos menor de edad");
}



