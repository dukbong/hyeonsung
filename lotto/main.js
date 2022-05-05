const $result = document.querySelector("#result");
const $1 = document.querySelector("#o");
const $2 = document.querySelector("#t");
const $3 = document.querySelector("#th");
const $4 = document.querySelector("#f");
const $5 = document.querySelector("#fi");
const $6 = document.querySelector("#s");
const $7 = document.querySelector("#se");
const lotto = Array(45)
  .fill()
  .map((element, index) => {
    return index + 1;
  }); // 1~45
let recommend = []; //일반번호
const bouns = []; //보너스번호

for (let i = 0; i < lotto.length; i++) {
  let draw = Math.floor(Math.random() * 46); // 45까지 랜덤숫자
  if (draw != 0) {
    if (recommend.length !== 7) {
      if (recommend.includes(draw)) {
      } else {
        recommend.push(draw);
      }
    }
  }
}
bouns.push(recommend[recommend.length - 1]);
//마지막 7번째 숫자를 보너스 번호에 저장
recommend.splice(recommend[length - 1], 1);
//보너스 번호에 저장된 값을 제거
recommend = recommend.sort(function (a, b) {
  return a - b;
}); // sort()는 문자열 정리이기 때문에 숫자를 정렬할때는 위와같이 해야한다.

$1.textContent = recommend[0];
$2.textContent = recommend[1];
$3.textContent = recommend[2];
$4.textContent = recommend[3];
$5.textContent = recommend[4];
$6.textContent = recommend[5];
$7.textContent = bouns[0];
