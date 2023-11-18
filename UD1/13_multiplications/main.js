function printMultiplicationTables() {
    let matrix = ["    "];
    let content = [];
    for (let i = 1; i <= 10; i++){
        content.push(i);
        matrix.push(tableFormat(i));
    }
    matrix = [String(matrix)];
    for (let column of content){
        let cont = [tableFormat(column)]
        for (let row of content){
            let result = column * row;
            cont.push(tableFormat(result));        
        }
        matrix.push(String(cont));
    }
    console.log(matrix);
}

function tableFormat(val){
    let result = "";
    if (val >= 100){
        result = " "+String(val);
    } else if (val >= 10){
        result = "  "+String(val);
    } else {
        result = "   "+String(val);
    }
    return result;
}

printMultiplicationTables()
// expected output
//     1   2   3   ...
// 1   1   2   3   ...
// 2   2   4   6   ...
// 3   3   6   9   ...
// 4   4   8   12  ...
// 5   5   10  15  ...
// 6   6   12  18  ...
// 7   7   14  21  ...
// 8   8   16  24  ...
// 9   9   18  27  ...
// 10  10  20  30  ...
