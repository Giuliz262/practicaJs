//Escribe una función llamada "esMayorEdad" que reciba una edad como parámetro y devuelva true si la edad es mayor o igual a 18, y false en caso contrario.

function esMayorEdad(edad) {
    return edad >= 18;
  }
  console.log(esMayorEdad(20));
  

//Crea una función llamada "calcularAreaRectangulo" que tome dos parámetros: base y altura. La función debe calcular y devolver el área del rectángulo utilizando la fórmula área = base * altura.

function calcularAreaRectangulo(base, altura) {
  return base * altura;
}
console.log(calcularAreaRectangulo(5, 8));


//Crea una función llamada "generarNumeroAleatorio" que no tome parámetros y devuelva un número entero aleatorio entre 1 y 10.
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
  }
  console.log(generarNumeroAleatorio());

  
//Implementa una función llamada "esPalindromo" que reciba una cadena como parámetro y devuelva true si la cadena es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), y false en caso contrario. Por ejemplo, para la cadena "radar" la función debería devolver true.

function esPalindromo(cadena) {
    const cadenaReversa = cadena.split('').reverse().join('');
    return cadena === cadenaReversa;
  }
  console.log(esPalindromo("radar"));


  
 
  