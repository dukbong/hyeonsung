// 모의고사

function solution(answers) {
    let answer=[];
    let user = [[1, 2, 3, 4, 5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    for(let i = 0; i < user.length; i++){
      let cnt = 0;
      answers.forEach((v, index)=>{
        if ( v === user[i][index%user[i].length]){
          cnt++;
        }
      });
        answer.push([i+1,cnt]);
    }
    answer = answer.sort((a,b)=>b[1]-a[1])
                   .filter((v)=>v[1]>=answer[0][1])
                   .map((v)=>v[0]);
    return answer;
  }