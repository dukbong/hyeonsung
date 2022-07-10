var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.walk = function () {
        console.log("".concat(this.name, " is walking"));
    };
    return Person;
}());
var person = new Person("Lee");
person.walk(); // Lee is walking
//=================================================
var Foo = /** @class */ (function () {
    function Foo(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Foo;
}());
var foo = new Foo("x", "y", "z");
console.log(foo.x);
//public 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 가능
// console.log(foo.y); //Error 발생!
// protected 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할수 없다.
// console.log(foo.z); // Error 발생!
// private 접근제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할수 없다.
//=================================================
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar(x, y, z) {
        var _this = _super.call(this, x, y, z) || this;
        console.log(_this.x); // public은 자식 클래스 내부에서 참조가능
        console.log(_this.y); // protected는 자식 클래스 내부에서 참조가능
        return _this;
        // console.log(this.z); // private는 자식 클래스에서 참조 불가능
    }
    return Bar;
}(Foo));
//=================================================
var Foo2 = /** @class */ (function () {
    function Foo2(x) {
        this.x = x;
    }
    return Foo2;
}());
var foo2 = new Foo2("hello");
console.log("foo2 : ", foo2);
console.log("foo2.x : ", foo2.x);
var Bar2 = /** @class */ (function () {
    function Bar2(x) {
        this.x = x;
    }
    return Bar2;
}());
var bar2 = new Bar2("hello");
console.log("bar2 : ", bar2); // {x : hello}
// console.log(bar2.x); // x는 private 제한자이기 때문에 클래스 외부에서 참조 불가능
//=================================================
var Foo3 = /** @class */ (function () {
    function Foo3(x) {
        console.log(x);
    }
    return Foo3;
}());
var foo3 = new Foo3("hello");
console.log("foo3 : ", foo3); // foo3 : {}
//=================================================
var Foo4 = /** @class */ (function () {
    function Foo4() {
        this.MAX_LEN = 5;
        this.MSG = "hello";
    }
    Foo4.prototype.log = function () {
        // this.MAX_LEN = 10;
        // this.MSG = "Hi";
        console.log("MAX_LEN: ".concat(this.MAX_LEN));
        console.log("MSG : ".concat(this.MSG)); // 
    };
    return Foo4;
}());
new Foo4().log();
// readonly가 선언된 클래스 프로퍼티는 선언시 내부에서만 값을 할당할 수 있다.
// 그외의 경우에는 값을 할당할 수 없고 읽기만 가능하다. ex) 86,87번 줄 참고
