//Node는 싱글 스레드 방식이지만 "멀티 스레드도 가능은 하다".

const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  // Main threads
  const worker = new Worker(__filename);
  worker.on("message", (value) => {
    return console.log("worker threads로 부터 ", value);
  });
  worker.on("exit", ()=>{
      return console.log("worker threads 끝");
  });
  worker.postMessage("ping");
} else {
  // worker threads
  parentPort.on("message", (value) => {
    console.log("Main threads로 부터 ", value);
    parentPort.postMessage("pong");
    parentPort.close();
  });
}
