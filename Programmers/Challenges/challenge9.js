function solution(s) {
    let answer;
    let trans = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9
    };
    for (let i = 0; i < Object.keys(trans).length; i++) {
      let key = Object.keys(trans)[i];
      if (s.includes(key)) {
        let value = trans[key];
        //★★★★★★★★★★★★★★★★★★★★
        // replace 정규식으로 replaceAll 효과내기
        let keyall = new RegExp(key, "gi");
        s = s.replace(keyall, value);
        //★★★★★★★★★★★★★★★★★★★★
      }
    }
    return (answer = parseInt(s));
  }
  