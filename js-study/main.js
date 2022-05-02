const number = Number(prompt("몇명의 참가자가 있습니까?"));
const $word = document.querySelector("#word");
const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $order = document.querySelector("#order");

let word;
let newword;

function buttonfunction() {
  if (!word) {
    word = newword;
    if (word.length === 3) {
      $word.textContent = word;
      $input.value = "";
      $input.focus();

      const order = Number($order.textContent);

      if (order + 1 > number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
    } else {
      alert("세글자만 입력이 가능합니다.");
      word = "";
      $input.value = "";
      $input.focus();
    }
  } else {
    if (word[word.length - 1] === newword[0]) {
      word = newword;
      if (word.length === 3) {
        $word.textContent = word;
        $input.value = "";
        $input.focus();
        const order = Number($order.textContent);
        console.log(order);
        if (order + 1 > number) {
          $order.textContent = 1;
        } else {
          $order.textContent = order + 1;
        }
      } else {
        alert("세글자만 입력이 가능합니다.");
        word = "";
        $input.value = "";
        $input.focus();
      }
    } else {
      alert("단어는 " + word[word.length - 1] + "로 시작해야합니다.");
      $input.value = "";
      $input.focus();
    }
  }
}

$button.addEventListener("click", buttonfunction);

$input.addEventListener("input", function (event) {
  newword = event.target.value;
});
