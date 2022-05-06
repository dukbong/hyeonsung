const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
const IMG_URL = "./rsp.png";
// ./ >> 현재 위치 ../ >> 상위 폴더 .../ >> 상위 사위 폴더 / 루트폴더 (window는 C드라이브)
$computer.style.background = `url(${IMG_URL}) 0 0`; // 가위 0 0 주먹 -227 보 -441
// `url(${}) a b >> a는 가로 위치 b는 세로위치
// 가로위치가 -면 그림의 오른쪽을 보여준다.
// 세로위치가 -면 그림이 위로 움직인다.
$computer.style.backgroundSize = "auto 200px"; //가로너비 세로높이

const rspX = {
  scissors: "0", //가위
  rock: "-220px", //바위
  paper: "-441px", //보
};

let computerChoice = "scissors";
const changeComputerHand = () => {
  if (computerChoice == "scissors") {
    // 가위면
    computerChoice = "rock";
  } else if (computerChoice == "rock") {
    // 바위면
    computerChoice = "paper";
  } else {
    // 보면
    computerChoice = "scissors";
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = "auto 200px";
};
let intervalId = setInterval(changeComputerHand, 50); //setInterval은 반환값이 있다.

const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

// const clickButton = () => {
//     clearInterval(intervalId); //setInterval을 삭제하여 그림을 멈춰준다.
//     setTimeout(()=>{
//         clearInterval(intervalId);
//         intervalId = setInterval(changeComputerHand,50);
//     },1000); //1초 후에 다시 intervalId 변수에 setInterval(changeComputerHand,50)을 저장하고 실행한다.
// };   setinterval이 계속 생성되어 오류가 발생한다.

let clickable = true;
let computer = 0;
let me =0;
const clickButton = (event) => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;
    const myChoice =
      event.target.textContent === "바위"
        ? "rock"
        : event.target.textContent === "가위"
        ? "scissors"
        : "paper";
    const myScore = scoreTable[myChoice];
    const computerScore = scoreTable[computerChoice];
    const diff = myScore - computerScore;

    let message;
    if (diff == 2 || diff === -1) { // 조건문 || 쓸때 유용한 방법 : [2,-1].includes(diff)로 바꿔쓸 수 있다.
      me= me + 1;
      message = "사람의 승리"
    } else if ([-2,1].includes(diff)) {
      computer = computer + 1;
      message = "컴퓨터의 승리"
    } else {
      message = "무승부";
    }
    if (me >= 3){
      $score.textContent = `사람의 승리 ${me} : ${computer}`;
    }else if (computer >= 3){
      $score.textContent = `컴퓨터의 승리 ${me} : ${computer}`;
    }else{setTimeout(() => {
      clickable = true;
      intervalId = setInterval(changeComputerHand, 50);
    }, 1000);}
  }
};

$rock.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);
