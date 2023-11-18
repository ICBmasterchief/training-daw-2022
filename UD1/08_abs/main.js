const assert = require('assert').strict;

function abs(value) {
    if (value < 0){
       return value * -1;
    } else {
        return value;
    }
}

assert.strictEqual(abs(4), 4);
console.log(abs(4));
assert.strictEqual(abs(-4), 4);
console.log(abs(-4));
assert.strictEqual(abs(0), 0);
console.log(abs(0));