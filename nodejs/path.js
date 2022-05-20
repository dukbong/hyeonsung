const path = require("path");
//경로 처리를 할 때 편하다는 장점있다.

console.log(path.join(__dirname, "this.js"));

console.log(path.resolve(__dirname, "..","/this.js")); //절대경로 최상위 루트(/)로 부터...
