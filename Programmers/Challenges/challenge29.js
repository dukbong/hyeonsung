// 순위검색
// 1트 >> 정확성 : 20 / 효율성 : 0
let info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];
let query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

function solution(info, query) {
    let answer = [];
    info = info.map((v) => v.split(/\s/g));
    query = query.map((v) => v.split(/\s/g).filter((v) => v != "and"));
    let check = query.map((v) => v.filter((v) => v != "-")); // 조건 갯수를 구하기 위해...ㅠ
  
    for (let i = 0; i < query.length; i++) {
      let result = [];
      let last; // 객체로 만들어버리겠다!
      let cnt = 0;
      for (let j = 0; j < query[i].length; j++) {
          for (let k = 0; k < info.length; k++) {
            if (j === query[i].length - 1){
            Number(info[k][j]) >= Number(query[i][j]) &&result.push(info[k].join(""));
            // info[k][info[k].length-1] 대신 info[k].at(-1)을 쓸 수 있는데...
            // 프로그래머스에서 아직은 안된다.
          }else{
            for (let k = 0; k < info.length; k++) {
                info[k].includes(query[i][j]) && result.push(info[k].join(""));
              }
          }
        }
      }
      last = result.reduce((acc, cur) => {
        if (!acc[cur]) {
          acc[cur] = 1;
        } else {
          acc[cur]++;
        }
        return acc;
      }, {});
  
      for (let key in last) {
        const value = last[key];
        if(value === check[i].length){
          cnt ++;
        }
      }
      answer.push(cnt);
    }
    return answer;
  }
console.log(solution(info, query));
