const removeFromArray = function(array, ...args) {
    let answer = [];
    array.forEach((item) => {
        if (!args.includes(item)) answer.push(item);
    });
    return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
