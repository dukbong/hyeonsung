const value = require("./1");
const checkNumber = require("./2");

function checkStringOddOrEven(str) {
    if (str.length % 2){
        return value.홀수;
    } else {
        return value.짝수;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));