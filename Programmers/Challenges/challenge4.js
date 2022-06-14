function solution(numbers) {
    let standard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  
    for (let j = 0; j < numbers.length; j++) {
      if (standard.includes(numbers[j])) {
        standard.splice(standard.indexOf(numbers[j]), 1);
      }
    }
    let answer = standard.reduce((acc, cur) => {
      return acc + cur;
    });
    return answer;
  }