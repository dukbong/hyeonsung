const answer = [3,1,4,6];
const value = '3124';

let strike = 0;
let ball = 0;

for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) {
      if (index === i) {
        strike = strike + 1;
      } else {
        ball = ball + 1;
      }
    }
  }

// 위와 아래는 같은 결과를 나타낸다.
// 성능면에서는 for문이 좋지만 편한건 forEach,map,fill이다.
// 이유는 forEach,map,fill은 연달아서 사용할 수 있기 때문이다.
// 참고 : fill.js

answer.forEach((element, i)=>{ 
    // element라는 변수는 배열의 값, i라는 변수는 index를 나타내준다.
    const index = value.indexOf(element);
    if (index > -1) {
      if (index === i) {
        strike = strike + 1;
      } else {
        ball = ball + 1;
      }
    }
});

