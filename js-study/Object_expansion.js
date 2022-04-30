Object.prototype.contain = function(needle){
    for (let name in this){
        if (this[name] === needle){
            return true;
        }
    }
    return false;
}
//prototype을 이용해서 모든 객체가 사용할 수 있는 함수를 만들수 있다.
let a = {name : "js300", country : "korea"};
console.log(a.contain("korea"));
//결과값 : true
let b = ["javascript","C++","C","python","go"];
console.log(b.contain("java"));
//결과값 : false

/****************************************
    object 확장의 위험성을 알아야한다.
****************************************/

for (let index in b){
    console.log(b[index]);
}
//기대하는 답 : "javascript","C++","C","python","go"
//실제 결과 값 : "javascript","C++","C","python","go",function(needle){...}

/****************************************
      이럼에도 사용할 수 있는 방법
****************************************/

for (let index in b){
    if (b.hasOwnProperty(index)){
    //b라는 객체가 인자로 받는 index를 직접적으로 가지고 있냐라는 말이다.
        console.log(b[index]);
    }
}
//결과값 : "javascript","C++","C","python","go"
