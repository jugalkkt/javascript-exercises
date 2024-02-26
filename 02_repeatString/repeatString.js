const repeatString = function(str, numTimes) {
    let temp = str;
    for (let i = 0; i < numTimes - 1; i++){
        str += temp;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
