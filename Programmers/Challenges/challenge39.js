// 최대값과 최솟값

function solution(s) {
    let answer = [];
    let arrs = s.split(" ");
    answer.push(Math.min(...arrs)," ", Math.max(...arrs));
    return answer.join("");
}