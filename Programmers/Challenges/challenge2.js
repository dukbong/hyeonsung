function solution(new_id) {
    let answer = new_id.toLowerCase(); // 1단계 소문자로 치환
    answer = answer.split("");
    let b = "qwertyuiopasdfghjklzxcvbnm0123456789-_."; // 정규식을 몰랐다...
    for (let i = 0; i < answer.length; i++) {
      if (!b.includes(answer[i])) {
        answer.splice(i, 1);
        i = i - 1;
      }
    }
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === ".") {
        if (answer[i] === answer[i + 1]) {
          answer[i] = "@";
        }
      }
    }
    for (let j = 0; j < answer.length; j++) {
      if (answer[j] === "@") {
        answer.splice(j, 1);
        j = j - 1;
      }
    }
    for (let i = 0; i < answer.length; i++) {
      if (answer[0] === ".") {
        answer.shift();
      } else if (answer[answer.length - 1] === ".") {
        answer.pop();
      } // 4단계 완료
    }
    if (answer.length === 0) {
      answer.push("a");
    } // 5단계
    if (answer.length >= 16) {
      answer = answer.slice(0, 15);
      if (answer[answer.length - 1] === ".") {
        answer.pop();
      }
    } // 6단계 완료
    if (answer.length <= 2) {
      for (let z = 0; z < 3; z++) {
        answer.push(answer[answer.length - 1]);
        if (answer.length === 3) {
          break; // 7단계
        }
      }
    }
    answer = answer.join("");
    return answer;
  }

//   function solution(new_id) {
//     const answer = new_id
//         .toLowerCase() // 1
//         .replace(/[^\w-_.]/g, '')
//         .replace(/\.+/g, '.')
//         .replace(/^\.|\.$/g, '')
//         .replace(/^$/, 'a')
//         .slice(0, 15).replace(/\.$/, '');
//     return answer.padEnd(3, answer[answer.length-1]);
// }