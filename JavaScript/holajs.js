/*
var tex = "código";
tex2 = "messages";

var semana = ["lunes ", "martes ", "miercoles ", "jueves ", "viernes ", "sabadoi ", "domingo"];

alert("Esto es un " + tex + " en un archivo .js de bensq");
alert("varios " + tex2 + "...");


semana.forEach(element => {
    alert(element);
});

valores = [true, 5, false, "hola", "adiosssssssss", 2];
if (valores[3].length > valores[4].length) {
    alert(valores[3]);
} else {
    alert(valores[4]);
};
*/

var num1 = 5;
var num2 = 8;

if(num1 < num2) {
  alert("numero1 no es mayor que numero2");
}
if(0 < num2) {
  alert("numero2 es positivo");
}
if(num1 <= 0) {
  alert("numero1 es negativo o distinto de cero");
}
if(++num1 < num2) {
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}