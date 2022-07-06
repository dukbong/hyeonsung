// 카펫

function solution(brown, yellow) {
    let answer = [];
    let total = brown + yellow;
    for (let i = 0; i <= total; i++) {
      let height = total / i;
      if (i >= height) {
        if (!(height % 1)) {
          if ((i - 2) * (height - 2) === yellow) {
            answer.push(i, height);
            break;
          } else {
            answer = [];
          }
        }
      }
    }
    return answer;
  }