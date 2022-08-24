var dias = ["        Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var res = prompt("Elige each ó in");

if (res.match("each")) {
    alert("Eligió un bucle for each");
    dias.forEach(element => {
        element = element.trim() + " each sum" + 1;
        alert(element);
    });

} else if(res.match("in")){
    alert("Eligió un bucle for in");
    for (element in dias) {
        dias[element].concat(" in concatenado");//por algun motivo no consigo que muestre el texto que se está concatenando
        alert(dias[element]);

    }
} else {
    alert("Eleccion incorrecta.");
}