function solution(lottos, win_nums) {
    let answer = [];
    let worst = [];
    let best = [];
    for (let i = 0; i < win_nums.length; i++) {
      if (win_nums.includes(lottos[i])) {
        worst.push(lottos[i]);
        best.push(lottos[i]);
      } else if (lottos[i] === 0) {
        best.push(lottos[i]);
      }
    }
    switch (worst.length) {
      case 6:
        worst = 1;
        break;
      case 5:
        worst = 2;
        break;
      case 4:
        worst = 3;
        break;
      case 3:
        worst = 4;
        break;
      case 2:
        worst = 5;
        break;
      default:
        worst = 6;
    }
    switch (best.length) {
      case 6:
        best = 1;
        break;
      case 5:
        best = 2;
        break;
      case 4:
        best = 3;
        break;
      case 3:
        best = 4;
        break;
      case 2:
        best = 5;
        break;
      default:
        best = 6;
    }
    answer.push(best);
    answer.push(worst);
    return answer;
  }