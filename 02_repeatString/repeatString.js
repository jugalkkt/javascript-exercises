const repeatString = function(str, numTimes) {
    if (numTimes < 0) return "ERROR"
    let temp = str;
    str = "";
    for (let i = 0; i < numTimes; i++){
        str += temp;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
