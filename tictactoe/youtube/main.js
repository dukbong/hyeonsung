// const data = [];
// for (let i = 0; i < 3; i++){
//     data.push([]);
// } //[[],[],[]]

const $table = document.createElement("table");
const $result = document.createElement("div");
let turn = "O";
const rows = [];

//rows 상태
//[
//  [td,td,td],
//  [td,td,td],
//  [td,td,td]
//]

const checkWinner = (target) => {
  // let rowIndex;
  // let cellIndex;
  // rows.forEach((row,ri)=>{
  //     row.forEach((cell, ci)=>{
  //         if (cell === target){
  //             rowIndex = ri;
  //             cellIndex = ci;
  //         }
  //     });
  // });
  //아래와 같다.
  const rowIndex = target.parentNode.rowIndex;
  //target은 td이고 parentNode는 tr이되고 rowIndex는 tr의 위치가 된다.
  //tr이 0이면 첫째줄이 되고 1이면 두번째 줄이 된다.
  //parentNode와 반대로 아래로 내려가는건 children
  const cellIndex = target.cellIndex;
  //cellIndex라는 기능을 이용하면 위치를 알 수 있다.

  // 세칸 다 채워졌나?
  let hasWinner = false;
  //가로줄 검사
  if (
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
  ) {
    hasWinner = true;
  }
  if (
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn
  ) {
    hasWinner = true;
  }
  if (
    rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn
  ) {
    hasWinner = true;
  }
  if (
    rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn
  ) {
    hasWinner = true;
  }
  return hasWinner;
};

const checkWinnerAndDraw = (target) => {
  const hasWinner = checkWinner(target);
  if (hasWinner) {
    $result.textContent = `${turn}님의 승리`;
    $table.removeEventListener("click",callback);
    return;
  }
  const draw = rows.flat().every((td) => td.textContent);
  // flat은 2차 이상배열을 1차배열로 변환
  // every는 하나라도 빈칸이있으면 false 이다.
  if (draw) {
    $result.textContent = `무승부`;
    return;
  }
  if (turn === "O") {
    turn = "X";
  } else if (turn === "X") {
    turn = "O";
  }
};
let clickable = true;
const callback = (event) => {
    if (!clickable) return;
  if (event.target.textContent) return;

  event.target.textContent = turn;
  //승부 판단하기
  checkWinnerAndDraw(event.target);
  //   if (checkWinner(event.target)) {
  //     $result.textContent = `${turn}님의 승리`;
  //     $table.removeEventListener("click", callback);
  //     return;
  //   }

  //   //무승부
  //   //   let draw = true;
  //   //   rows.forEach((row) =>{
  //   //     row.forEach((cell) =>{
  //   //         if(!cell.textContent){
  //   //             draw = false;
  //   //         }
  //   //     });
  //   //   });
  //   //위와 아래는 비슷한 의미의 코드이다.
  //   const draw = rows.flat().every((td) => td.textContent);
  //   // flat은 2차 이상배열을 1차배열로 변환
  //   // every는 하나라도 빈칸이있으면 false 이다.
  //   if (draw) {
  //     $result.textContent = `무승부`;
  //     return;
  //   }

  //   if (turn === "O") {
  //     turn = "X";
  //   } else if (turn === "X") {
  //     turn = "O";
  //   }
  if (turn === "X") {
      clickable = false;
    setTimeout(() => {
      const emptyCells = rows.flat().filter((v) => !v.textContent);
      //비어있는 칸을 찾는 것이다.
      console.log(emptyCells);
      const randomCell =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
      randomCell.textContent = "X";
      checkWinnerAndDraw(event.target);
      clickable = true;
    }, 1000);
  }
};

for (let i = 0; i < 3; i++) {
  const $tr = document.createElement("tr");
  const cells = [];
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement("td");
    cells.push($td);
    // $td.addEventListener("click", callback);
    $tr.append($td);
  }
  $table.append($tr);
  rows.push(cells);
}
$table.addEventListener("click", callback);
document.body.append($table);
document.body.append($result);

console.log(rows);
