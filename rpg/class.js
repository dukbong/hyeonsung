// class는 객체를 생성하기 위한 템플릿(서식)입니다.

// class없이 class 같은 템플릿 만들기
function createMonster(name, hp, att, xp){
    return {name, hp, att, xp};
}
const monster1 = createMonster("슬라임", 25, 10, 10);
// 결과값 : {name : "슬라임", hp : 25, att : 10, xp : 10}
// 이런식으로 함수를 이용해서 템플릿을 만들수도 있다. 

// ▼ arrow Function으로 표기할때
// const createMonster = (name, hp, att, xp) =>{return{name, hp, att, xp}};


// 생성자 함수를 이용해서 템플릿 만들기
// 생성자 함수를 만들때는 함수명의 첫글자는 대문자로 하는게 개발자들 간 약속
function Monster(name, hp, att, xp){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.xp = xp;
}
// ★★★★★★메소드 추가하기★★★★★
Monster.prototype.heal = function(monster){
    this.hp = this.hp + 20;
};
//이런식으로 다 따로 만들어줘야한다.

const monster2 = new Monster("해골", 26, 10, 10);
// 결과값 : {name : "해골", hp : 26, att : 10, xp : 10}
// this는 원래 window를 의미하지만 new를 만나면
// 새로운 객체를만들고 그 객체를 의미한다.

// 위에 코드를 사용시 만약 new를 빼먹으면 window가 변경되기 때문에 코드 전체에 큰 오류가 나타날수 있습니다.


// class를 이용해서 템플릿 만들기
class CreateMonster{
    constructor(name,hp,att,xp){
        this.name = name;
        this.hp = hp;
        this.att = att;
        this.xp = xp;
    }
    //★★★★★★메소드 추가하기★★★★★★
    heal(monster){
        this.hp = this.hp + 20;
    }
    //따로 만들 필요없이 class안에 다 넣어줄 수 있다.
}

const monster3 = new CreateMonster("마왕",25,10,10);
// 생성자 함수와 비슷하지만 여기서 new를 빼먹으면 오류문구를 나타내준다.
// 오류문구를 나타냄으로써 사고를 미연에 방지할 수 있다.