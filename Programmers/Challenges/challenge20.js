//메뉴 리뉴얼
function solution(orders, course) {
    let pack = [];
    let check = [];
    let answer = [];
    let sortt = [];
    orders = orders.map((v) => v.split(""));
    const getCombinations = function (arr, selectNumber) {
      const results = [];
      if (selectNumber === 1) return arr.map((el) => [el]);
      arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((el) => [fixed, ...el]);
        results.push(...attached);
      });
      return results;
    };
    orders.forEach((a) => {
      course.forEach((b) => {
        pack.push(getCombinations(a, b));
      });
    });
    for (let i = 0; i < pack.length; i++) {
      for (let j = 0; j < pack[i].length; j++) {
        check.push(pack[i][j].sort().join(""));
      }
    }
    check = check.reduce((acc, cur) => {
      if (cur in acc) {
        acc[cur]++;
      } else {
        acc[cur] = 1;
      }
      return acc;
    }, {});
    let sorted = Object.entries(check).sort((a,b)=>b[1] - a[1]);
    let min = 2;
    for (let i = 0; i < course.length; i++){
      for (let j = 0; j < sorted.length; j++){
        if (course[i] === sorted[j][0].length){
          if (min <= sorted[j][1]){
            min = sorted[j][1];
            answer.push(sorted[j][0]);
          }
        }
      }
      min = 2;
    }
    return answer.sort();
  }