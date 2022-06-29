let s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";

function solution(s) {
    let answer;
    let check = [];
    s = s.replace("{{","").replace("}}","")
      .split("},{")
      .sort((a,b)=>a.length-b.length)
      .map((v)=>v.split(","));
    for (let i = 0; i < s.length; i++){
      check = [...check, ...s[i]];
      check = [...new Set(check)];
    }
    return answer = check.map((v)=>Number(v));
  }
console.log(solution(s));