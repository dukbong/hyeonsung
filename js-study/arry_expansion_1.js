let arr = new Array("seoul","new york","busan","ladarkh");
console.log("-----------------");
console.log(arr);
console.log("-----------------");
function getRandomValueFromeArray(){
    let index = Math.floor(arr.length * Math.random());
    //Math.floor : 소수점은 다 버린다.
    //Math.random() : 0보다 크고 1보다 작은 실수를 나타낸다.
    //ex) 0.01,0.958...
    return arr[index];
}
console.log(getRandomValueFromeArray(arr));