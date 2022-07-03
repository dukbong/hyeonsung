// interface의 경우 타입체크를 위해 사용되며, 변수, 함수, 클래스에 사용할 수 있다.

interface Todo{ // 인터페이스로 변수 정의
    id : number;
    content : string;
    completed : boolean;
}

let todo: Todo; // 변수 todo의 타입으로 Todo 인터페이스를 선언

todo = { // 변수 todo는 Todo의 인터페이스를 준수 하여야한다.
    id : 1,
    content : "typescript",
    completed : false,
};

//===========================================================

interface Todo2 {
    id : number;
    content : string;
    completed : boolean;
}

let todos:Todo2[] = [];

function addTodo(todo:Todo){ // 파라미터 todo의 타입을 Todo로 선언
    todos = [...todos, todo];
}

const newTodo: Todo = {id : 1, content : "typescript", completed : false};
addTodo(newTodo);
console.log(todos);

//===========================================================

interface SquareFunc{ // 함수 인터페이스 정의
    (num:number):number;
}

const squareFunc:SquareFunc = function(num:number){
    return num * num;
}

console.log(squareFunc(10)); // 100

//===========================================================

interface ITodo{
    id : number;
    content : string;
    completed : boolean;
}

class CTodo implements ITodo{ // CTodo 클래스는 ITodo 인터페이스를 구현하여야 한다.
    constructor(
        public id : number,
        public content : string,
        public completed : boolean,
    ){}
}

const ctodo = new CTodo(1,"typescript",false);

console.log(ctodo);

//===========================================================

interface IPerson {
    name : string;
    sayHello(): void;
}

class Person2 implements IPerson{
    constructor(
        public name : string,
    ){}

    sayHello(){
        console.log(`Hello ${this.name}`);
    }
}

function greeter(person:IPerson):void {
    person.sayHello();
}
const me = new Person2("Jang");
greeter(me); // Hello Jang

//===========================================================

//Duck typing >> 인터페이스를 구현했다는 것만이 타입 체크를 통과하는 유일한 방법은 아니다.
            //>> 타입체크시 중요한 것은 값을 실제로 가지고 있는것이다.

interface IDuck { // 1
    quack(): void;
}
// 인터페이스 IDuck은 quack 메소드를 정의한다.

class MallardDuck implements IDuck{ // 3
    quack(){
        console.log("Quack!");
    }
}
// 클래스 MallardDuck은 인터페이스 IDuck을 구현한다.

class RedheadDuck { // 4
    quack(){
        console.log("q~uack!");
    }
}
// 클래스 RedheadDuck은 인터페이스 IDuck을 구현하지 않지만 quack 메소드를 가지고 있다.

function makeNoise(duck:IDuck):void{  // 2
    duck.quack();
}
// makeNoise 함수는 인터페이스 IDuck을 구현한 클래스의 인스턴스 duck을 인자로 전달받는다.

makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack! // 5
// makeNoise 함수에 인터페이스 IDuck을 구현하지 않은 RedheadDuck의 인스턴스를 인자로 전달하여도 에러 없이 처리된다.

// ⭐TypeScript는 해당 인터페이스에서 정의한 프로퍼티나 메소드를 가지고 있다면
// ⭐그 인터페이스를 구현한것으로 인정한다.
// ⭐이것을 덕 타이핑 또는 구조적 타이핑이라고 한다. 

//===========================================================

interface Iperson3{
    name : string;
}

function sayHello2(person3:Iperson3) : void{
    console.log(`Hello ${person3.name}`);
}

const mme = {name : "jang", age : 30};
// 변수 mme는 인터페이스 Iperson3와 일치하지 않는다.
// 하지만 Iperson3의 name 프로퍼티를 가지고 있기 때문에
// 인터페이스에 부합한것으로 인정한다.
sayHello2(mme); // Hello jang

//===========================================================

//선택적 프로퍼티

interface UserInfo{
    username : string;
    password : string;
    age?     : number; 
    address ?: string;
    // 프로퍼티명 뒤에 ?를 붙이면 생략하더라도 에러가 발생하지 않는다.
}

const userInfo:UserInfo = {
    username : "TSgood@gmail.com",
    password : "123456",
}

console.log(userInfo);

//===========================================================

//인터페이스 상속
// extends를 사용하여 인터페이스 또는 클래스를 상속받을 수 있다.

interface Person4{
    name : string;
    age ?: number;
}

interface Student extends Person4{
    grade : number;
}

const student:Student = {
    name : "jang",
    age  : 30, // 생략가능
    grade : 2,
}

//===========================================================

interface Person5{
    name : string;
    age ?: number;
}
interface Developer{
    skills : string[];
}
interface WebDeveloper extends Person5, Developer {}

const webDeveloper:WebDeveloper = {
    name : "jang",
    age  : 30,
    skills : ["javascript","typescript","C"],
}

//===========================================================

class Person6{
    constructor(
        public name : string,
        public age  : number,
    ){}
}

interface Developer2 extends Person6{
    skills : string[];
}

const developer:Developer2 = {
    name : "jang",
    age  : 30,
    skills : ["Javascript", "Typescript", "C"],
}