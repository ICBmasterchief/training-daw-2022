function evenNumbers() {
    let evens = [];
    for (let i = 0; i < 99; i++){
        if(i % 2 === 0){
            evens.push(i);
        }
    }
    console.log(evens);
}

evenNumbers();
// expected output 2,4,6,8,10......98 