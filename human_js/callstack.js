const x = "x";
function c() {
  const y = "y";
  console.log("c");
}

function a() {
  const x = "x";
  console.log("a");
  function b() {
    const z = "z";
    console.log("b");
    c();
  }
  b();
}

a(); // a,b,c
c(); // c

/*
a(); -> call stack 보기
|ㅡㅡㅡㅡㅡㅡㅡㅡㅡ
|console.log("c")   <---- 12
|c() 함수호출       <---- 11 13
|console.log("c")   <---- 7
|c() 함수호출       <---- 6 8
|console.log("b")   <---- 5
|b() 함수호출       <---- 4 9
|console.log("a")   <---- 3
|a() 함수호출       <---- 2 10
|anonymous         <---- 1 14
|ㅡㅡㅡㅡㅡㅡㅡㅡㅡ

※ console.log()가 실행된 후에는 callstack에사 지워집니다.
*/
