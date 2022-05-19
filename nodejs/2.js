const value = require('./var');
//require은 모듈을 불러올때 사용하는 함수이다.

function checkOddOrEven(number) {
    if (number % 2) {
        return value.odd;
    } else {
        return value.even;
    }
}

module.exports = checkOddOrEven;