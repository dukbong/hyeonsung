// 최후의 수단으로 사용
// 콜백 함수의 동작이 보장되지 않음 (공식문서에 나와있음)
// 복구 작업용으로 쓰는것은 부적합
// ★ 단지 에러 내용을 기록하는 용도로 쓰는게 좋다.

process.on("uncaughtException", (err)=>{
    console.error("에러 발생 : ", err);
});
// process.on("uncaughtException") 이 문구 때문에
// 아래에서 발생하는 모든 error 메시지가 위에서 출력된다.

setInterval(()=>{
    throw new Error("서버를 고장내주마");
},1000); 

setTimeout(()=>{
    console.log("실행됩니다.");
},2000);
