"use strict";
// interface의 경우 타입체크를 위해 사용되며, 변수, 함수, 클래스에 사용할 수 있다.
let todo; // 변수 todo의 타입으로 Todo 인터페이스를 선언
todo = {
    id: 1,
    content: "typescript",
    completed: false,
};
let todos = [];
function addTodo(todo) {
    todos = [...todos, todo];
}
const newTodo = { id: 1, content: "typescript", completed: false };
addTodo(newTodo);
console.log("내가 궁금한 부분", todos);
const squareFunc = function (num) {
    return num * num;
};
console.log(squareFunc(10)); // 100
class CTodo {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}
const ctodo = new CTodo(1, "typescript", false);
console.log(ctodo);
class Person2 {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
function greeter(person) {
    person.sayHello();
}
const me = new Person2("Jang");
greeter(me); // Hello Jang
// 인터페이스 IDuck은 quack 메소드를 정의한다.
class MallardDuck {
    quack() {
        console.log("Quack!");
    }
}
// 클래스 MallardDuck은 인터페이스 IDuck을 구현한다.
class RedheadDuck {
    quack() {
        console.log("q~uack!");
    }
}
// 클래스 RedheadDuck은 인터페이스 IDuck을 구현하지 않지만 quack 메소드를 가지고 있다.
function makeNoise(duck) {
    duck.quack();
}
// makeNoise 함수는 인터페이스 IDuck을 구현한 클래스의 인스턴스 duck을 인자로 전달받는다.
makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack! // 5
function sayHello2(person3) {
    console.log(`Hello ${person3.name}`);
}
const mme = { name: "jang", age: 30 };
// 변수 mme는 인터페이스 Iperson3와 일치하지 않는다.
// 하지만 Iperson3의 name 프로퍼티를 가지고 있기 때문에
// 인터페이스에 부합한것으로 인정한다.
sayHello2(mme); // Hello jang
const userInfo = {
    username: "TSgood@gmail.com",
    password: "123456",
};
console.log(userInfo);
const student = {
    name: "jang",
    age: 30,
    grade: 2,
};
const webDeveloper = {
    name: "jang",
    age: 30,
    skills: ["javascript", "typescript", "C"],
};
//===========================================================
class Person6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const developer = {
    name: "jang",
    age: 30,
    skills: ["Javascript", "Typescript", "C"],
};
