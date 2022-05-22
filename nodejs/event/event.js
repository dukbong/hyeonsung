const EventEmitter = require("events");
const { memoryUsage } = require("process");

const myEvent = new EventEmitter();
myEvent.addListener("event1", ()=>{
    console.log("이벤트1");
});
//addListener 대신 on을 쓸수 있다.
myEvent.on("event2", ()=>{
    console.log("이벤트2");
});
myEvent.on("event2", ()=>{
    console.log("이벤트2 추가");
});

myEvent.once("event3", ()=>{
    console.log("이벤트3");
}); //once를 사용하면 딱 1번만 실행이된다.

myEvent.emit("event1");
// 이벤트1
myEvent.emit("event2");
// 이벤트2
// 이벤트2 추가
myEvent.emit("event3");
// 이벤트3
myEvent.emit("event3");
// 실행안된다.

myEvent.on("event4", ()=>{
    console.log("이벤트4");
});

myEvent.removeAllListeners("event4"); // 특정 이벤트 전체삭제
myEvent.emit("event4");
// 실행 안된다.

const lister = ()=>{
    console.log("이벤트5");
}
myEvent.on("event5", lister);
myEvent.on("event5", ()=>{
    console.log("이벤트5 추가");
});
myEvent.removeListener("event5", lister);
// 2가지 이상 이벤트가 있을때는 callback함수를 적어주면 그거만 삭제가 된다.
myEvent.emit("event5");

console.log(myEvent.listenerCount("event2"));
// event2에 callback 함수가 몇개 있는지 알수 있다.