const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {

    let minutes = parseInt(value / 60);
    let hours = parseInt(minutes / 60);
    if (hours > 0){
        minutes -= (60 * hours);
    }
    if (minutes < 10){
        minutes = "0" + String(minutes);
    }
    let seconds = value % 60;
    if (seconds < 10){
        seconds = "0" + String(seconds);
    }

    console.log(hours+":"+minutes+":"+seconds);
    return String(hours+":"+minutes+":"+seconds);

}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:00:00");
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:02:00");
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:02:05");