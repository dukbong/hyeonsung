const array = [1,2,3,4];

const result = [];

for (let i = 0; i < 4; i++){
    result.push(array[i] * 2);
}

// 결과 [2,4,6,8]

//console.log(array) 결과는 [2,4,6,8]

array.map((element)=>{
    //index는 필요없는 예제이기 때문에 map((element, index)=>{})를 사용하지 않았따.
    return element * 2;
});
// 결과 [2,4,6,8]

// console.log(array) 결과는 [1,2,3,4]
// 본래의 값은 변하지 않는다.