"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}
const person = new Person("Lee");
person.walk(); // Lee is walking
//=================================================
class Foo {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const foo = new Foo("x", "y", "z");
console.log(foo.x);
//public 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 가능
// console.log(foo.y); //Error 발생!
// protected 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할수 없다.
// console.log(foo.z); // Error 발생!
// private 접근제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할수 없다.
//=================================================
class Bar extends Foo {
    constructor(x, y, z) {
        super(x, y, z);
        console.log(this.x); // public은 자식 클래스 내부에서 참조가능
        console.log(this.y); // protected는 자식 클래스 내부에서 참조가능
        // console.log(this.z); // private는 자식 클래스에서 참조 불가능
    }
}
//=================================================
class Foo2 {
    constructor(x) {
        this.x = x;
    }
}
const foo2 = new Foo2("hello");
console.log("foo2 : ", foo2);
console.log("foo2.x : ", foo2.x);
class Bar2 {
    constructor(x) {
        this.x = x;
    }
}
const bar2 = new Bar2("hello");
console.log("bar2 : ", bar2); // {x : hello}
// console.log(bar2.x); // x는 private 제한자이기 때문에 클래스 외부에서 참조 불가능
//=================================================
class Foo3 {
    constructor(x) { 
        console.log(x);
    }
}
const foo3 = new Foo3("hello");
console.log("foo3 : ", foo3);
