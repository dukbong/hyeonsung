const $input = document.querySelector("#input");
const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");

const numbers = []; // 1,2,3,4,5,6,7,8,9
for (let n = 0; n < 9; n = n + 1) {
  numbers.push(n + 1);
}

const answer = [];
for (let n = 0; n < 4; n = n + 1) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  //랜덤으로 뽑힌 number안에 값을 answer에 넣는다.
  numbers.splice(index, 1);
  //answer에 안에 넣은 값을 number 배열에서 제거한다.
}
console.log(answer);

const tries = [];

function checkInput(input) {
  if (input.length !== 4) {
    return alert("4자리 숫자를 입력해 주세요.");
  }
  if (new Set(input).size !== 4) {
    //new Set => 중복을 제거해서 새로 만든 배열? 찾아보기
    //new Set의 길이는 length가 아니라 size로 확인이 가능하다.
    return alert("중복되지 않게 입력해주세요.");
  }
  if (tries.includes(input)) {
    // inclides 는 포함되있으면 true 없으면 false
    return alert("이미 시도한 값입니다.");
  }
  return true;
} //검사하는 코드

let out = 0;
$form.addEventListener("submit", (event) => {
  event.preventDefault(); //기본 동작 막기
  //form의 submit은 항상 새로고침을 해주기 때문에 막아줘야한다.
  //form 안에서만 가능한 기능
  /*
  <form id="form">
    <input type="text" id="input" />
    <button>확인</button>
  </form>

  1. $form.addEventListener("submit", (event) => {event.target[0]})
  >> 결과 : <input type="text" id="input" />
  2. $form.addEventListener("submit", (event) => {event.target[1]})
  >> 결과 : <button>확인</button>
  */
  const value = $input.value;
  $input.value = "";
  if (checkInput(value)) {
    //입력값 문제없음
    if (answer.join("") === value) {
      //answer = [3,1,4,6] => answer.join('') = "3146" (배열을 문자열로 변경)
      //문자열을 배열로 변경하는 방법
      // "3146".split() => ["3146"], "3146".split("") => ["3","1","4","6"]
      $logs.textContent = "홈런!";
      return;
    }
    if (tries.length >= 9) {
      const message = document.createTextNode(
        `패배! 정답은 ${answer.join("")}`
      );
      $logs.appendChild(message);
      return;
    }
    let strike = 0;
    let ball = 0;
    // answer = 3146, value : 1234
    for (let i = 0; i < answer.length; i++) {
      const index = value.indexOf(answer[i]);
      //answer[0] = 3, value.indexOf(3) = 2 => 1234에서 3이 있는 자리의 index 번호는 2이기 때문이다.
      if (index > -1) {
        if (index === i) {
          strike = strike + 1;
        } else {
          ball = ball + 1;
        }
      }
    }
    if (strike === 0 && ball === 0) {
      out = out + 1;
      $log.append(`${value}: 아웃`, document.createElement("br"));
    } else {
      $logs.append(
        `${value} : ${strike} 스트라이크 ${ball} 볼`,
        document.createElement("br")
      ); // createElement는 태그를 만드는 메서드입니다.
      //appendChild는 하나만 넣을 수 있고 append는 여러개도 가능하다.
      //결론은 append 쓰자.
    }
    if (out === 3) {
      const message = document.createTextNode(
        `패배! 정답은 ${answer.join("")}`
      );
      $logs.appendChild(message);
      return;
    }
    tries.push(value);
  } else {
    //에러발생
    return;
  }
});
