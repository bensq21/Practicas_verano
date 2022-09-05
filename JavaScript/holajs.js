function compruebaCad(cadena){
    do {
        if(cadena.length==0){
            err = true;
            alert("La cadena debe contener algún caracter.")
            cadena = prompt("Introduce una cadena de palabras.").trim();
    
        } else if(cadena.match(".*[0-9].*")){
            err = true;
            alert("La cadena no debe contener números.")
            cadena = prompt("Introduce una cadena de palabras.").trim();

        } else{
            err = false;
            return cadena;

        };

    } while (err == true);
    
};

function reverseCad(cadena){
    return cadena.split("").reverse().join("");

};

var frs = prompt("Introduce una cadena de palabras.").replaceAll(" ", "").toUpperCase();
frs = compruebaCad(frs);
if (frs.match(reverseCad(frs))){
    alert("Esta cadena es palíndroma");

} else{
    alert("Esta cadena no es palíndroma");

};

alert("." + frs + ".");
