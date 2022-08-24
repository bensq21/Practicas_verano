function compruebaNum(numero){
    do {
        if(numero%1==0){
            err=false;
            return numero;
        } else{
            err=true;
            alert("Inserta un número entero, sin decimales.");
            var numero = prompt("Inserta un número");
        }

    } while (err==true);
}

function compruebaPar(numero){
        if(numero%2==0){
            alert("El número " + numero + " es par.");
            return true;
        } else{
            alert("El número " + numero + " es impar.");
            return false;
        }
}

var num = prompt("Inserta un número");
num = compruebaNum(num);
compruebaPar(num);

alert("Finalizado: " + num);

