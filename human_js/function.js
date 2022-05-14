// 함수 선언
const add = (a, b) => a + b;

function calculator(func, a, b) {
  return func(a, b);
}

// 함수 호출
add(3, 5); // 8

calculator(add, 3, 5); // 8

//자주 헷갈리는 내용

const onclick = () => {
  console.log("hello");
};

document.querySelector("#header").addEventListener("click", onclick());
// 여기서 onclick() 은 함수 onclick의 return 값을 넣어달라는것과 같다.
// 현재 onclick 함수의 return 값은 undefined다.

const onclick2 = () => () => {
  console.log("hello");
};

document.querySelector("#header").addEventListener("click", onclick2());
// onclick 함수와는 다르게 지금 onclick2의 return값은 ()=>{console.log("hello");}

//★ 함수명() <- 이건 다른거 필요없고 return 값을 봐라.
