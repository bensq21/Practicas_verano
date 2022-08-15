var num = prompt("Introduce un numero para factorizar");

for (let index = num-1; index > 0; index--) {
    num = num * index;
}

alert(num);