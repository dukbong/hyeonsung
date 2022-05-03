const $input_defense = document.querySelector("#defense");
const $d_button = document.querySelector("#defense_button");
const $result = document.querySelector("#answer");
const $q = document.querySelector("#q");

let first = [];
let second;

let strike = 0;
let ball = 0;
let out = 0;

let cnt = 10;

for (let p = 0; p < 4; p++){  
    first_num = Math.floor(Math.random() * 10);
    if(first.indexOf(first_num) === -1){
        first.push(first_num);
    }else{
        p = p-1;
    }
}
first = first.join('');
$q.textContent = first;


$d_button.addEventListener("click",()=>{
    if (second.length == 4){
    for(let i = 0; i < 4; i++){
        if (first[i] == second[i]){
            strike = strike + 1;}
        else if(first.includes(second[i])){
            ball = ball +1;
        }
        else{
            out = out + 1;
        }
    }
    cnt = cnt - 1;
    let subscript = second + " / " + "스트라이크 : "+ strike + " / " + "볼 : "+ ball + " / " + "아웃 : " + out + " / "+ "남은횟수 : " + cnt;

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(subscript));
    $result.appendChild(li);

    $input_defense.value = "";
    if (strike == 4){
        alert("성공하셨습니다.");
    }
    else if (cnt <= 0){
        alert("실패하셨습니다.");
    }
    strike = 0;
    ball = 0;
    out = 0;
    }else {
        alert("4자리 숫자를 입력해주세요.")
        $input_defense.value = "";
    }
});

$input_defense.addEventListener("input",(event)=>{
    for(let p = 0; p < event.target.value.length; p++){
        for(let j = p+1; j < event.target.value.length; j++){
            if (event.target.value[p] == event.target.value[j]){
                alert("중복되는 값이 있습니다.");
                $input_defense.value = "";
            }
        }
    }
    second = event.target.value;
});