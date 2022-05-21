const spawn = require("child_process").spawn;

const process = spawn("python", ["test.py"]);
//다른 프로그래밍 언어를 불러올수 있다.

process.stdout.on("data", function(data){
    console.log(data.toString());
});

process.stderr.on("data", function(data){
    console.log(data.toString());
});