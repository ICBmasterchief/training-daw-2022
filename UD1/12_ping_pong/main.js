function pingPong() {

    //let numbers = [];
    let isPing = true;
    let pingPong = "";

    for (let i = 1; i <= 20; i++){
        if(i % 5 === 0){
            if(isPing){
                pingPong = " PING";
                isPing = false;
            } else {
                pingPong = " PONG";
                isPing = true;
            }
            //numbers.push(i+pingPong);
            console.log(i+pingPong);
        } else {
            //numbers.push(i);
            console.log(i);
        }
    }

    //console.log(numbers);
}

pingPong();
// expected output
// 1
// 2
// 3
// 4
// 5 PING
// 6
// 7
// 8
// 9
// 10 PONG
// 11
// 12
// 13
// 14
// 15 PING
// 16
// 17
// 18
// 19
// 20 PONG