// [1차] 뉴스 클러스터링 >> 정확성 46.2 .... 다시푼다... 생각해보자

let str1 = "FRANCE"; // aaaa >>aa,aa,aa
let str2 = "french"; // aaaa >> aa,aa,aa

function solution(str1, str2) {
  var answer = 0;
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
  console.log(str1Array);
  console.log(str2Array);
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
  if (str2Array.length >= str1Array.length) {
    let temp = str2Array;
    str2Array = str1Array;
    str1Array = temp;
  }
  union = [...str1Array];
  for (let i = 0; i < str2Array.length; i++) {
    if (str1Array.includes(str2Array[i])) {
      intersection.push(str2Array[i]);
    } else {
      union.push(str2Array[i]);
    }
  }
  answer =
    intersection.length === 0
      ? 65536
      : parseInt((intersection.length / union.length) * 65536);
  return answer;
}

console.log(solution(str1, str2));
