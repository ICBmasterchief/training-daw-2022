// Declarar 2 variables con número e imprimir por consola (mediante console.log()) el valor de:
// Suma
// Resta
// Multiplicación
// División


// define variables
let x = 5
let y = 2

function suma (n1 , n2){
    return n1 + n2
}
function resta (n1 , n2){
    return n1 - n2
}
function multip (n1 , n2){
    return n1 * n2
}
function divid (n1 , n2){
    return n1 / n2
}

// print sum, substract, multiply and divide
console.log("Suma de " + x + " + " + y + " = " + suma(x,y))
console.log("Resta de " + x + " - " + y + " = " + resta(x,y))
console.log("Multiplicación de " + x + " * " + y + " = " + multip(x,y))
console.log("División de " + x + " / " + y + " = " + divid(x,y))