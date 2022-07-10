// interface의 경우 타입체크를 위해 사용되며, 변수, 함수, 클래스에 사용할 수 있다.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var todo; // 변수 todo의 타입으로 Todo 인터페이스를 선언
todo = {
    id: 1,
    content: "typescript",
    completed: false,
};
var todos = [];
function addTodo(todo) {
    todos = __spreadArray(__spreadArray([], todos, true), [todo], false);
}
var newTodo = { id: 1, content: "typescript", completed: false };
addTodo(newTodo);
console.log(todos);
var squareFunc = function (num) {
    return num * num;
};
console.log(squareFunc(10)); // 100
var CTodo = /** @class */ (function () {
    function CTodo(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
    return CTodo;
}());
var ctodo = new CTodo(1, "typescript", false);
console.log(ctodo);
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.sayHello = function () {
        console.log("Hello ".concat(this.name));
    };
    return Person2;
}());
function greeter(person) {
    person.sayHello();
}
var me = new Person2("Jang");
greeter(me); // Hello Jang
// 인터페이스 IDuck은 quack 메소드를 정의한다.
var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.quack = function () {
        console.log("Quack!");
    };
    return MallardDuck;
}());
// 클래스 MallardDuck은 인터페이스 IDuck을 구현한다.
var RedheadDuck = /** @class */ (function () {
    function RedheadDuck() {
    }
    RedheadDuck.prototype.quack = function () {
        console.log("q~uack!");
    };
    return RedheadDuck;
}());
// 클래스 RedheadDuck은 인터페이스 IDuck을 구현하지 않지만 quack 메소드를 가지고 있다.
function makeNoise(duck) {
    duck.quack();
}
// makeNoise 함수는 인터페이스 IDuck을 구현한 클래스의 인스턴스 duck을 인자로 전달받는다.
makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack! // 5
function sayHello2(person3) {
    console.log("Hello ".concat(person3.name));
}
var mme = { name: "jang", age: 30 };
// 변수 mme는 인터페이스 Iperson3와 일치하지 않는다.
// 하지만 Iperson3의 name 프로퍼티를 가지고 있기 때문에
// 인터페이스에 부합한것으로 인정한다.
sayHello2(mme); // Hello jang
var userInfo = {
    username: "TSgood@gmail.com",
    password: "123456",
};
console.log(userInfo);
var student = {
    name: "jang",
    age: 30,
    grade: 2,
};
var webDeveloper = {
    name: "jang",
    age: 30,
    skills: ["javascript", "typescript", "C"],
};
//===========================================================
var Person6 = /** @class */ (function () {
    function Person6(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person6;
}());
var developer = {
    name: "jang",
    age: 30,
    skills: ["Javascript", "Typescript", "C"],
};
