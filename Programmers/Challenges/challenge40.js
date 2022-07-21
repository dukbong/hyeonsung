// 같은 숫자는 싫어

function solution(arr) {
    let answer = [];
    arr.forEach((v, i) => {
      if (answer[answer.length-1] !== v) {
        answer.push(v);
      }
    });
      return answer;
  }