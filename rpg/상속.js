class a {
    constructor(game, name, hp, att, xp) {
      this.game = game;
      this.name = name;
      this.maxHp = hp;
      this.hp = hp;
      this.xp = xp;
      this.att = att;
    }
    attack(target) {
      target.hp = target.hp - this.att;
    }
  }

class b{
    constructor(game, name, hp, att, xp) {
        this.game = game;
        this.name = name;
        this.maxHp = hp;
        this.hp = hp;
        this.xp = xp;
        this.att = att;
      }
      attack(target) {
        target.hp = target.hp - this.att;
      }
      skill(target){
          this.hp = this.maxHp;
      }
}