// javascript에서 this는 기본적으로 window를 나타낸다.
// this는 함수가 호출될때 결정된다.
const obj = {
    name : "human_js",
    sayName () {
        console.log(this.name);
    /*
    sayName : function () {
        console.log(this.name);} 
    이걸 줄여서 작성한것이다.
    */
}};

console.log(obj.sayName()) //human_js

//--------------------------------------------------------

function Human(name) {
    this.name = name;
}

console.log(new Human("javascript"));
// name : javascript

//예제 2번
function test () {
    console.log(this.name);
}

//method
test.bind({name : "javascript"})();
test.apply({name : "javascript"});
test.call({name : "javascript"});
//모두 동일하게 javascript가 출력된다.
//this가 바꿔주는 동작 ★객체, new, bind, apply, call

const obj2 = {
    name :"javascript",
    sayName2 () {
        console.log(this.name);
        function inner () {
            console.log(this.name);
        }
        inner();
    }
};

obj2.sayName2() // javascript
inner() // " " <--window
//호출할때 객체, new, bind, apply, call 있는지 확인

const obj3 = {
    name :"javascript",
    sayName3 () {
        console.log(this.name);
        const inner = () =>{
            console.log(this.name);
        } // 화살표 함수에서는 부모의 this를 가져온다.
        inner();
    }
};

obj3.sayName3() // javascript
inner() // javascript

/*
call stack으로 알아보기
|ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
|console.log("this.name")               <--- 5
|inner() 화살표 함수 호출 / this = obj3 <--- 4 6
|console.log("this.name")               <--- 3
|obj3.sayName3() 함수호출 / this = obj3 <--- 2 7
|anonymous / this = window              <--- 1 8
|ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
*/

obj4.sayName4() // javascript
inner() // " " <--window
//호출할때 객체, new, bind, apply, call 있는지 확인

const obj4 = {
    name :"javascript",
    sayName3 () {
        console.log(this.name);
        function inner() {
            console.log(this.name);
        } 
        inner();
    }
};

obj3.sayName3() // javascript
inner() // " "

/*
call stack으로 알아보기
|ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
|console.log("this.name")               <--- 5
|inner() 함수 호출 / this = window      <--- 4 6
|console.log("this.name")               <--- 3
|obj4.sayName4() 함수호출 / this = obj4 <--- 2 7
|anonymous / this = window              <--- 1 8
|ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
*/

const obj5 = {
    name :"javascript",
    sayName5 () {
        console.log(this.name);
        function inner() {
            console.log(this.name);
        } 
        inner.call(obj5);
    }
};

obj5.sayName5() // javascript
inner() //javascript

/*
call stack으로 알아보기
|ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
|console.log("this.name")               <--- 5
|inner.call(obj) 함수 호출 / this = window      <--- 4 6
|console.log("this.name")               <--- 3
|obj5.sayName5() 함수호출 / this = obj5 <--- 2 7
|anonymous / this = window              <--- 1 8
|ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
*/