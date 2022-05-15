// 한번 비동기는 영원한 비동기!!
// 비동기는 동시의 문제가 아니라 순서의 문제다!!

setTimeout (()=>{
    console.log("a");
},0)
setTimeout (()=>{
    console.log("b");
},1000)
setTimeout (()=>{
    console.log("c");
},2000)

/*
★ promise, process, nextTick은 마이크로 테스크큐
                       나머지는 매크로 테스크큐

마이크로와 매크로 둘중에서 우선순위는 마이크로 이다.
*/