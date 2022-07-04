// ⭐타입 앨리어스는 인터페이스와 마찬가지로 타입으로 사용할 수 있다.

type Person7 ={
    name : string,
    age ?: number,
}

// 빈 객체를 Person7 타입으로 지정
const person7 = {} as Person7; 
person7.name = "Jang";
person7.age = 20;
console.log(person7);
// person7.address = "Seoul" << Error!

//=========================================================

//⭐ 타입 앨리어스는 원시값, 유니온 타입, 튜플등도 타입으로 지정할 수 있다.

// 문자열 리터럴로 타입 지정
type Str = "Jang";

// 유니온 타입으로 타입 지정
type Union = string | null;

// 문자열 유니온 타입으로 타입 지정
type Name = "Jang" | "Choi";

// 숫자 리터럴 유니온 타입으로 타입 지정
type Num = 1 | 2 | 3 | 4| 5;

// 객체 리터럴 유니온 타입으로 타입 지정
type Obj = {a:1} | {b:2};

// 함수 유니온 타입으로 타입 지정
type Func = (() => string) | (() => void);

// 튜플로 타입 지정
type Tuple = [string, boolean];
// const t: Tuple = ["",""] << Error!
const t: Tuple = ["",false];

//⭐인터페이스는 extends 또는 implements가 될 수 있지만
//⭐타입 앨리어스는 둘다 불가능하다.
//⭐즉!! 상속을 통해 확장이 필요하면 Interface(인터페이스)를 사용한다.
//⭐     인터페이스로 표현할 수 없거나 유니온 또는 튜플을 사용해야 한다면 타입 앨리어스를 사용한다.