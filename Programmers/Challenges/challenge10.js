function solution(nums) {
    let answer;
    let pack = [];
    let checkmid = [];
    let checkall = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i]) {
        for (let j = i + 1; j < nums.length; j++) {
          for (let k = j + 1; k < nums.length; k++) {
            pack.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
    for (let l = 0; l < pack.length; l++) {
      let check = pack[l].reduce((acc, cur) => {
        return acc + cur;
      });
      for (let q = 2; q < check; q++) {
        if (check % q === 0) {
          checkmid.push(q);
        }
      }
      if (checkmid.length === 0) {
        checkall.push(1);
      } else {
        checkmid = [];
      }
    }
    answer = checkall.length;
    return answer;
  }