"use strict";
// ⭐타입 앨리어스는 인터페이스와 마찬가지로 타입으로 사용할 수 있다.
// 빈 객체를 Person7 타입으로 지정
const person7 = {};
person7.name = "Jang";
person7.age = 20;
console.log(person7);
// const t: Tuple = ["",""] << Error!
const t = ["", false];
//⭐인터페이스는 extends 또는 implements가 될 수 있지만
//⭐타입 앨리어스는 둘다 불가능하다.
//⭐즉!! 상속을 통해 확장이 필요하면 Interface(인터페이스)를 사용한다.
//⭐     인터페이스로 표현할 수 없거나 유니온 또는 튜플을 사용해야 한다면 타입 앨리어스를 사용한다.
