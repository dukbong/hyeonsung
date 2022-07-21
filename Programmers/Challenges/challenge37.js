// 숫자의 표현

function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++){
      let num = i;
      for(let j = i+1; j <= n; j++){
        num = num + j; 
        num === n && answer++;
        if (num > n) break;   
      }
    }
    return answer + 1;
  }