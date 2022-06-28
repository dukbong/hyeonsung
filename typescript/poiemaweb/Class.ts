class Person{
    name:string; // class property를 사전에 선언
    constructor(name:string){ // 값 할당
        this.name = name;
    }

    walk(){
        console.log(`${this.name} is walking`);
    }
}

const person = new Person("Lee");
person.walk(); // Lee is walking

//=================================================

class Foo { // 접근 제한자 선언
    public x:string;
    protected y:string;
    private z:string;

    constructor(x:string, y:string, z:string){
        this.x=x;
        this.y=y;
        this.z=z;
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

class Bar extends Foo{
    constructor(x:string,y:string,z:string){
        super(x,y,z);
        console.log(this.x); // public은 자식 클래스 내부에서 참조가능
        console.log(this.y); // protected는 자식 클래스 내부에서 참조가능
        // console.log(this.z); // private는 자식 클래스에서 참조 불가능
    }
}

//=================================================

class Foo2{
    constructor(public x:string){}
}

const foo2 = new Foo2("hello");
console.log(foo2);
console.log(foo.x);

class Bar2{
    constructor(private x:string){}
}
const bar2 = new Bar2("hello");
console.log(bar2); // {x : hello}
// console.log(bar2.x); // x는 private 제한자이기 때문에 클래스 외부에서 참조 불가능