let Username :string = "kim";

let UserArray :string[] = ["kim", "park"];

let UserObject_1 :{name : string} = {name : "kim"};
let UserObject_2 :{name? : string} = {};
// 1번은 꼭 name : "문자" 가 있어야한다.
// 2번 name ? : string은 name의 value값이 없으면 적지 않아도 된다는 뜻이다.

let test :string | number = "kim";
test = 1;
// 문자 또는 숫자가 들어갈 수 있다.

type new_myType = string[] | number;

let test_2 :new_myType = ["kim"];
test_2 = 1;
// 타입 지정을 변수로 만들어 수 있다.

function Test_Func(x : number) :number{ // return값 타입 지정
                //파라미터 타입 지정 
    return x * 2;
}

type Member = [number, boolean];
let test_3:Member = [123, true];

type Member_2 = {
    [key:string] : string,
    //Object를 만들때 모든 key의 value의 타입은 string이다.
}
let test_4:Member_2 = {name : "kim", age : "123"};

class User{
    name : string;
    constructor(name : string){
        this.name = name;
    }
}