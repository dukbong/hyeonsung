const $input = document.querySelector("#input");
const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");

const numbers = []; // 1,2,3,4,5,6,7,8,9
for (let n = 0; n < 9; n = n+1){
    numbers.push(n +1)
}

const answer = [];
for (let n = 0; n <4; n = n + 1){
    const index = Math.floor(Math.random()*numbers.length);
    answer.push(numbers[index]);
    //랜덤으로 뽑힌 number안에 값을 answer에 넣는다.
    numbers.splice(index,1);
    //answer에 안에 넣은 값을 number 배열에서 제거한다.
}

$form.addEventListener("submit", (event) => {
    event.preventDefault(); //기본 동작 막기
    //form의 submit은 항상 새로고침을 해주기 때문에 막아줘야한다.
});