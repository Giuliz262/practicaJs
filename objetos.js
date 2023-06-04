//Crea un objeto llamado "producto" con las propiedades "nombre", "precio" y "cantidad". 
//Luego, escribe una función llamada "calcularTotal" que tome un objeto producto como parámetro y devuelva el total a pagar (precio * cantidad).
const producto = {
    nombre: "Producto A",
    precio: 100,
    cantidad: 2
  };
  
  console.log(producto);


//Implementa un objeto llamado "persona" con las propiedades "nombre", "edad" y "profesion".
//A continuación, escribe una función llamada "presentarPersona" que tome un objeto persona como parámetro y muestre en la consola una presentación de la persona.
function calcularTotal(producto) {
    return producto.precio * producto.cantidad;
  }
  console.log(calcularTotal(producto));

  const persona = {
    nombre: "Federico",
    edad: 18,
    profesion: "Programador"
  };
  console.log(persona);

  function presentarPersona(persona) {
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Edad: ${persona.edad}`);
    console.log(`Profesión: ${persona.profesion}`);
  }
  presentarPersona(persona);

  
//Crea una función llamada "esMayorEdad" que reciba un objeto persona como parámetro y devuelva true si la persona es mayor de edad (edad mayor o igual a 18), y false en caso contrario.
function esMayorEdad(persona) {
    return persona.edad >= 18;
  }
  
  console.log(esMayorEdad(persona));