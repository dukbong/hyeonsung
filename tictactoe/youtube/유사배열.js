//$table.children이라고 콘솔창에 치면
//HTMLCollection(3) [tr,tr,tr]
//이렇게 나오는데 이건 배열이 아닌 유사배열이라고 합니다.
//배열이 아니기 때문에 forEach같은 함수를 사용할 수 없습니다.
//이를 배열로 만들어 줄때는 사용할 수 있는 Array.from이 있습니다.

// Array.from($table.children);
//이러면 배열로 변환됩니다.

///예시로 알아보기


let ex = {
    0 : "a",
    1 : "b",
    2 : "c",
    length : 3
};
// 위에 있는 것이 유사배열이다.


console.log(ex);
console.log(Array.from(ex));