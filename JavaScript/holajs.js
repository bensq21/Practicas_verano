var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var dni = [0, ""];

do {
    var err = false;
    dni[0] = prompt("Indique los números del dni");
    dni[1] = prompt("Indique la letra del dni");

    if ( 0 >= dni[0] || dni[0] > 99999999 || dni[1].length!=1 ) {
        alert("El formato es incorrecto");
        err = true;

    } else if ( letras[ dni[0] %23 ] == dni[1] ){
        alert("El dni especificado es correcto");
    } else{
        alert("El dni especificado es incorrecto");
    }
    
} while (err);

