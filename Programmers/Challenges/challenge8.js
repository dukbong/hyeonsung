function solution(board, moves) {
    let answer;
    let pack = [];
    let score = 0;
    for (let i = 0; i < moves.length; i++) {
      for (let j = 0; j < board.length; j++) {
          let value = board[j][moves[i]-1];
        if (value) {
          if (pack[pack.length-1] === value){
            score = score + 1;
            pack.splice(pack.length-1,1);
          } else {
              pack.push(value);
          }
          board[j][moves[i]-1] = 0;
          break;
        }
      }
    }
    answer = score * 2;
    console.log(board);
    return answer;
  }