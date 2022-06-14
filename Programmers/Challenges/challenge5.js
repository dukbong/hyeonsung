function solution(a,b){
    let answer;
    let pack = [];
    for (let i = 0; i < a.length; i++){
        pack.push(a[i]*b[i]);
    }
    return answer = pack.reduce((acc,cur)=> acc + cur);
  }