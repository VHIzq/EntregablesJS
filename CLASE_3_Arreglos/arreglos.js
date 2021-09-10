/*
Versión programación funcional sin DOM
function dinero(mon1, mon2, mon3){
  const listaDinero = [mon1, mon2, mon3];
  listaDinero.sort(); 
  listaDinero.reverse();
  return listaDinero[0];
}
console.log(dinero(123, 980, 500)); */

//Versión funcjonal con DOM

/* function dinero(num1, num2, num3){
  num1 = prompt("Introduce la primera cantidad:");
  num2 = prompt("Introduce la segunda cantidad:");
  num3 = prompt("Introduce la tercera cantidad:");
  let listaCantidades = [num1, num2, num3];
  listaCantidades.sort(function(a, b){return a - b});
  listaCantidades.reverse();
  let mayor = listaCantidades[0];
  document.write("El mayor numero es " + mayor);
}
dinero(); */



/* const carrera = prompt("Qué estudiaste?") 
if(carrera.toLowerCase() == "qfb" || "quimico" || "farmacologo");{
  document.write("Wow, yo estudié lo mismo!");
} */
/* 


Cálculo del área de un triángulo isóceles

function areaTriangulo(altura, base){
  altura = prompt("Introduce la altura:");
  base = prompt("Introduce la base:");
  const calculo = (altura * base) / 2;
  document.write(`El área del triangulo es: ${calculo}`);
}
areaTriangulo();
 */
