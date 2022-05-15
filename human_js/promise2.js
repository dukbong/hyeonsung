let a = 2;

const p = new Promise((resolve,reject)=>{
    console.log("first");
    setTimeout(()=>{
        a = 5;
        console.log(a);
        resolve(a);
        // resolve 값은 p.then callback 함수에 매개변수가 된다.
        // p.than에서 result = new Promise의 resolve(a)
    });
});

console.log("second");

p.then((result)=>{
    console.log("result", result);
});

/*
Call Stack

console.log("result", result)       <---- 20 21
()=>{} 함수호출                     <---- 19 22
resolve                             <---- 16 17
console.log(a)                      <---- 14 15
※a = 5                              
()=>{} 함수호출                     <---- 13 18
※setTimeout  
p.then() 함수호출                   <---- 10 11
console.log("second")               <---- 8 9
setTimeout 함수 호출                <---- 4 5
console.log("first")                <---- 3 6
(resolve, reject) => {} 함수 호출   <---- 2 7
※ new Promise는 자동으로 동기로 호출이된다.
anonymous                           <---- 1 12
*/

/*
선언정리
anonymous > let a(2), const p   <---- 처음
anonymous > let a(5), const p   <---- Call Stack 13번에서 변경
*/

/*
백그라운드
setTimeout - function - 0   <--- 1
p.then - function           <--- 2
※Promise에서 resolve가 실행되면 쓸수 있다.
*/

/*
테스크큐

매크로      : function (setTimeout)     <---- 1
마이크로    : console.log("result", 5)   <---- 2
*/