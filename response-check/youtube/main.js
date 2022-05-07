const $screen = document.querySelector("#screen");
const $result = document.querySelector("#result");
const $ul = document.querySelector("#ul");
const $ranking = document.querySelector("#ranking");

let startTime;
let endTime;
const records = [];
let timeoutId;
$screen.addEventListener("click", (event) => {
  if (event.target.classList.contains("waiting")) {
    //태그.classList.contains("className");
    //해당 class가 태그에 들어있다면 true 아니면 false
    $screen.classList.remove("waiting");
    //$screen 태그에서 waiting class를 지운다.
    $screen.classList.add("ready");
    //$screen 태크에 ready라는 class를 추가해준다.
    $screen.textContent = "초록색이 되면 클릭하세요.";

    timeoutId = setTimeout(() => {
      startTime = new Date();
      $screen.classList.remove("ready");
      $screen.classList.add("now");
      $screen.textContent = "클릭하세요.";
      //시작 시간 측정
    }, Math.floor(Math.random() * 1000) + 2000); //2~3초
  } else if (event.target.classList.contains("ready")) {
    clearTimeout(timeoutId);
    $screen.classList.remove("ready");
    $screen.classList.add("waiting");
    $screen.textContent = "너무 성급하셨어요.";
  } else if (event.target.classList.contains("now")) {
    endTime = new Date();
    const current = endTime - startTime;
    records.push(current);
    const average = records.reduce((a, c) => a + c) / records.length;
    //평균구하기
    $result.textContent = `현재 ${current}ms, 평균 ${average}ms`;
    //ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
    const topfive = records.sort((a,b)=>a-b).slice(0,5); // 작은순으로 정리
    topfive.forEach((rank, index)=>{
        $result.append(document.createElement('br'), `${index + 1}위 ${records[index]}ms`);
    });
    //ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
    startTime = null;
    endTime = null;
    $screen.classList.remove("now");
    $screen.classList.add("waiting");
    $screen.textContent = "클릭해서 시작하세요.";
    //종료 시간 측정
    //시간 차이 저장
  }
});
