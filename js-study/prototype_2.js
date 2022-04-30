function machine(){
    this.skill_1 = "make";
    this.skill_2 = "delete"
}

let machine_A = new machine();

machine.prototype.skill_3 = "modify";
//언제 선언하여도 function machine()을 부모로 가지고 있는 생성자에게 적용된다.

let machine_B = new machine();

console.log(machine_A.skill_3);
//machine_A에는 skill_3라는 내용이 없지만 prototype으로 추가해주었기 때문에 가능하다.
console.log(machine_B.skill_3);