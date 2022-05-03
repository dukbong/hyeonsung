let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

// const onClickNumber = (number) => (event) =>{
//   //()=>{return ()=>{}} 중괄호와 return이 붙어있으면 중괄호 생략가능.
//   if (operator){//비어있지 않다면
//     numTwo +=number;
//     //numTwo = numTwo+number;
//   }else{//비어있다면
//     numOne +=number;
//   }
//   $result+=number;
// } //고차함수 (high order function >> 함수가 함수를 리턴한다.) >> 함수의 중복을 제거할 때 사용한다.
//여기서 사용할 수 있는 더 쉬운 방법
const onClickNumber = (event) => {
  if (operator) {
    if (!numTwo) {
      $result.value = "";
    }
    numTwo += event.target.textContent;
  } else {
    numOne += event.target.textContent;
  }
  $result.value += event.target.textContent;
};

document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

const onClickOperator = (op) => () => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert("숫자를 입력해주세요.");
  }
}; //고차 함수 사용하기

document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document.querySelector("#minus").addEventListener("click", onClickOperator("-"));
document.querySelector("#divide").addEventListener("click", onClickOperator("/"));
document.querySelector("#multiply").addEventListener("click", onClickOperator("*"));
document.querySelector("#calculate").addEventListener("click", () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = parseInt(numOne) - parseInt(numTwo);
        break;
      case "/":
        $result.value = parseInt(numOne) / parseInt(numTwo);
        break;
      case "*":
        $result.value = parseInt(numOne) * parseInt(numTwo);
        break;
    }
  } else {
    alert("숫자를 먼저 입력해주세요.");
  }
});

document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  numTwo = "";
  operator = "";
  $operator.value = "";
  $result.value = "";
});
