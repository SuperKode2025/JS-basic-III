// Números
function suma(a, b) { return a + b; }
function resta(a, b) { return a - b; }
function producto(a, b) { return a * b; }
function division(a, b) { return a / b; }
function potencia(base, exponente) { return Math.pow(base, exponente); }
function resto(a, b) { return a % b; }
function raizCuadrada(num) { return Math.sqrt(num); }
function valorAbsoluto(num) { return Math.abs(num); }
function redondear(num) { return Math.round(num); }
function numeroAleatorio() { return Math.random(); }

// Letras
function concatenar(str1, str2) { return str1 + str2; }
function longitud(str) { return str.length; }
function mayusculas(str) { return str.toUpperCase(); }
function minusculas(str) { return str.toLowerCase(); }
function caracterEn(str, indice) { return str.charAt(indice); }
function invertirCadena(str) { return str.split('').reverse().join(''); }
function contarCaracter(str, char) { return str.split(char).length - 1; }
function sinEspacios(str) { return str.replace(/\s/g, ''); }
function esPalindromo(str) {
  const limpio = str.replace(/\s/g, '').toLowerCase();
  return limpio === limpio.split('').reverse().join('');
}
function primeraLetraMayuscula(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

// Arrays
function sumaArray(arr) { return arr.reduce((a, b) => a + b, 0); }
function promedioArray(arr) { return arr.length ? sumaArray(arr) / arr.length : 0; }
function ordenarAscendente(arr) { return [...arr].sort((a, b) => a - b); }
function mayoresQue(arr, num) { return arr.filter(x => x > num); }
function unirArrays(arr1, arr2) { return arr1.concat(arr2); }
function maximoArray(arr) { return Math.max(...arr); }
function minimoArray(arr) { return Math.min(...arr); }
function contarElemento(arr, el) { return arr.filter(x => x === el).length; }
function sinDuplicados(arr) { return [...new Set(arr)]; }
function invertirArray(arr) { return [...arr].reverse(); }

// Objetos literales
function obtenerNombre(obj) { return obj.nombre; }
function actualizarEdad(obj, edad) { obj.edad = edad; return obj; }
function agregarPropiedad(obj, prop) { obj[prop] = null; return obj; }
function eliminarPropiedad(obj, prop) { delete obj[prop]; return obj; }
function cantidadPropiedades(obj) { return Object.keys(obj).length; }
function tienePropiedad(obj, prop) { return obj.hasOwnProperty(prop); }
function valoresPropiedades(obj) { return Object.values(obj); }
function objetosIguales(obj1, obj2) {
  const k1 = Object.keys(obj1), k2 = Object.keys(obj2);
  if (k1.length !== k2.length) return false;
  return k1.every(k => obj2.hasOwnProperty(k) && obj1[k] === obj2[k]);
}
function copiarObjeto(obj) { return { ...obj }; }
function unirObjetos(obj1, obj2) { return { ...obj1, ...obj2 }; }

console.log('suma:', suma(2, 3));
console.log('resta:', resta(5, 2));
console.log('producto:', producto(4, 3));
console.log('division:', division(10, 2));
console.log('potencia:', potencia(2, 4));
console.log('resto:', resto(10, 3));
console.log('raizCuadrada:', raizCuadrada(16));
console.log('valorAbsoluto:', valorAbsoluto(-7));
console.log('redondear:', redondear(3.7));
console.log('numeroAleatorio:', numeroAleatorio());

console.log('concatenar:', concatenar('Hola', ' Mundo'));
console.log('longitud:', longitud('Javascript'));
console.log('mayusculas:', mayusculas('hola'));
console.log('minusculas:', minusculas('HOLA'));
console.log('caracterEn:', caracterEn('Javascript', 4));
console.log('invertirCadena:', invertirCadena('Hola'));
console.log('contarCaracter:', contarCaracter('banana', 'a'));
console.log('sinEspacios:', sinEspacios('Hola Mundo'));
console.log('esPalindromo:', esPalindromo('Anita lava la tina'));
console.log('primeraLetraMayuscula:', primeraLetraMayuscula('hola mundo javascript'));

console.log('sumaArray:', sumaArray([1, 2, 3, 4]));
console.log('promedioArray:', promedioArray([2, 4, 6, 8]));
console.log('ordenarAscendente:', ordenarAscendente([5, 2, 8, 1]));
console.log('mayoresQue:', mayoresQue([1, 5, 8, 3], 4));
console.log('unirArrays:', unirArrays([1, 2], [3, 4]));
console.log('maximoArray:', maximoArray([1, 9, 3, 7]));
console.log('minimoArray:', minimoArray([1, 9, 3, 7]));
console.log('contarElemento:', contarElemento([1, 2, 2, 3, 2], 2));
console.log('sinDuplicados:', sinDuplicados([1, 2, 2, 3, 1]));
console.log('invertirArray:', invertirArray([1, 2, 3, 4]));

console.log('obtenerNombre:', obtenerNombre({ nombre: 'Juan' }));
console.log('actualizarEdad:', actualizarEdad({ edad: 20 }, 30));
console.log('agregarPropiedad:', agregarPropiedad({ a: 1 }, 'nuevo'));
console.log('eliminarPropiedad:', eliminarPropiedad({ a: 1, b: 2 }, 'a'));
console.log('cantidadPropiedades:', cantidadPropiedades({ a: 1, b: 2, c: 3 }));
console.log('tienePropiedad:', tienePropiedad({ a: 1, b: 2 }, 'b'));
console.log('valoresPropiedades:', valoresPropiedades({ a: 1, b: 2 }));
console.log('objetosIguales:', objetosIguales({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log('copiarObjeto:', copiarObjeto({ a: 1, b: 2 }));
console.log('unirObjetos:', unirObjetos({ a: 1, b: 2 }, { b: 3, c: 4 }));
