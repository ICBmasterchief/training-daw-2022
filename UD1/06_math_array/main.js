// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {
    let max = 0;
    let min = array[0];
    let sum = 0;

    array.forEach(element => {
        sum += element; 

        if (element > max){
            max = element;
        }

        if (element < min){
            min = element;
        }
    });

    console.log("suma: " + sum);
    console.log("maximo: " + max);
    console.log("minimo: " + min);
    console.log("media: " + sum/array.length);

}



doCalculation([1,2,3,4]);
doCalculation([5,5,5,5]);
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]);