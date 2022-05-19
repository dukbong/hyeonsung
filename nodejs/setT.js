setTimeout(()=>{ // 2초후에 node~hi!를 입력한다.
    return console.log("node~ hi!");
},2000);


const say = setInterval(()=>console.log("hi~"), 2000);
//2초 마다 실행한다.



//★ setTimeout 0초를 할때는 차라리 아래있는걸 쓰는게 좋다.

setImmediate(()=>{
    return console.log("hello");
});