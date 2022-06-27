// [1차] 뉴스 클러스터링 >> 정확성 46.2 .... 다시푼다... 생각해보자
// 재도전 : 84.6
// 성공 >> 3트

let str1 = "FRANCE";
let str2 = "french";

function solution(str1, str2) {
  let answer = 0;
  let str1Array = [];
  let str2Array = [];
  let intersection = [];
  let union = [];
  for (let i = 0; i < str1.length - 1; i++) {
    str1Array.push(str1.slice(i, i + 2).toLowerCase());
  }
  for (let i = 0; i < str2.length - 1; i++) {
    str2Array.push(str2.slice(i, i + 2).toLowerCase());
  }
  for (let i = 0; i < str1Array.length; i++) {
    if (
      /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\0-9"]/gi.test(str1Array[i])
    ) {
      str1Array.splice(str1Array.indexOf(str1Array[i]), 1);
      i = i - 1;
    }
  }
  for (let i = 0; i < str2Array.length; i++) {
    if (
      /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\0-9"]/gi.test(str2Array[i])
    ) {
      str2Array.splice(str2Array.indexOf(str2Array[i]), 1);
      i = i - 1;
    }
  }
  let objstr1 = str1Array.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  let objstr2 = str2Array.reduce((acc, cur) => {
    if (cur in acc) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  let a = Object.entries(objstr1);
  let b = Object.entries(objstr2);
  let c = [...a, ...b];
  c = c.reduce((acc, cur) => {
    if (!acc[cur[0]]) {
      acc[cur[0]] = { max: cur[1], min: 0 };
    } else {
      if (acc[cur[0]].max < cur[1]) {
        acc[cur[0]].min = acc[cur[0]].max
        acc[cur[0]].max = cur[1];
      }else if (acc[cur[0]].max >= cur[1]){
        acc[cur[0]].min = cur[1];
      }
    }
    return acc;
  }, {});
  for (let i = 0; i < Object.keys(c).length; i++) {
    for (let j = 0; j < c[Object.keys(c)[i]].min; j++) {
      intersection.push(Object.keys(c)[i]);
    }
    for (let k = 0; k < c[Object.keys(c)[i]].max; k++) {
      union.push(Object.keys(c)[i]);
    }
  }
  answer =
    union.length === 0
      ? 65536
      : parseInt((intersection.length / union.length) * 65536);
  return answer;
}

console.log(solution(str1, str2));
