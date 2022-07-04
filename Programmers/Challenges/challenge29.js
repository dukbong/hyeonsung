// 순위검색
// 1트 >> 정확성 : 20 / 효율성 : 0
// 2트 >> 정확성 : 100 / 효율성 : 0
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
  let last;
  info = info.map((v) => v.split(/\s/g));
  query = query.map((v) => v.replace(/-/g, "").split(/\s/g).filter((v) => v != "and"));
  query.map((v)=>{
    last = 0;
    for (let i = 0; i < info.length; i++){
      for (let j = 0; j < info[i].length; j++){
        if (j === info[i].length-1){
          Number(info[i][j]) >= Number(v[j]) && last++;
        }else{
          if(!info[i][j].includes(v[j])){
            break;
          }
        }
      }
    }
    answer.push(last);
  });
  return answer;
}
console.log(solution(info, query));
