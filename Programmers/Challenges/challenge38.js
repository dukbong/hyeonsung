// 다음 큰 숫자

function solution(n) {
    let answer = 0;
    let num = n;
    let binN = (parseInt(n).toString(2).split("").filter((v)=>v==="1")).length;
    
    while(1){
      num++;
      let next = (parseInt(num).toString(2).split("").filter((v)=>v==="1")).length;
      if(next === binN){
        return answer = num;
        break;
      }
    }
  }