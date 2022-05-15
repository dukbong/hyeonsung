//call back 함수는 무조건 비동기가 아니다!!!
setTimeout(() => {
    console.log("a");
}, 1000); //<-- 비동기 callback

function calculator (callback,a,b) {
    return callback(a,b);
}
function callback (a,b) {
    return a + b
}
console.log(calculator(callback,3,5)); //<-- 동기 callback

//-------------------------------------------------

const promiseV = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
    },1000);
}); // <-- Promise 생성 방법

promiseV.then(()=>{
    console.log("a");
}); // <-- promise 사용 방법

//promise는 내가 필요한 순간에 사용할 수 있는 장점이있다.

//예제
const p1 = axios.get("서버주소1");
const p2 = axios.get("서버주소2");
const p3 = axios.get("서버주소3");
const p4 = axios.get("서버주소4");
const p5 = axios.get("서버주소5");
const p6 = axios.get("서버주소6");

Promise.allSettled([p1,p2,p3,p4,p5,p6]).then((results)=>{
    //중간에 실패한게 있다면 필터링해서 다시 시도
}).catch((error)=>{}).finally(()=>{});
//Promise.all([p1,p2,p3,p4,p5,p6]).then((results)=>{}).catch((error)=>{})
//all은 중간에 하나라도 오류가 나면 어디가 에러가 난지 알수 없어서 다시 전체를 손봐야하지만
//allSettled는 results에 모든 기록이 저장되기 때문에 에러가 난걸 확인할 수 있다.
//이렇게 사용할 수 있다.
//아래는 promise를 사용하지 않았을때 상황이다.

axios.get ("서버주소1", function (데이터1) {
    axios.get("서버주소2", function (데이터2) {
        axios.get ("서버주소3", function (데이터3) {
            //..... 이렇게 callback 함수를 계속 써야한다.
        });
    });
});