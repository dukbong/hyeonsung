// 스트림 방식은 메모리를 적게 사용할 수있는 장점이 있다.
// 예를 들어 남은 메모리가 80bite 인데 크기가 160bite를 파일을 읽어올 수 없지만
// 이걸 16bite로 쪼개서 읽어온다면 충분히 가능하다.

const fs = require("fs");

const readStream = fs.createReadStream("./read.txt", {highWaterMark : 16});
// createReadStream <== 한번에 64 Kb를 읽는다.
// 하지만 지금 read.txt의 크기가 162 bite이기 때문에 stream을 정확히 알아 볼수 없다.
// 그러기 때문에 {highWaterMark : 16}을 통해 한번에 읽는 크기를 조절했다. 

const data = [];
readStream.on("data", (chunk)=>{
    data.push(chunk);
    console.log("data", chunk, chunk.length);
});

readStream.on("end", ()=>{
    console.log("end : ",Buffer.concat(data).toString());
});

readStream.on("error", (err)=>{
    console.log("error: ",err);
});