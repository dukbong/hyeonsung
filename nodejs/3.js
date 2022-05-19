const value = require("./var");
const checkNumber = require("./func");

function checkStringOddOrEven(str) {
    if (str.length % 2){
        return value.odd;
    } else {
        return value.even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));