const fs = require("fs");

console.log("before : ", process.memoryUsage().rss);

const readStream = fs.createReadStream("./big.txt");
const writeStream = fs.createWriteStream("./big3.txt");

readStream.pipe(writeStream);
// readStream으로 64kb씩 읽어온걸 pipe를 통해 writeStream으로 big3.txt에 작성한다.
readStream.on("end", ()=>{
    console.log("stream : ", process.memoryUsage().rss);
});

//buffer-memory와 비교했을때 훨씬 더 메모리를 덜 사용하는걸 알수 있다.