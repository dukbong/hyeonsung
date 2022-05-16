function oneMore(){
    console.log("onemore");
}

function run(){
    console.log("runrun");
    setTimeout(()=>{
        console.log("wow");
    },0);
    new Promise((resolve, reject)=>{
        resolve("hi");
    }).then((result)=>{
      console.log(result);
    });
    oneMore();
}

setTimeout(()=>{
  return run();
},5000);