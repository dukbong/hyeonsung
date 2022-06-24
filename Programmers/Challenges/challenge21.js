// 타켓넘버
function solution(numbers, target) {
    let answer = 0;
    let pack = [];
    let c;
    let check = [];
  
    //numbers의 모든 조합을 구한다===============================
    let get = (numbers, num) => {
      const result = [];
      if (num === 1) {
        return numbers.map((v) => [v]);
      }
      numbers.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combi = get(rest, num - 1);
        const fixed_combi = combi.map((v) => [fixed, ...v]);
        result.push(...fixed_combi);
      });
      return result;
    };
    for (let i = 0; i < numbers.length; i++) {
      pack.push(get(numbers, i + 1));
    }
    //numbers의  모든 조합을 구한다===============================
  
    for (let j = 0; j < pack.length; j++) {
      pack[j].forEach((v) => {
        c = [...numbers];
        v.forEach((z) => {
          if (numbers.includes(Math.abs(z))) {
            c.splice(c.indexOf(Math.abs(z)), 1, -1 * z);
          }
        });
        check.push(c);
      });
    }
    check.push(numbers);
    check = check.map((v) => v.reduce((acc, cur) => acc + cur));
      for (let i = 0; i < check.length; i++){
          check[i] === target?answer++:0;
      }
    return answer;
  }