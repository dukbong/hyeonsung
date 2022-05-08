const $startScreen = document.querySelector("#start-screen");
const $gameMenu = document.querySelector("#game-menu");
const $battleMenu = document.querySelector("#battle-menu");
const $heroName = document.querySelector("#hero-name");
const $heroLevel = document.querySelector("#hero-level");
const $heroHp = document.querySelector("#hero-hp");
const $heroXp = document.querySelector("#hero-xp");
const $heroAtt = document.querySelector("#hero-att");
const $monsterName = document.querySelector("#monster-name");
const $monsterHp = document.querySelector("#monster-hp");
const $monsterAtt = document.querySelector("#monster-att");
const $message = document.querySelector("#message");

class Game {
  constructor(name) {
    this.monster = null;
    this.hero = null;
    this.monsterList = [
      { name: "슬라임", hp: 25, att: 10, xp: 10 },
      { name: "스켈레톤", hp: 50, att: 15, xp: 20 },
      { name: "마왕", hp: 150, att: 35, xp: 50 },
    ];
    this.start(name);
  }
  start(name) {
    $gameMenu.addEventListener("submit", this.onGameMenuInput);
    $battleMenu.addEventListener("submit", this.onBattleMenuInput);
    this.changeScreen("game");
    this.hero = new Hero(this, name);
    this.updateHeroStat();
  }
  changeScreen(screen) {
    if (screen === "start") {
      $startScreen.style.display = "block";
      $gameMenu.style.display = "none";
      $battleMenu.style.display = "none";
    } else if (screen === "game") {
      $startScreen.style.display = "none";
      $gameMenu.style.display = "block";
      $battleMenu.style.display = "none";
    } else if (screen === "battle") {
      $startScreen.style.display = "none";
      $gameMenu.style.display = "none";
      $battleMenu.style.display = "block";
    }
  }
  onGameMenuInput = (event) => {
    event.preventDefault();
    const input = event.target["menu-input"].value;
    if (input === "1") {
      // 모험
      this.changeScreen("battle");
      const randomIndex = Math.floor(Math.random() * this.monsterList.length);
      const randomMonster = this.monsterList[randomIndex];
      this.monster = new Monster(
        this,
        randomMonster.name,
        randomMonster.hp,
        randomMonster.att,
        randomMonster.xp
      );
      this.updateMonsterStat();
      this.showMessage(`몬스터와 마주쳤다. ${this.monster.name}인것 같다!`);
    } else if (input === "2") {
      // 휴식
      this.hero.hp = this.hero.maxHp;
      this.updateHeroStat();
      this.showMessage("충분한 휴식을 취했다.");
    } else if (input === "3") {
      //종료
      this.showMessage("");
      this.quit();
    }
  };
  onBattleMenuInput = (event) => {
    event.preventDefault();
    const input = event.target["battle-input"].value;
    if (input === "1") {
      // 공격
      const { hero, monster } = this;
      hero.attack(monster);
      monster.attack(hero);
        if (hero.hp <= 0){
            this.showMessage(`${hero.lev} 레벨에서 전사. 새주인공을 생성하세요.`);
            this.quit();
        }else if (monster.hp <= 0){
            this.showMessage(`몬스터를 잡아 ${monster.xp} 경험치를 얻었다.`);
            hero.getXp(monster.xp);
            this.monster = null;
            this.changeScreen("game");
        }else{ // 전투 진행중
            this.showMessage(`${hero.att}의 데미지를 주고, ${monster.att}의 데미지를 받았다.`)
        }
      this.updateHeroStat();
      this.updateMonsterStat();
    } else if (input === "2") {
      // 회복
      const {hero, monster} = this;
      hero.hp = Math.min(hero.maxHp, hero.hp + 20);
      //Math.min(a,b) >> a와 b 둘중에 작은것
      monster.attack(hero);
      this.showMessage("체력이 조금 회복했다!");
      this.updateHeroStat();
    } else if (input === "3") {
      // 도망
      this.changeScreen("game");
      this.showMessage("부리나케 도망쳣다.");
      this.monster = null;
      this.updateMonsterStat();
    }
  };
  updateHeroStat() {
    const { hero } = this;
    if (hero === null) {
      $heroName.textContent = "";
      $heroLevel.textContent = "";
      $heroHp.textContent = "";
      $heroXp.textContent = "";
      $heroAtt.textContent = "";
      return;
    }
    $heroName.textContent = hero.name;
    $heroLevel.textContent = `${hero.lev}Lev`;
    $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
    $heroXp.textContent = `XP: ${hero.xp}/${15 * hero.lev}`;
    $heroAtt.textContent = `ATT: ${hero.att}`;
  }
  updateMonsterStat() {
    const { monster } = this;
    if (monster == null) {
      $monsterName.textContent = "";
      $monsterHp.textContent = "";
      $monsterAtt.textContent = "";
      return;
    }
    $monsterName.textContent = monster.name;
    $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
    $monsterAtt.textContent = `ATT: ${monster.att}`;
  }
  showMessage(text) {
    $message.textContent = text;
  }
  quit(){
      this.hero = null;
      this.monster = null;
      this.updateHeroStat();
      this.updateMonsterStat();
      $gameMenu.removeEventListener("submit", this.onGameMenuInput);
      $battleMenu.removeEventListener("submit", this.onBattleMenuInput);
      this.changeScreen("start");
      game = null;
  }
}
class Unit{
    constructor(game,name, hp, att, xp){
        this.game = game;
        this.name = name;
        this.maxHp = hp;
        this.hp = hp;
        this.att = att;
        this.xp = xp;
    }
    attack(target){
        target.hp = target.hp - this.att;
    }
}

