function isAlphaNum(character)
{
    return (/[a-zA-Z]/.test(character) || /[0-9]/.test(character));
}
const palindromes = function (string) {
    let pureString = "";
    for (let character of string){
        if (isAlphaNum(character) && !/[0-9]/.test(character)) character = character.toLowerCase();
        if (isAlphaNum(character)) pureString += character;
    } 
    let reversePureString = ""; 
    for (let i = pureString.length - 1; i > -1; i--) reversePureString += pureString[i];
    return (pureString == reversePureString);
};

// Do not edit below this line
module.exports = palindromes;
