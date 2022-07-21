// 소수찾기

function solution(n) {
    let answer = 0;
    for (let i = 2; i <= n; i++) {
      let check = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if(i % j === 0){
          check = false;
          break;
        }
      }
      if(check){
        answer++;
      }
    }
    return answer;
  }