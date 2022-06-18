// 문자열압축
let s = "ababcdcdababcdcd";
function solution(s) {
  let answer = [];
  let checks = [];
  let p = 1;
  for (let k = 0; k < s.length; k++) {
    for (let i = 0; i < s.length; i++) {
      if (s.slice(i*(k+1), i*(k+1) + k + 1) === s.slice(i*(k+1)+k+1, i*(k+1)+2*k+2)) {
        p = p + 1;
      } else {
        if (p !== 1) {
          checks.push(p, s.slice(i*(k+1), i*(k+1) + k + 1));
          p = 1;
        } else if (p === 1) {
          checks.push(s.slice(i*(k+1), i*(k+1) + k + 1));
        }
      }
    }
    p = 1;
    checks = checks.join("");
    answer.push(checks.length);
    checks = [];
  }
  answer.sort((a,b)=>a-b);
  return answer[0];
}
console.log(solution(s));