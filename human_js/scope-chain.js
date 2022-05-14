const x = "x"; // <---------------------------- const는 중복하면 안된다고 배웠는데? 가장 아래에 설명되어있다.
function c() {
  const y = "y";
  console.log("c");
}

function a() {
  const x = "x"; // <-------------------------- const는 중복하면 안된다고 배웠는데? 가장 아래에 설명되어있다.
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
scope chain은 알기 위해서는 선언을 잘 봐야한다.

현재 -> 상위 -> 상위의 상위 [Lexical Scope]

function c -> anonymous
function a -> anonymous
function b -> function a -> anonymous

Question_1
function c에서 b()를 하면 어떻게 될까?

method_1

function c 안에 function b를 선언한게 있는가?
결과 : 없다.
그럼 function c의 상위 anonymous에는 function b를 선언한게 있는가?
결과 : function a와 function c만 있다. (없다.)

최종결과 : 호출할 수 없다.
오류발생 : b is not defined.

method_2
최상단에서부터 선언을 정리해본다.

anonymous -> const x, function c, function a
function c -> const y
function a -> const x, function b
function b -> const z

function c에는 function b 선언이 없다.
function c를 가지고 있는 상위로 이동 (anonymous)
anonymous에도 function b 선언이 없다.
최종결과 : 호출할 수 없다.

*/

/*
const x 중복에 관해서

선언을 정리해본다.
anonymous -> const x, function c, function a
function c -> const y
function a -> const x, function b
function b -> const z

중복선언이 안되는 경우는 같은 공간에 있는 경우만 해당된다.

anonymous에 const x를 하나 더 추가한다면 중복으로 오류가 나지만
function c 안에 const x를 추가하더라도 같은 scope 안에 없기 때문에 오류가 발생하지 않는다.
동일한 이유로 function a에서 선언한 const x가 오류를 발생시키지 않는 것이다.
*/