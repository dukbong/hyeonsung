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
    return 1;
}).then((result)=>{
    console.log(result); // 1출력
}).then((result)=>{
    console.log(result); // undefined (바로 위 then에서 return 값이 없기 때문이다.)
}).catch(()=>{
    //위에서 에러가 하나라도 발생하면 이쪽으로 이동
    //그렇기 때문에 굳이 맨뒤에 적어 줄 필요는 없다.
    //then 다음에 catch를 넣으면 그 바로 위인 then에서 오류가 있는지 확인이 가능하며
    //오류가 없는것들은 실행이되고 오류가 있는거만 멈출것이다.
}).finally(()=>{

});


function delayP(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    });
};

async function a() {
    try {
        await delayP(1000);
        await delayP(1000);
        await delayP(1000);
        await delayP(1000);
    } catch(error) {
        console.error(error);
    }
}


async function a() {
    const a = await 1;
    console.log("a",a);
    console.log("hmm");
    await null;
    const b = await Promise.resolve(1);
    console.log("b",b);
    return b;
}

//async 를 Promise로 바꾸기
// 1. await -> then

Promise.resolve(1)
    .then((a) => {
        console.log("a",a);
        console.log("hmm");
        return null;
    }).then(()=>{
        return Promise.resolve(1);
    }).then((b)=>{
        console.log("b",b);
        return b;
    });