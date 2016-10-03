function pintar (caracter, veces){
	var resultado = "";
	for (var i = 1; i <= veces; i++){
		resultado += caracter;
	}
	return resultado;
}

var espacios = 0 , ast = 0, n = 8;
for (var i = 1; i <= n; i++) {
	espacios = n-i;
	ast = i;
	document.write(pintar("&nbsp&nbsp" , espacios));
	document.write(pintar("*" , ast));
	document.write("<br>");
}