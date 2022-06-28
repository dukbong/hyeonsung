//가장 큰수
let numbers = [6,10,2];
function solution(numbers) {
    let answer;
    let check = numbers.map((v)=>v.toString())
    // 이어 붙이는 문제이기 때문에 문자열로 바꾼다.
    .sort((a,b)=>(b+a)-(a+b))
    // 문자열을 붙였을때 큰 순서대로 정렬한다.
    .join("");
    // 배열형태를 문자열로 바꿔준다.
    answer = check;
    return Math.max(answer) === 0?"0":answer;
}
console.log(solution(numbers));