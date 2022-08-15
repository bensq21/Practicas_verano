var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var res = prompt("Elige each ó in");

if (res.match("each")) {
    alert("Eligió un bucle for each");
    dias.forEach(element => {
        alert(element + " each");
    });

} else if(res.match("in")){
    alert("Eligió un bucle for in");
    for (element in dias) {
        alert(dias[element] + " in");

    }
} else {
    alert("Eleccion incorrecta.");
}