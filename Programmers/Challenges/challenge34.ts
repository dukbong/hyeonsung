// 이상한 문자 만들기

function solution3(s: string): string{
  let answer;
  let check = 0;
  let sArray: string[] = s.split("");
  for( let i = 0; i < sArray.length; i++){
    if(sArray[i] === " "){
      check = 0;
    }else{
      if(check % 2 === 0){
        sArray[i] = sArray[i].toUpperCase();
        check++;
      }else{
        sArray[i] = sArray[i].toLowerCase();
        check++;
      }
    }
  }
  return answer = sArray.join("");
}