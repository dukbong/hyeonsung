let numbers = "1231";
function solution(numbers) {
  let answer = [];
  let pack = [];
  let check = 1;
  //=========================================================================
  numbers = numbers.split(""); // 모든 경우를 위해 글자를 쪼갠다.
  //=========================================================================
  let getPermutation = (arr, num) => { // 순열을 통해 모든 경우를 확인한다.
    const result = [];
    if (num === 1) {
      return arr.map((v) => [v]);
    }
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutation = getPermutation(rest, num - 1);
      const fixed_Permutation = permutation.map((v) => [fixed, ...v]);
      result.push(...fixed_Permutation);
    });
    return result;
  };
  //=========================================================================
  for (let i = numbers.length; i > 0; i--) { // 순열로 얻은 값들을 pack에 저장
    pack.push(getPermutation(numbers, i));
  }
  //=========================================================================
  for (let i = 0; i < pack.length; i++) { // pack에 배열로 들어온걸 다 문자열로 변경해준다.
    for (j = 0; j < pack[i].length; j++) {
      pack[i][j] = pack[i][j].join("");
    }
  }
  //=========================================================================
  pack = pack.flat().map((v)=>Number(v)); // pack을 1차원 배열로 만든다.
  //=========================================================================
  for (let i = 0; i < pack.length; i++) { // 소수인걸 찾는다.
    check = 1;
    for (let j = 2; j <= Math.sqrt(pack[i]); j++) {
      if (pack[i] % j === 0) {
        check = 0;
        break;
      }
    }
    if (check) {
      answer.push(pack[i]);
    }
  }
  //=========================================================================
  answer = [...new Set(answer)].filter((v)=>v>1); // 중복 제거 및 0,1 제거
  console.log(pack);
  console.log(answer);
  //=========================================================================
  return answer.length;
}
console.log(solution(numbers));