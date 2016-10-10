


for(i=0; i<3; i++){
	var opcion1=prompt("elije piedra , papel o tijera");
    var opcion2=prompt("elije piedra , papel o tijera");
if((opcion1==="tijera" && opcion2==="piedra")|| (opcion1==="piedra" && opcion2==="tijera") ){
	alert("Gana piedra!!");
}else if((opcion1==="piedra" && opcion2==="papel")|| (opcion1==="papel" && opcion2==="piedra")){
      alert("Gana papel!!");
} else if((opcion1==="papel" && opcion2==="tijera")||(opcion1==="tijera" && opcion2==="papel")){
	   alert("Gana tijera!!");
}else if((opcion1==="papel" && opcion2==="papel")||(opcion1==="tijera" && opcion2==="tijera")|| (opcion1==="piedra" && opcion2==="piedra")){
	   alert("Es un empate");

} else{
	alert("Comprueba que escribiste correctamente!");
}
}


/*pseudocodigo
for(i=0; i<3; i++)
Escribe variable opcion1
lee variable  opcion1
Escribe variable opcion2
lee variable  opcion2
si 
  ((opcion1==="tijera" && opcion2==="piedra")|| (opcion1==="piedra" && opcion2==="tijera") ) 
entonces 
  imprime Gana piedra!!
si no 
   ((opcion1==="piedra" && opcion2==="papel")|| (opcion1==="papel" && opcion2==="piedra"))
entonces 
  imprime Gana papel!!
si no 
    ((opcion1==="papel" && opcion2==="tijera")||(opcion1==="tijera" && opcion2==="papel"))
entonces 
   imprime Gana tijera!!
si no 
   ((opcion1==="papel" && opcion2==="papel")||(opcion1==="tijera" && opcion2==="tijera")|| (opcion1==="piedra" && opcion2==="piedra"))
imprime Gana tijera!!
entonces 
  imprime es un empate!!
fin proceso.
*/
