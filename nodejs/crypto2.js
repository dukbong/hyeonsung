// Node에서 지원하는 pbkdf2를 이용한 hash

const crypto = require("crypto");

crypto.randomBytes(64, (err, buf)=>{
    const salt = buf.toString("base64");
    console.log("salt : ", salt);
    crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err,key)=>{
        console.log("password : ", key.toString("base64"));
    });
});

// 이걸 사용할때는 DB에 salt와 비밀번호 둘다 저장해두어야한다.
// salt의 역할은 해독을 어렵게 하기 위함이다.