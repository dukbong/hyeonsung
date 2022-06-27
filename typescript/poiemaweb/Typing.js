"use strict";
// 함수 선언식
function multiply1(x, y) {
    return x * y;
}
// 함수표현식
const multiply2 = (x, y) => x * y;
console.log(multiply1(10, 2));
console.log(multiply2(10, 3));
//=========================================================
// boolean
let isDone = false;
// null
let n = null;
// undefined
let u = undefined;
// number
let decimal = 6;
let hex = 0xf00d; // 16진수
let binary = 0b1010;
let octal = 0o744;
// string
let color = "blue";
color = "red";
let myName = "jang";
let greeting = `hello, my name is ${myName}.`;
// object
const obj = {};
// array
let list1 = [1, "two", true, {}];
let list2 = [1, 2, 3];
let list3 = [1, 2, 3]; // 제네릭 배열 타입
// tuple : 고정된 요소수 만큼의 타입을 미리 선언후 배열로 표현
let tuple;
tuple = ["hello", 10];
// tuple = [10,"hello"] // error
// tuple = ["hello", 10, "jang", 4] // error
// tuple.push(true); // error
// any : 모든값을 수용한다.
let notSure = 4;
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
