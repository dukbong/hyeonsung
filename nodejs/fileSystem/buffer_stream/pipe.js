const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./read.txt",{highWaterMark : 16});
const zilbStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./writeme.txt");
const writeStream2 = fs.createWriteStream("./writeme2.txt.gz");

readStream.pipe(writeStream);
// 1. readStream에서 16bite씩 쪼개서 읽어오고
// 2. pipe를통해 읽어온것을 writeStream에 적어준다.

readStream.pipe(zilbStream).pipe(writeStream2);
// 1. readStream에서 16bite씩 쪼개서 읽어오고
// 2. pipe를 통해 그 읽어온것을 zilbStream에서 압축하고
// 3. pipe를 통해 그 압축한것을 writeStream2에 작성한다.
// >> 압축한 파일은 readFile을 사용해도 읽어올수 없다.