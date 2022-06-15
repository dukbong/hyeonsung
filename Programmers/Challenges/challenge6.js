function solution(participant, completion) {
    let answer;
    let pack = [];
    let samename = participant.reduce((acc, cur) => {
      // 동명이인 있는지 확인
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    for (const key in samename) {
      if (samename[key] >= 2) {
        answer = key;
        break;
      } else {
        let sortedArray = participant.sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
          if (a === b) return 0;
          else return -1;
        });
        answer = sortedArray[sortedArray.length - 1];
          break;
      }
    }
    return answer;
  }

  // function solution(participant, completion) {
  //   let ps = participant.sort((a, b) => {
  //     let answer;
  //         if (a < b) return -1;
  //         if (a > b) return 1;
  //         if (a === b) return 0;
  //         else return -1;
  //       });
  //   let cs = completion.sort((a, b) => {
  //         if (a < b) return -1;
  //         if (a > b) return 1;
  //         if (a === b) return 0;
  //         else return -1;
  //       });
  //   for (let i = 0; i < participant.length; i++){
  //     if(ps[i]!==cs[i]){
  //       answer = ps[i];
  //       break;
  //     }
  //   }
  //   return answer;
  // }