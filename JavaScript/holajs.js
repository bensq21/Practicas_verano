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

function compruebaMayus(cadena){
    if(cadena.match(cadena.toUpperCase())){
        alert("La cadena introducida está en mayúsculas.");

    } else if(cadena.match(cadena.toLowerCase())){
        alert("La cadena introducida está en minúsculas.");

    } else{
        alert("La cadena introducida está formada por mayúsculas y minúsculas.");

    };

}

frs = prompt("Introduce una cadena de palabras.").trim();
frs = compruebaCad(frs);
compruebaMayus(frs);
alert("." + frs + ".");
