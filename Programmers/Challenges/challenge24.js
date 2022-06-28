// 2016년 요일 맞추기

let a = 5;
let b = 24;

function solution(a, b) {
    let answer;
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    answer = week[new Date(`2016-${a}-${b}`).getDay()];
                 // 인덱스로 반환한다.
    return answer;
}

console.log(solution(a, b));