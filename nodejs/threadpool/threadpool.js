// 노드는 백그라운드를 기본적으로 4개씩 돌린다.
// 노트북이나 컴퓨터의 코어에 맞게 돌리고 싶다면 아래 명령어를 터미널에 입력하면 된다.
// MAC, Linux : UV_THREADPOOL_SIZE=8 (8개씩 돌리겠다.)
// WINDOW : SET UV_THREADPOOL_SIZE=8

const crypto = require("crypto");

const pass = "pass";
const salt = "salt";
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512",()=>{
    console.log("1", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512",()=>{
    console.log("2", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512",()=>{
    console.log("3", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512",()=>{
    console.log("4", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512",()=>{
    console.log("5", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512",()=>{
    console.log("6", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512",()=>{
    console.log("7", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512",()=>{
    console.log("8", Date.now() - start);
});