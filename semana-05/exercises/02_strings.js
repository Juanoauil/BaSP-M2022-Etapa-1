// Strings

console.log('EXERCISE 2: STRINGS');

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('Exercise 2.a');
var frase = 'mi nombre es juan diego';
console.log(frase.toUpperCase());

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
//   guardando el resultado en una nueva variable (utilizar substring).

console.log('Exercise 2.b');
var frase2 = 'Frase con al menos 10 caracteres';
var subString2 = frase2.substring(0, 5);
console.log(subString2);

//c. Crear una variable de tipo string con al menos 10 caracteres
//   y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('Exercise 2.c');
var frase3 = 'Rercer frase de prueba para generar un substring';
var subString3 = frase3.substring(48, 45);
console.log(subString3);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula
//   y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('Exercise 2.d');
var frase4 = 'frase con mayusculas y minusculas';
var upperFrase4 = frase4.substring(0, 1);
var primerMayus = upperFrase4.toUpperCase();
var lowerFrase4 = frase4.substring(1, 33);
var frase4Finale = primerMayus + lowerFrase4;
console.log(frase4Finale);

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco
//   y guardarla en una variable (utilizar indexOf).

console.log('Exercise 2.e');
var frase5 = 'Frase para buscar un espacio intermedio';
var spaceFrase5 = frase5.indexOf(' ');
console.log(spaceFrase5);

//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
//   Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
//   palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('Exercise 2.f');
var frase6 = 'problematica semanal';
var primerLetra = frase6.indexOf('problematica');
var segundaLetra = frase6.indexOf('semanal');
var primeraMayus = frase6.substring(primerLetra, ++primerLetra);
var segundaMayus = frase6.substring(segundaLetra, ++segundaLetra);
var restOfFrase1 = frase6.substring(++primerLetra, --segundaLetra);
var restOfFrase2 = frase6.substring(++segundaLetra);
var fraseFinal =
    primeraMayus.toUpperCase() +
    restOfFrase1 +
    segundaMayus.toUpperCase() +
    restOfFrase2;
console.log(fraseFinal);
