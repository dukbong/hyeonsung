const buffer = Buffer.from("저를 버퍼로 바꿔보세요.");
//문자열 >> 버퍼
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());
// 버퍼 >> 문자열

const array = [Buffer.from("띄엄 "), Buffer.from("띄엄 "), Buffer.from("띄어쓰기")];
// buffer 형태로 배열에 저장
console.log(Buffer.concat(array).toString());
//concat을 이용해서 버퍼들을 묶은 다음 toString으로 버퍼 >> 문자열로 변환


console.log(Buffer.alloc(5));
//길이가 5인 빈 버퍼 만들기