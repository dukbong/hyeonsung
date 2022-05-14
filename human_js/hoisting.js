const x = "x";
function c() {
  const y = "y";
  console.log("c");
}

function a() {
  const x = "x";
  console.log("a");
  function b() {
    console.log(z); // TDZ (temporal dead zone)
    const z = "z";
    c();
  }
  b();
}

a();
c();

/*  const, let을 사용했을 때 변수 선언보다 먼저 사용하게되면
    TDZ(temporal dead zone)이 되어 오류가 발생한다.
    이러한 문제들을 없앨 수 있는 가장 좋은 방법은
    ★변수선언을 가장 최상단에 하는것이다.
*/

/*
var를 쓰면 안되는 이유
우선 var는 중복이 가능하기 때문에 scope-chain를 공부할때
했던 방식이 어지럽혀진다.
var a = 4;
이 코드는 이상하게도 window.a에 들어가게 되고
console.log(window.a)를 하게 되면 4가 나오는걸 확인할 수 있다.
*/