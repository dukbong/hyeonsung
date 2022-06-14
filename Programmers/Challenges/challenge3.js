function solution(numbers, hand) {
    function difference(a, b) {
      return Math.abs(a - b);
    } // 절대값 구하기
    const a = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ["*", 0, "#"]
    ];
    let pack = [];
    let space;
    let startLR = [
      [3, 0],
      [3, 2]
    ];
    let answer = [];
  
    for (let i = 0; i < numbers.length; i++) {
      for (let ri = 0; ri < a.length; ri++) {
        for (let ci = 0; ci < a[ri].length; ci++) {
          if (a[ri][ci] === numbers[i]) {
            pack.push([ri, ci]);
            const spaceLr = difference(pack[0][0], startLR[0][0]);
            const spaceLc = difference(pack[0][1], startLR[0][1]);
            const L = spaceLr + spaceLc;
            const spaceRr = difference(pack[0][0], startLR[1][0]);
            const spaceRc = difference(pack[0][1], startLR[1][1]);
            const R = spaceRr + spaceRc;
            console.log(`도착지 ${a[ri][ci]} 왼손거리 ${L} 오른손거리 ${R}`);
            pack.pop();
            if (a[ri][ci] === 1 || a[ri][ci] === 4 || a[ri][ci] === 7) {
              answer.push("L");
              startLR.shift();
                startLR.unshift([ri, ci]);
            } else if (a[ri][ci] === 3 || a[ri][ci] === 6 || a[ri][ci] === 9) {
              answer.push("R");
              startLR.pop();
                startLR.push([ri, ci]);
            } else {
              if (L > R) {
                answer.push("R");
                startLR.pop();
                startLR.push([ri, ci]);
              } else if (L < R) {
                answer.push("L");
                startLR.shift();
                startLR.unshift([ri, ci]);
              } else if (L === R) {
                if (hand === "right") {
                  answer.push("R");
                  startLR.pop();
                startLR.push([ri, ci]);
                } else if (hand === "left") {
                  answer.push("L");
                  startLR.shift();
                startLR.unshift([ri, ci]);
                }
              }
            }
          }
        }
      }
    } // 배열간 거리 구하기
    answer = answer.join("");
    return answer;
  }