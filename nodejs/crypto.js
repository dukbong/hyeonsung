// HASH > 단방향 암호화
// 일반적으로 비밀번호를 hash 시킨다.
const crypto = require("crypto");

console.log("base64 : ", crypto.createHash("sha512").update("비밀번호").digest("base64"));
console.log("hex : ", crypto.createHash("sha512").update("비밀번호").digest("hex"));
console.log("base64 : ", crypto.createHash("sha512").update("다른비밀번호").digest("base64"));

// update(문자열) : 변환할 문자열을 넣어준다.
// digest(인코딩) : 인코딩할 알고리즘을 넣어준다.
// 인코딩에는 주로 base64, hex, latin1이 주로 사용된다.
// 이중에서 base64가 결과물로 문자열을 반환하는데 가장 짧아서 애용된다.


// 대칭형 암호화 > 같은 key로 암호화 했다 복호화했다 하는 것
// 단점 : 프론트와 서버간 사용할 수 없다.
// AES를 추천

// 비대칭형 암호화
// RSA를 추천