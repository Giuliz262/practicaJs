//Crea una función llamada "obtenerSuma" que reciba un arreglo de números como parámetro y devuelva la suma de todos los elementos del arreglo.
function obtenerSuma(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}

const numerosString = prompt("Ingrese una lista de números separados por comas: ");
const numeros = numerosString.split(",").map(numero => parseInt(numero));

console.log("Suma:", obtenerSuma(numeros));


//Implementa una función llamada "obtenerPares" que tome un arreglo de números como parámetro y devuelva un nuevo arreglo con solo los números pares del arreglo original.
function obtenerPares(arreglo) {
  let pares = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      pares.push(arreglo[i]);
    }
  }
  return pares;
}

const numerosPares = obtenerPares(numeros);
console.log("Pares:", numerosPares);


//Escribe una función llamada "obtenerPromedioPonderado" que reciba dos arreglos: uno con las notas de los estudiantes y otro con los pesos correspondientes. La función debe calcular y devolver el promedio ponderado de las notas.
const notasString = prompt("Ingrese una lista de notas separadas por comas: ");
const pesosString = prompt("Ingrese una lista de pesos separados por comas: ");
function obtenerPromedioPonderado(notas, pesos) {
  if (notas.length !== pesos.length) {
    throw new Error("Los arreglos deben tener la misma longitud.");
  }
  
  let sumaNotas = 0;
  let sumaPesos = 0;
  
  for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i] * pesos[i];
    sumaPesos += pesos[i];
  }
  
  const promedioPonderado = sumaNotas / sumaPesos;
  return promedioPonderado;
}
const notas = notasString.split(",").map(nota => parseFloat(nota));
const pesos = pesosString.split(",").map(peso => parseFloat(peso));

console.log("Promedio ponderado:", obtenerPromedioPonderado(notas, pesos));


//Crea una función llamada "obtenerMaximo" que tome un arreglo de números como parámetro y devuelva el número máximo encontrado en el arreglo.
function obtenerMaximo(arreglo) {
  let maximo = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
      maximo = arreglo[i];
    }
  }
  return maximo;
}

console.log("Máximo:", obtenerMaximo(numeros));








