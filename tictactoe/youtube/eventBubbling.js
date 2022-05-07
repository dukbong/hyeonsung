/*이벤트 버블링에 대해 알아보기
이벤트 버블링은 특정요소에서 이벤트가 발생했을때 그 이벤트가
더 상위 요소에 전달되는 특성을 의미합니다.*/


const $table = document.createElement("table");
const $result = document.createElement("div");
let turn = "O";
const rows = [];

const callback = (event) => {
  if (event.target.textContent) return;
  /*
  event.target은 자식들을 모두 해당시킨다.
  ex ) table의 event target은
       table이 될수도 있고 tr이 될수도 있고 td가 될수도 있다.
  만약 정확하게 특정 한곳에만 event를 주고 싶을때는 event.currentTarget를 사용해야한다.

  나는 죽어도 currentTarget을 사용하고 싶지 않을때는 
  event.stopPropagation();
  을 사용하게 되면 이벤트 버블링을 막을 수 있다.
  */
  event.target.textContent = turn;
  
  if (turn === "O") {
    turn = "X";
  } else if (turn === "X") {
    turn = "O";
  }
};

for (let i = 0; i < 3; i++) {
  const $tr = document.createElement("tr");
  const cells = [];
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement("td");
    cells.push($td);
    // $td.addEventListener("click", callback);
    /*
    td를 클릭했을 때 callback함수를 실행하고 싶은 경우이다.
    하지만 html 특성상 td에 click이라는 event를 주는건
    그 상위인 tr에 주는것과 같고 그 상위인 table에 주는것과도 같으며 나아가 body에 주는것과도 같습니다.
    */
    $tr.append($td);
  }
  $table.append($tr);
  rows.push(cells);
}
//ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
$table.addEventListener("click",callback);
/*
이것처럼 table에 click이라는 event를 주더라고 td에 준것과 마찬가지로 잘 작동한다.
*/
//ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
document.body.append($table);
document.body.append($result);

console.log(rows);