class Hero extends Unit {
    //Hero 클래스는 Unit에 있는 걸 쓸수 있다.
    //이것이 상속이다.
  constructor(game, name) {
    super(game, name, 100, 10, 0);
    //super()를 하면 부모클래스 생성자를 호출할 수 있다.
    //extends Unit을 했기 때문에 Hero의 부모클래스는 Unit이 된다.
    // this.game = game;
    // this.name = name;
    this.lev = 1;
    // this.maxHp = 100;
    // this.hp = 100;
    // this.xp = 0;
    // this.att = 10;
    // 부모클래스와 겹치는 부분은 필요없어진다.
  }
//   attack(target) {
//     target.hp = target.hp - this.att;
//   } // Unit으로부터 상속받았기 때문에 중복되는 코드이다.
  heal(monster) {
    this.hp = this.hp + 20;
    this.hp = this.hp - monster.att;
  }
  getXp(xp){
      this.xp = this.xp + xp;
      if (this.xp >= this.lev * 15){
          this.xp = this.xp - this.lev *15;
          this.lev = this.lev + 1;
          this.maxHp = this.maxHp + 5;
          this.att = this.att + 5;
          this.hp = this.maxHp;
          this.game.showMessage(`레벨업! 레벌 ${this.lev}`);
      }
  }
}

class Monster extends Unit{
  constructor(game, name, hp, att, xp) {
    super(game, name, hp, att, xp);
    // this.game = game;
    // this.name = name;
    // this.maxHp = hp;
    // this.hp = hp;
    // this.xp = xp;
    // this.att = att;
    // 부모클래스와 겹치는 부분은 필요없어진다.
  }
//   attack(target) {
//     target.hp = target.hp - this.att;
//   } // Unit으로부터 상속받았기 떄문에 중복되는 코드이다.

// 마약 attack(target)에서 조금 다른 부분이있다면?

    //  attack(target){
    //      target.hp = target.hp - this.att;
    //      console.log("몬스터가 공격했다.");
    //  }
        // attack(target){
        //     super.attack(target);
        //     console.log("몬스터가 공객했다.");
        // }
        //이렇게 부모클래스에서 attack이라는 prototype만 가져올수도 있다.

}


let game = null;

$startScreen.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target["name-input"].value;
  game = new Game(name);
});
