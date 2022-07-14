// 소수찾기

function solution2(n: number): number {
  let answer: number = 0;
  for(let i = 0; i <= n; i++){
    let check: boolean = true;
    for(let j = 0; j <= Math.sqrt(i); i++){
      if(i % j === 0){
        check = false;
        break;
      }
    }
    check && answer++;
  }
  return answer;
}