
	function saltarLinea(){
		document.write("<br>", "<hr>", "<hr>")
	}

	function imprimir(frase){
		document.write(frase);
		saltarLinea();
	}

	//3
	var numeroMiembros = parseInt(prompt("ingrese el numero de los miembros de su familia")
);
	var contador = 1
	var totalEdades = 0

	while (contador <= numeroMiembros){
		edad = parseInt(prompt("ingrese la edad del familiar."));
		totalEdades = totalEdades + edad;
		contador++;

	}

	mediaEdades = totalEdades / numeroMiembros

imprimir("media de edades " + mediaEdades);
imprimir("fin")
