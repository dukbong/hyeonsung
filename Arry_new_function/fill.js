//빈 배열을 만들어줄 때 유용하다.

Array(9).fill()
//length = 9이고 안에 들어가 있느 값은 nudefined 이다.
// 결과 [undefined, undefined... undefined]

Array(9).fill(0)
//length = 9이고 안에 들어가 있는 값은 0 이다.
// 결과 [0,0,0,0,0,0,0,0,0]


//fill과 map을 이용하는 예제
Array(9).fill(0).map((value, index)=>{
    return index + 1;
    //배열의 index는 0부터 시작하기 때문에 1을 더해주면 1~9가 나온다.
});
// 결과 [1,2,3,4,5,6,7,8,9]