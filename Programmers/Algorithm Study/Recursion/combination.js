// 조합
let arr = [1, 2, 3, 4, 5, 6];
let num = 4;

let getCombination = (arr, num) => {
  const result = [];
  if (num === 1) {
    return arr.map((v) => [v]);
  }
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = getCombination(rest, num - 1);
    const fixed_combination = combination.map((v) => [fixed, ...v]);
    result.push(...fixed_combination);
  });
  return result;
};

console.log(getCombination(arr, num));
