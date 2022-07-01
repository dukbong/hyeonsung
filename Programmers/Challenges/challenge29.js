// 순위검색
// 1트 >> 정확성 : 20 / 효율성 : 0
let info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50"
];
let query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150"
];

function solution(info, query) {
  let answer = [];
  info = info.map((v) => v.split(/\s/g));
  query = query.map((v) => v.replace(/-/g, "").split(/\s/g).filter((v) => v != "and"));

  for (let i = 0; i < query.length; i++) {
    let last = 0;
    for (let j = 0; j < info.length; j++) {
      let check = 0;
      for (let k = 0; k < info[j].length; k++) {
        if (k === info[j].length - 1) {
          Number(info[j][k]) >= Number(query[i][k]) && last++;
        } else {
          if (!info[j][k].includes(query[i][k])) {
            break;
          }
        }
      }
    }
    answer.push(last);
  }
  return answer;
}
console.log(solution(info, query));
