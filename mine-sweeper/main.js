const $form = document.querySelector("#form");
const $timer = document.querySelector("#timer");
const $tbody = document.querySelector("#table tbody");
const $result = document.querySelector("#result");

let row; //줄
let cell; //칸
let mine; //지뢰개수
let startTime;
let interval;
let data;
let openCount;

const CODE = {
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  MINE: -6,
  OPENED: 0, // 0이상이면 모두 열린 칸
};

function onSubmit(event) {
  event.preventDefault();
  row = parseInt(event.target.row.value);
  cell = parseInt(event.target.cell.value);
  mine = parseInt(event.target.mine.value);
  openCount = 0;
  clearInterval(interval);
  $tbody.innerHTML = "";
  drawTable();
  startTime = new Date();
  interval = setInterval(() => {
    const time = Math.floor((new Date() - startTime) / 1000);
    $timer.textContent = `${time}초`;
  }, 1000);
}
$form.addEventListener("submit", onSubmit);

function plantMine() {
  const candidate = Array(row * cell)
    .fill()
    .map((arr, i) => {
      return i;
    });
  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    //[0]을하면 값이 나오고 [0]을 빼면 [[?],[?]...] 이런식으로 배열안에 배열 형태로 나온다.
    shuffle.push(chosen);
  }
  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  } //2차원 데이터 만들기

  //예시 shuffle[k] = 85
  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell); // 85/10 = 8번째줄
    const hor = shuffle[k] % cell; // 85%10 = 5번째칸
    data[ver][hor] = CODE.MINE;
  }
  return data;
}

function onRightClick(event) {
  event.preventDefault();
  //우클릭시 나오는 메뉴판?을 안나오게 막아준다.
  const target = event.target;
  const rowIndex = target.parentNode.rowIndex;
  const cellIndex = target.cellIndex;
  const cellData = data[rowIndex][cellIndex];
  if (cellData === CODE.MINE) {
    //지뢰면
    data[rowIndex][cellIndex] = CODE.QUESTION_MINE; //물음표 지뢰
    target.className = "question";
    target.textContent = "?";
  } else if (cellData === CODE.QUESTION_MINE) {
    //물음표 지뢰면
    data[rowIndex][cellIndex] = CODE.FLAG_MINE; //깃발 지뢰
    target.className = "flag";
    target.textContent = "!";
  } else if (cellData === CODE.FLAG_MINE) {
    // 깃발 지뢰
    data[rowIndex][cellIndex] = CODE.MINE;
    target.className = "";
    // target.textContent = "X";
  } else if (cellData === CODE.NORMAL) {
    // 닫힌 칸
    data[rowIndex][cellIndex] = CODE.QUESTION;
    target.className = "question";
    target.textContent = "?";
  } else if (cellData === CODE.QUESTION) {
    //물음표면
    data[rowIndex][cellIndex] = CODE.FLAG;
    target.className = "flag";
    target.textContent = "!";
  } else if (cellData === CODE.FLAG) {
    //깃발이면
    data[rowIndex][cellIndex] = CODE.NORMAL;
    target.className = "";
    target.textContent = "";
  }
}

function countMine(rowIndex, cellIndex) {
  const mines = [CODE.MINE, CODE.QUESTION_MINE, CODE.FLAG_MINE];
  let i = 0;
  mines.includes(data[rowIndex - 1]?.[cellIndex - 1]) && i++;
  //mines.includes(data[rowIndex -1]?.[cellIndex -1])★여기까지 존재하면★&& ★이거 실행해줘라★i++;
  //이런 뜻을 가진 코드이다.
  //반대로 A||B 는 A가 존재하지않으면 B를 실행해라
  mines.includes(data[rowIndex - 1]?.[cellIndex]) && i++;
  mines.includes(data[rowIndex - 1]?.[cellIndex + 1]) && i++;
  mines.includes(data[rowIndex][cellIndex - 1]) && i++;
  mines.includes(data[rowIndex][cellIndex + 1]) && i++;
  mines.includes(data[rowIndex + 1]?.[cellIndex - 1]) && i++;
  mines.includes(data[rowIndex + 1]?.[cellIndex]) && i++;
  mines.includes(data[rowIndex + 1]?.[cellIndex + 1]) && i++;
  return i;
}

