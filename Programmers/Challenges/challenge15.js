//오픈채팅방
let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."];
function solution(record) {
  let answer = [];
  record = record.map((v) => v.split(" "));
  let check = {};
  for (let i = 0; i <record.length; i++) {
    if (record[i].length === 3) {
        check[record[i][1]] = record[i][2];
    }
  }
  console.log("check : ",check);
  console.log("record : ",record);
  for (let j = 0; j < record.length; j++) {
    if (record[j].includes("Enter")) {
      answer.push(`${check[record[j][1]]}님이 들어왔습니다.`);
    } else if (record[j].includes("Leave")) {
      answer.push(`${check[record[j][1]]}님이 나갔습니다.`);
    }
  }
  return answer;
}
console.log(solution(record));