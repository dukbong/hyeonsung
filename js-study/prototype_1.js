function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();

function Sub(){}
Sub.prototype = new Super();

let o = new Sub();
console.log(o.ultraProp);
//결과값 : true