function open(rowIndex, cellIndex) {
  if (data[rowIndex]?.[cellIndex] >= CODE.OPENED) return;
  const target = $tbody.children[rowIndex]?.children[cellIndex];
  if (!target) {
    return;
  }
  const count = countMine(rowIndex, cellIndex);
  target.textContent = count || "";
  target.className = "opened";
  data[rowIndex][cellIndex] = count;
  openCount = openCount + 1;
  console.log(openCount);
  if (openCount === row * cell - mine) {
    const time = (new Date() - startTime) / 1000;
    clearInterval(interval);
    $tbody.removeEventListener("contextmenu", onRightClick);
    $tbody.removeEventListener("click", onLeftClick);
    setTimeout(() => {
      alert(`승리하였습니다. ${time}초가 걸렸습니다.`);
    }, 500);
  }
  return count;
}

function openAround(rI, cI) {
  setTimeout(() => {
    const count = open(rI, cI);
    if (count === 0) {
      openAround(rI - 1, cI - 1);
      openAround(rI - 1, cI);
      openAround(rI - 1, cI + 1);
      openAround(rI, cI - 1);
      openAround(rI, cI + 1);
      openAround(rI + 1, cI - 1);
      openAround(rI + 1, cI);
      openAround(rI + 1, cI + 1);
      //재귀 함수 자기자신이 자기자신을 부르는 함수
    }
  }, 0);
  //그냥 사용시 call stack의 사이즈를 넘어버리기 때문에
  //백그라운드와 테스크큐를 이용하여 call stack이 과도하게 쌓이는걸 방지한다.
}
let normalCellFound = false;
let searched;
let firstClick = true;
function transferMine(rI, cI) {
  if (normalCellFound) return; // 빈칸을 찾았으면 종료
  if (rI < 0 || rI >= row || cI < 0 || cI >= cell) return;
  if (searched[rI][cI]) return; // 이미 찾은 칸이면 종료
  if (data[rI]?.[cI] === CODE.NORMAL) {
    // 빈칸인 경우
    normalCellFound = true;
    data[rI][cI] = CODE.MINE;
  } else {
    //지뢰칸인 경우 8방향 모두 탐색
    searched[rI][cI] = true;
    transferMine(rI - 1, cI - 1);
    transferMine(rI - 1, cI);
    transferMine(rI - 1, cI + 1);
    transferMine(rI, cI - 1);
    transferMine(rI, cI + 1);
    transferMine(rI + 1, cI - 1);
    transferMine(rI + 1, cI);
    transferMine(rI + 1, cI + 1);
  }
}

function showMines() {
  const mines = [CODE.MINE, CODE.QUESTION_MINE, CODE.FLAG_MINE];
  data.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (mines.includes(cell)) {
        $tbody.children[rowIndex].children[cellIndex].textContent = "X";
      }
    });
  });
}

function onLeftClick(event) {
  const target = event.target; // <- td
  const rowIndex = target.parentNode.rowIndex;
  const cellIndex = target.cellIndex;
  let cellData = data[rowIndex][cellIndex];
  if (firstClick) {
    firstClick = false;
    searched = Array(row)
      .fill()
      .map(() => []);
    if (cellData === CODE.MINE) {
      // 첫클릭이 지뢰면
      transferMine(rowIndex, cellIndex); // 지뢰옮기기
      data[rowIndex][cellIndex] = CODE.NORMAL; // 지금 칸을 빈칸으로 만들기
      cellData = CODE.NORMAL;
    }
  }
  if (cellData === CODE.NORMAL) {
    // 닫힌칸이면
    // event.target.textContent = count || "";
    //count가 false일때 ""로 표시해주라는 의미
    //false가 나오는 값으로는 0,"",false,null,undefined,NaN

    //만약 0도 표시해주고 싶다면
    // count ?? ""를 하면 된다.
    // null,undefined가 아니면 count
    // null,undefined라면 ""
    // data[rowIndex][cellIndex] = count;
    openAround(rowIndex, cellIndex);
  } else if (cellData === CODE.MINE) {
    //지뢰칸이면
    showMines();
    target.textContent = "펑";
    target.className = "opened";
    clearInterval(interval);
    $tbody.removeEventListener("contextmenu", onRightClick);
    $tbody.removeEventListener("click", onLeftClick);
  } else {
    //나머지 동작은 무시
  }
}

function drawTable() {
  data = plantMine();
  data.forEach((row) => {
    const $tr = document.createElement("tr");
    row.forEach((cell) => {
      const $td = document.createElement("td");
      if (cell === CODE.MINE) {
        // $td.textContent = "X"; // 개발편의를위해 지뢰 표시
      }
      $tr.append($td);
    });
    $tbody.appendChild($tr);
    $tbody.addEventListener("contextmenu", onRightClick);
    $tbody.addEventListener("click", onLeftClick);
  });
}
