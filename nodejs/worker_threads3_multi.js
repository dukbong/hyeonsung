const { Worker, isMainThread,parentPort,workerData } = require("worker_threads");

const min = 2;
let primes = [];

function findPrimes(start, range){
    let isPrime = true;
    const end = start + range;
    for (let i = start; i < end; i++){
        for (let j = min; j < Math.sqrt(end); j++){
            if (i !== j && i%j ===0){
                isPrime = false;
                break;
            }
        }
        if (isPrime){
            primes.push(i);
        }
        isPrime = true;
    }
}

if (isMainThread){
    const max = 10000000;
    const threadsCount = 8; // 8개의 worker threads를 만들거다.
    const threads = new Set();
    const range = Math.ceil((max-min)/threadsCount);
    let start = min;
    console.time("prime");
    for (let i = 0; i < threadsCount - 1; i++){
        const wStart = start;
        threads.add(new Worker(__filename,{workerData:{start: wStart, range}}));
        start = start + range;
    }
    threads.add(new Worker(__filename,{workerData:{start,range:range+((max-min+1) % threadsCount)}}));
    for (let worker of threads){
        worker.on("error", (err)=>{
            throw err;
        });
        worker.on("exit", ()=>{
            threads.delete(worker);
            if (threads.size === 0){
                console.timeEnd("prime");
                console.log(primes.length);
            }
        });
        worker.on("message", (msg)=>{
            primes = primes.concat(msg);
        });
    }
} else {
    findPrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);
}