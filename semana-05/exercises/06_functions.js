// Functions
console.log('EXERCISE 6: FUNCTIONS');


//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
//   Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('Exercise 6.a');
num1 = Math.floor(Math.random()*50);
num2 = Math.floor(Math.random()*50);
function suma(a, b) {
    resultado = a + b;
    return resultado;
};
console.log(suma(num1, num2), 'numero 1:', num1, 'numero 2:', num2);


//b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
//   mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('Exercise 6.b');
function suma(a, b) {
    if (!isNaN(a) && !isNaN(b)){
        resultado = a + b;
        return resultado;
    } else {
        alert('El valor no corresponde a un numero');
        return NaN;
    }
};
console.log(suma(num1, num2));


//c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('Exercise 6.c');
a = 15;
function validateIntenger(a){
    if (Number.isInteger(a)) {
        return true;
    }else{
        return false;
    }
};
console.log(validateIntenger(a));


//d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
//   En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('Exercise 6.d');
function suma (a, b) {
    if (Number.isInteger(a) || Number.isInteger(b)){
        if(a % 1 !==0){
            alert('Error num1: El numero tiene decimales');
            return Math.round(a);
        } else if (b % 1 !== 0){
            alert('Error num2: El numero tiene decimales');
            return Math.round(b);
        }
        resultado = a + b;
        return resultado;
    } else {
        alert('Los numeros tienen decimales');
        return 'Ambos numeros tienen decimales';
    }
};
console.log(suma(num1, num2));


//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función
//   suma probando que todo siga funcionando igual.

console.log('Exercise 6.e');

function validacion (a,b) {
    if(!isNaN(a) && !isNaN(b)){
        if (!Number.isInteger(a)){
            alert('Error num1: El numero tiene decimales');
            console.log(Math.round(a));
        } else if (!Number.isInteger(b)){
            alert('Error num2: El numero tiene decimales');
            console.log(Math.round(b));
        } else {
            resultado = a + b;
        }
    } else {
        alert('El formato no corresponde a numeros');
        console.log(NaN);
    }
};

function suma2(a, b) {
    validacion (a, b);
    console.log(resultado);
};

suma2(num1, num2);