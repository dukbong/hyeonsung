const odd = "홀수입니다.";
const even = "짝수입니다.";

module.exports={ //모듈만들기
    odd : odd,
    even : even,
}; // 1개 저장할때 좋은방법

// 같은 문법
/*
exports.odd = odd;
exports,even - even;

주의사항 : exports.변수와 module.export를 같은 파일에서 사용할수는 없다.
2개 이상 저장할때 좋은방법

*/

/*모듈은 한가지 값, 배열, 객체 모두 만들 수 있지만
2개 이상을 만들때는 객체로 만드는것이 좋다.*/
