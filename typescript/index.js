var Username = "kim";
var UserArray = ["kim", "park"];
var UserObject_1 = { name: "kim" };
var UserObject_2 = {};
// 1번은 꼭 name : "문자" 가 있어야한다.
// 2번 name ? : string은 name의 value값이 없으면 적지 않아도 된다는 뜻이다.
var test = "kim";
test = 1;
var test_2 = ["kim"];
test_2 = 1;
// 타입 지정을 변수로 만들어 수 있다.
function Test_Func(x) {
    //파라미터 타입 지정 
    return x * 2;
}
var test_3 = [123, true];
var test_4 = { name: "kim", age: "123" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
