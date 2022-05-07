// const $result = document.createElement("div");
// const $table = document.createElement("table");
// // element 만들기

// document.body.append($result);
// document.body.append($table);
// // html에 넣어주기

//위쪽은 원래 방식
//아래쪽은 새로운 방식으로도 할 수 있다.

const { body } = document;
// const body = document.body;
//       ----            ----
//이러한 방식을 구조분해할당이라고 한다.

const $result = document.createElement("div");
const $table = document.createElement("table");

body.append($result);
body.append($table);

//예시
// const a = obj.A;
// const b = obj.B;
// 아래처럼 한줄로 줄일 수 있다.
const {A,B} = obj;

//----------------------------------------------

const obj = {
    a : "hello",
    b : {
        c : "hi",
        d : {e: "wow"},
    },
};

// const a = obj.a;
// const c = obj.b.c;
// const e = obj.b.d.e;

const { a, b:{c, d:{e}}} = obj;

// 만약 a,b,e를 구하고 싶다면
// const {a, b} = obj;
// const {d : { e }} = b;
// 이런식으로 두개로 나눠서 해주어야한다.
