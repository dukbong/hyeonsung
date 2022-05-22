const value = require('./1');
//require은 모듈을 불러올때 사용하는 함수이다.

function checkOddOrEven(number) {
    if (number % 2) {
        return value.홀수;
    } else {
        return value.짝수;
    }
}

module.exports = checkOddOrEven;