// Números
// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.
function suma(a, b) { return a + b; }
console.log('suma:', suma(2, 3)); // 5
// 2. Escribe una función que tome dos números como argumentos y devuelva su resta.
function resta(a, b) { return a - b; }
console.log('resta:', resta(5, 2)); // 3
// 3. Escribe una función que tome dos números como argumentos y devuelva su producto.
function producto(a, b) { return a * b; }
console.log('producto:', producto(4, 3)); // 12
// 4. Escribe una función que tome dos números como argumentos y devuelva su división.
function division(a, b) { return a / b; }
console.log('division:', division(10, 2)); // 5
// 5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.
function potencia(base, exponente) { return Math.pow(base, exponente); }
console.log('potencia:', potencia(2, 4)); // 16
// 6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
function resto(a, b) { return a % b; }
console.log('resto:', resto(10, 3)); // 1
// 7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.
function raizCuadrada(num) { return Math.sqrt(num); }
console.log('raizCuadrada:', raizCuadrada(16)); // 4
// 8. Escribe una función que tome un número como argumento y devuelva su valor absoluto. 
function valorAbsoluto(num) { return Math.abs(num); }
console.log('valorAbsoluto:', valorAbsoluto(-7)); // 7
// 9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano. 
function redondear(num) { return Math.round(num); }
console.log('redondear:', redondear(3.7)); // 4
// 10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.
function numeroAleatorio() { return Math.random(); }
console.log('numeroAleatorio:', numeroAleatorio()); // entre 0 y 1

// Letras:
// 1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
function concatenar(str1, str2) { return str1 + str2; }
console.log('concatenar:', concatenar('Hola', ' Mundo')); // 'Hola Mundo'
// 2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
function longitud(str) { return str.length; }
console.log('longitud:', longitud('Javascript')); // 10
// 3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.
function mayusculas(str) { return str.toUpperCase(); }
console.log('mayusculas:', mayusculas('hola')); // 'HOLA'
// 4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
function minusculas(str) { return str.toLowerCase(); }
console.log('minusculas:', minusculas('HOLA')); // 'hola'
// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
function caracterEn(str, indice) { return str.charAt(indice); }
console.log('caracterEn:', caracterEn('Javascript', 4)); // 's'
// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.
function invertirCadena(str) { return str.split('').reverse().join(''); }
console.log('invertirCadena:', invertirCadena('Hola')); // 'aloH'
// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.
function contarCaracter(str, char) { return str.split(char).length - 1; }
console.log('contarCaracter:', contarCaracter('banana', 'a')); // 3
// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.
function sinEspacios(str) { return str.replace(/\s/g, ''); }
console.log('sinEspacios:', sinEspacios('Hola Mundo')); // 'HolaMundo'
// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.
function esPalindromo(str) {
  const limpio = str.replace(/\s/g, '').toLowerCase();
  return limpio === limpio.split('').reverse().join('');
}
console.log('esPalindromo:', esPalindromo('Anita lava la tina')); // true
// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.
function primeraLetraMayuscula(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}
console.log('primeraLetraMayuscula:', primeraLetraMayuscula('hola mundo javascript')); // 'Hola Mundo Javascript'

// Arrays:
// 1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
function sumaArray(arr) { return arr.reduce((a, b) => a + b, 0); }
console.log('sumaArray:', sumaArray([1, 2, 3, 4])); // 10
// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.
function promedioArray(arr) { return arr.length ? sumaArray(arr) / arr.length : 0; }
console.log('promedioArray:', promedioArray([2, 4, 6, 8])); // 5
// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
function ordenarAscendente(arr) { return [...arr].sort((a, b) => a - b); }
console.log('ordenarAscendente:', ordenarAscendente([5, 2, 8, 1])); // [1,2,5,8]
// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.
function mayoresQue(arr, num) { return arr.filter(x => x > num); }
console.log('mayoresQue:', mayoresQue([1, 5, 8, 3], 4)); // [5,8]
// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.
function unirArrays(arr1, arr2) { return arr1.concat(arr2); }
console.log('unirArrays:', unirArrays([1, 2], [3, 4])); // [1,2,3,4]
// 6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.
function maximoArray(arr) { return Math.max(...arr); }
console.log('maximoArray:', maximoArray([1, 9, 3, 7])); // 9
// 7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.
function minimoArray(arr) { return Math.min(...arr); }
console.log('minimoArray:', minimoArray([1, 9, 3, 7])); // 1
// 8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.
function contarElemento(arr, el) { return arr.filter(x => x === el).length; }
console.log('contarElemento:', contarElemento([1, 2, 2, 3, 2], 2)); // 3
// 9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.
function sinDuplicados(arr) { return [...new Set(arr)]; }
console.log('sinDuplicados:', sinDuplicados([1, 2, 2, 3, 1])); // [1,2,3]

// Objetos literales:
// 1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.
function obtenerNombre(obj) { return obj.nombre; }
console.log('obtenerNombre:', obtenerNombre({ nombre: 'Juan' })); // 'Juan'
// 2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.
function actualizarEdad(obj, edad) { obj.edad = edad; return obj; }
console.log('actualizarEdad:', actualizarEdad({ edad: 20 }, 30)); // { edad: 30 }
// 3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.
function agregarPropiedad(obj, prop) { obj[prop] = null; return obj; }
console.log('agregarPropiedad:', agregarPropiedad({ a: 1 }, 'nuevo')); // { a: 1, nuevo: null }
// 4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.
function eliminarPropiedad(obj, prop) { delete obj[prop]; return obj; }
console.log('eliminarPropiedad:', eliminarPropiedad({ a: 1, b: 2 }, 'a')); // { b: 2 }
// 5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.
function cantidadPropiedades(obj) { return Object.keys(obj).length; }
console.log('cantidadPropiedades:', cantidadPropiedades({ a: 1, b: 2, c: 3 })); // 3
// 6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.
function tienePropiedad(obj, prop) { return obj.hasOwnProperty(prop); }
console.log('tienePropiedad:', tienePropiedad({ a: 1, b: 2 }, 'b')); // true
// 7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.
function valoresPropiedades(obj) { return Object.values(obj); }
console.log('valoresPropiedades:', valoresPropiedades({ a: 1, b: 2 })); // [1,2]
// 8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.
function objetosIguales(obj1, obj2) {
  const k1 = Object.keys(obj1), k2 = Object.keys(obj2);
  if (k1.length !== k2.length) return false;
  return k1.every(k => obj2.hasOwnProperty(k) && obj1[k] === obj2[k]);
}