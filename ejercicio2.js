/*<h4>Ejercicio 2: <br>Declara un arreglo vacío denominado nombres. 
Pide al usuario tres nombres y almacena esos nombres 
como elementos arreglo. A continuación muestra el contenido en un mensaje.*/
var nombres=[];
for(i=0; i<3; i++){
var nombre=prompt("ingresa nombre");
nombres.push(nombre);
}
alert(nombres);


/*pseudocódigo
  Declara arreglo nombres 
  Lee arreglo nombres
  for(i=0; i<3; i++)
    Escribe "nombre"
    Lee nombre
    Introduce var nombre al arreglo nombres
  fin ciclo for
  Imprime nombres



*/