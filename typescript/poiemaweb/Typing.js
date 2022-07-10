// 함수 선언식
function multiply1(x, y) {
    return x * y;
}
// 함수표현식
var multiply2 = function (x, y) { return x * y; };
console.log(multiply1(10, 2));
console.log(multiply2(10, 3));
//=========================================================
// boolean
var isDone = false;
// null
var n = null;
// undefined
var u = undefined;
// number
var decimal = 6;
var hex = 0xf00d; // 16진수
var binary = 10;
var octal = 484;
// string
var color = "blue";
color = "red";
var myName = "jang";
var greeting = "hello, my name is ".concat(myName, ".");
// object
var obj = {};
// array
var list1 = [1, "two", true, {}];
var list2 = [1, 2, 3];
var list3 = [1, 2, 3]; // 제네릭 배열 타입
// tuple : 고정된 요소수 만큼의 타입을 미리 선언후 배열로 표현
var tuple;
tuple = ["hello", 10];
// tuple = [10,"hello"] // error
// tuple = ["hello", 10, "jang", 4] // error
// tuple.push(true); // error
// any : 모든값을 수용한다.
var notSure = 4;
notSure = "hello~ typescript!";
notSure = false;
// void : 일반적으로 함수에서 반환값이 없을 경우 사용
function warnUser() {
    console.log("THis is my warning message");
}
// never : 결코 발생하지 않는 값
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
