// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  pos= array.length - 1;
  return array[pos];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
var array2=[];

for (var i=0; i < array.length; i++) {
array2[i]=array[i] + 1;
}
return array2;  
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;

  //array[array.length] = elemento;
  // return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;  
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase="";

  for (i=0; i<palabras.length-1; i++){
     frase=frase + palabras[i] + " ";
  }
  frase=frase + palabras[i];
  return frase;

  //return palabras.join(' '); ---> Asi estaba resuelto pero el mio paso igual. Comento 
  //                                para recordar el uso del "Join" 
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var i=0;

  while(i<array.length){
    if (array[i]===elemento){
      return true;
    }
    i++;
  }
  return false;

     // for(var i = 0; i < array.length; i++) {
     //  if(array[i] === elemento) {
     //    return true;
     //  }
     // }
     // return false;     -------------> Usando For (otra estructura)
     //}
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var suma=0;

  for(var i = 0; i < numeros.length; i++){
    suma = suma + numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio=0;
  var i=0;

  while(i<resultadosTest.length){
    promedio= promedio + resultadosTest[i];
    i++
  }
  promedio=promedio/resultadosTest.length;
  return promedio;

  //return agregarNumeros(resultadosTest) / resultadosTest.length; 
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numgrande=0;

  for(var i=0; i<numeros.length; i++){
    if (numeros[i]>numgrande){
      numgrande= numeros[i];
    }
  }
  return numgrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var producto=1;

  if (arguments.length<1){
    return 0;
  }

  for (var i=0; i<arguments.length; i++){    
     producto=producto * arguments[i];
    
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
    
  var contador = 0;

  for (var i=0; i<arreglo.length; i++){
    if (arreglo[i]>19){
      contador=contador+1;
    }
  }
  return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí     
  
    if(numeroDeDia===1 || numeroDeDia===7){
      return "Es fin de semana";
    }else {
      return "Es dia Laboral";
    }  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  let num= n.toString();
  
  if (num[0]==="9"){           // if (num.charAt(0)==="9")
    return true;
  }else{ 
  return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  var igual=arreglo[0];

  for( var i=0; i<arreglo.length; i++){
    if (igual!=arreglo[i]){
       return false;
    }
  }
  return true;

  //for (var i =0 ; i < arreglo.length - 1; i++) {
  //  if(arreglo[i] !== arreglo[i+1]){
  //    return false
  //  }
  //}
  //return true       ------------------> Asi se ahorra una comparacion de mas y una variable mas!
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var array2=[];
  
  for (var i=0; i<array.length; i++){
    if (array[i]==="Enero"|| array[i]==="Marzo" || array[i]==="Noviembre" ){
      array2.push(array[i]);
    }    
  }
  
  if(array2.length<3){
    return "No se encontraron los meses pedidos";
  }else {
    return array2;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var array2=[];

  for( var i=0; i<array.length; i++){
    if (array[i]>100){
      array2.push(array[i]);
    }
  }
  return array2;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array2=[];
  var sum=numero;

  for (var i=0; i<10 ; i++){
    if (sum===i){ 
       break;           // da mal el test si sumo antes de comparar, eso no deberia pasar
    }else {             // sino en la primera pasada compara sin haber sumado para el break.
      sum= sum+2;   
    }

    array2.push(sum);

    if(sum===i){
      return "Se interrumpió la ejecución";
    }
  }
  return array2;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
  var sum=numero;
  var array=[];

  for(var i=0; i<10 ; i++){
    if(i==5) {
      continue;
    }else {
      sum=sum+2;
      array.push(sum);
    }      
  }
  return array;  

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
