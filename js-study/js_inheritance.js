function Person(name){
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return "My name is " + this.name;
}

function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}

let a = new Programmer("js300");
console.log(a.introduce());
console.log(a.coding());