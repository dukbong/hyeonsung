// 편의 기능을 모아둔 module
// deprecate와 promisify가 자주 사용된다.

const util = require("util");
const crypto = require("crypto");

const dontUseMe = util.deprecate((x, y)=>{
    console.log(x+y);
}, "dontUseMe 함수에서 오류가 발생했기 때문에 사용하지 마세요.");

dontUseMe(1,2);
// deprecate를 사용하면 값과 함께 아래 작성한 오류 메시지도 같이 출력된다.
// 라이브러리를 만들때 주로 사용된다고 한다.

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64).then((buf)=>{
    console.log(buf.toString("base64"));
}).then((error)=>{
    console.error(error);
});
// Node에서는 현재 Promise 지원이 안되는 경우가 많기 때문에
// 이럴때는 util.promisify(callback) 이렇게 사용하면 then이나 async / await을 사용할 있다.
// 단 callback이 (error, data) =>{} 형식이여야 한다.