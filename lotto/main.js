const $result = document.querySelector("#result");

const lotto = Array(45)
  .fill()
  .map((element, index) => {
    return index + 1;
  });

let recommend = [];
const bouns = [];

for (let i = 0; i < lotto.length; i++) {
  let draw = Math.floor(Math.random() * 46);// 45까지 랜덤숫자
  if (draw != 0) {
    if (recommend.length !== 6) {
      if (recommend.includes(draw)) {
      } else {
        recommend.push(draw);
      }
    }
  }
} 
//ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
//보너스 번호 추첨하기부터 하기
//recoment에도 포함되어있지 않고 0보다 큰수
lotto.forEach((el)=>{
    lotto.splice(recommend[el])
});
if (draw != 0){
    bouns.a
}
//ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
recommend = recommend.sort(function(a,b){
    return a -b ;
}); // sort()는 문자열 정리이기 때문에 숫자를 정렬할때는 위와같이 해야한다.

$result.textContent = "로또 번호 : " +recommend+"+"+" 보너스 번호 : ";
