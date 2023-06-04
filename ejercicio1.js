//1) Crear un programa que pida al usuario que ingrese un número y le devuelva un mensaje indicando si el número es positivo, negativo o si es 0.

const numero = parseInt(prompt("Por favor ingrese un número: "));
function determinarSigno(numero) {
    if (numero > 0) {
      return "El número ingresado es positivo.";
    } else if (numero < 0) {
      return "El número ingresado es negativo.";
    } else {
      return "El número ingresado es 0";
    }
  }
  
  
  const mensaje = determinarSigno(numero);
  console.log(mensaje);


//2) Crear un programa que pida un numero al usuario y le devuelva un mensaje diciendo si el número es primo o no.
const nro = parseInt(prompt("Ingrese un número por favor: "));
function esPrimo(nro) {
    if (nro <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(nro); i++) {
      if (nro % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  const msj = esPrimo(nro) ? "El número ingresado es primo" : "El número no es primo";
  console.log(msj);


//3) Crear un programa que convierta la temperatura de grados Celsius a Faranheit y viceversa. El usuario debería ingresar la temperatura y a que unidad la quiere convertir.
const temperatura = parseInt(prompt("Ingrese la temperatura actual: "));
const conver = parseInt(prompt("Seleccione a qué unidad desea convertir: 1-Celsius, 2-Faranheit"));

function convertirTemperatura(temperatura, conver) {
let temperaturaConver;
    if (conver === 1) {
        
        temperaturaConver = (temperatura - 32) * (5 / 9);
        console.log("Temperatura convertida a Celsius:", temperaturaConver.toFixed(2));
      } else if (conver === 2) {
       
        temperaturaConver = (temperatura * (9 / 5)) + 32;
        console.log("Temperatura convertida a Fahrenheit:", temperaturaConver.toFixed(2));
      } else {
        console.log("Opción inválida. Debe seleccionar la opción 1 para Celsius o 2 para Fahrenheit antes de poder realizar una conversión");
      }
    }

//4) Crear un programa para calcular el total de una compra. Para ello se tiene que pedir al usuario que ingrese el precio de cada producto y cuando se le pide que ingrese la palabra "total" devolverle el total de la compra.
let productos = [];
let precio;

do {
  precio = prompt("Ingrese de a uno los precios de sus productos (escriba 'total' para finalizar): ");
  if (precio !== "total") {
    productos.push(Number(precio));
  }
} while (precio !== "total");


function valorTotal(productos){
  let totalPrecio=0;
  for (i=0;i<productos.length;i++){
    totalPrecio=totalPrecio+productos[i];
  }
  return "El total a pagar es de: "+totalPrecio
}
console.log(valorTotal(productos));
