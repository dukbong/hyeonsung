function solution(absolutes, signs) {
    let answer;
    for (let i = 0; i < signs.length; i++){
      if(signs[i] === false){
        absolutes[i] = absolutes[i] * -1;
      }
    }
  return answer = absolutes.reduce((acc,cur)=>{
    return acc+cur;
  });
}