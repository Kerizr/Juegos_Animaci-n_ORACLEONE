
 	function saltarlinea() {
 		document.write("<br>");
 		document.write("<br><hr>");
 	}

 	function imprimir(frase) {
 		document.write(frase);
 		saltarlinea();
 	}

 	function sorteo (n) {
 		n = Math.round(Math.random()*10);
 		return n 
 	}

 	var numPensado = sorteo()
 	
 	var inteto = 3
 	var contador = 1

 	while(contador <= inteto){
	var numLanzado = parseInt(prompt("ingresé el numero que crees que estoy pensando entre cero o diez"));

 	if (numPensado == numLanzado){
 		alert("acertaste al numero en el inteto " + contador);
 		break;
 	}
 	 else if (numLanzado > 10 || numLanzado < 0){
 	 	alert("Ese numero no está dentro de las opciones, por favor ingresé el numero que crees que estoy pensando entre cero o diez");
 	} 
	else {
 		alert("intentalo de nuevo");
 	}

 	contador++

 	if (numPensado < numLanzado) {
 		alert("Estaba pensando en un numero menor a ese, es tu intento" + contador);
 	} else if (numPensado > numLanzado){
 		alert("Estaba pensando en un numero mayor a ese, es tu intent" + contador);
 	} else {
 		imprimir("Erraste el numero que tenia en mente era" + numPensado);
 	}
 	imprimir("fin");
}

