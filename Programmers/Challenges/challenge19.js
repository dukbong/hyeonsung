// 짝지어 제거하기
let s = "baabaa";
function solution(s){ // 효율성 테스트 성공
    let answer = 1;
    let check = [];

    for (let i = 0; i < s.length; i++){
        if (check[check.length - 1] === s[i]){
            check.pop();
        }else{
            check.push(s[i]);
        }
    }
    return check.length === 0?answer:0;
}
console.log(solution(s));

// function solution(s) { // 효율성 테스트 실패
//     let answer = 1;
//     s = s.split("");
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === s[i + 1]) {
//         s.splice(i, 2);
//         i === 0 ? i = -1 : i = i - 2;
//       }
//     }
//     return s.length === 0 ? answer : 0;
//   }