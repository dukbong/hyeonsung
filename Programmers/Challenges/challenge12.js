function solution(array, commands) {
    let answer = [];
    for (let i = 0; i < commands.length; i++){
      let check = array.slice(commands[i][0] - 1, commands[i][1]);
      check = check.sort((a,b)=>a-b);
      answer.push(check[commands[i][2] - 1]);
    };
  return answer;
}