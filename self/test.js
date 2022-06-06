let arr = [3, 5, 7, 9, 1];

function solution(arr){
  let answer = [];
  let check = arr.reduce((acc, cur)=> {
    if (cur in acc) {
      // 2 in {3 : 1}
      // 2를 key값으로 가진게 있냐?
      acc[cur] = acc[cur] + 1;
    }
    else {
      acc[cur] = 1;
      //{}[key] = value;
    }
    return acc;
  }, {});
  console.log(check);
  for (let i = 0; i < Object.values(check).length; i++){
    if (Object.values(check)[i] > 1){
      answer.push(Object.values(check)[i]);
    }
  }

  if ( answer.length > 1){
    return answer;
  } else if (answer.length < 1){
    answer.push(-1);
    return answer;
  }
};
console.log(solution(arr));