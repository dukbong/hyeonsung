const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);
//v는 값, i는 index
const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음
  /*예제) const a = [1,2,3,4];
          const b = a.splice(2,1);
          a = [1,2,4]
          b = [3] 
  */
  const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼내어
  //splice는 원본을 수정한다.
  shuffle.push(value); // shuffle 배열에 넣기
}
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b); //sort는 원본을 수정한다.
/*예제) const array = [3,5,4,6,1,2];
        array.slice(0,3) >> [3,5,4]
        array.slice(1,4) >> [5,4,6]
        array >> [3,5,4,6,1,2]
        -slice를 해도 원본 데이터는 변하지 않는다.
        -비슷한 메소드로는 map이 있다.
---------------------------------------------------------
        const arr = ["apple","orange","grape","banana"];
        arr.sort((a,b)=>a[0].charCodeAt() - b[0].charCodeAt())
        >> ["apple","banana","grape","orange"]
        문자열도 정렬할 수 있다.
        -다른방법(사전 순으로 나열)
        arr.sort((a,b)=>a.localeCompare(b))
        >> ["apple","banana","grape","orange"]
*/
const bouns = shuffle[6];

const $result = document.querySelector("#result");
const $bonus = document.querySelector("#bonus");

function colorize(number, $tag) {
    if (number < 10) {
      $tag.style.backgroundColor = 'red';
      $tag.style.color = 'white';
    } else if (number < 20) {
      $tag.style.backgroundColor = 'orange';
    } else if (number < 30) {
      $tag.style.backgroundColor = 'yellow';
    } else if (number < 40) {
      $tag.style.backgroundColor = 'blue';
      $tag.style.color = 'white';
    } else {
      $tag.style.backgroundColor = 'green';
      $tag.style.color = 'white';
    }
  }

const showBall = (number, $target) => {
  const $ball = document.createElement("div");
  $ball.className = "ball";
  colorize(number,$ball)
  $ball.textContent = number;
  $target.appendChild($ball);
};

for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    showBall(winBalls[i], $result);
  }, (i + 1) * 1000);
}
// var는 함수 스코프 let은 블록 스코프
setTimeout(() => {
  showBall(bouns, $bonus);
}, 7000);
