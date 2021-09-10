//Ciclos, es empleado para ejecutar una n cantidad de veces un bloque de código.

/* function saludosNombre(nombres){
  nombres = ["Magali", "Carlos", "Rodrigo", "Lau"];
  for(let i = 0; i < nombres.length; i++){
    console.log("Hola " + nombres[i]);
  }
} 
saludosNombre();
 */
/* 
const frutas = ["manzana", "pera", "fresa", "mango"];
for(let i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
} */

//Escribe una funcion que convierta la tempereatura grados celcius a Kelvin

function convertidorTemperatura(temperaturaCelcius){
  temperaturaCelcius = parseInt(prompt("Ingrese la temperatura a convertir"));
  let temperaturaKelvin = temperaturaCelcius + 273;
  document.write(`La temperatura solicita es ${temperaturaKelvin} K`);
}
convertidorTemperatura();

