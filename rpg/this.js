class Game{
    constructor(name){
        this.monster = null;
        this.hero = new Hero(this, name);
        this.monsterList = [
            {name : "슬라임", hp : 25, att : 10, xp : 10},
            {name : "스켈레톤", hp : 50, att : 15, xp : 20},
            {name : "마왕", hp : 150, att : 35, xp : 50},
        ];
        this.start();
    }
    start(){
        console.log(this) // ★ >> Game을 나타낸다.
        $gameMenu.addEventListener("submit", (event) => {
            event.preventDefault();
            const input = event.target["menu-input"].value;
            if (input === "1"){ // 모험
                this.changeScreen("battle"); 
                //화살표 함수는 바깥 부분의 this를 그대로 가져오기 때문에 여기서 this는 Game을 나타냅니다.
            }else if (input === "2") { // 휴식
    
            }else if (input === "3"){ //종료
    
            }
        });
        
//ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
//ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ

        console.log (this); //★ >> Game을 나타낸다.
        // const that = this // 방법 1. ★ >> this가 Game을 나타내기 때문에 변수에 저장 후 밑에서 this대신 that을 사용하면 된다.
        $gameMenu.addEventListener("submit", function (event){
            event.preventDefault();
            const input = event.target["menu-input"].value;
            if (input === "1"){ // 모험
                this.changeScreen("battle"); //★ >> $gameMenu을 나타낸다.
        // addEventListener에서 function으로 this를 적으면 this는 Event를 얻은 객체가 되고 여기서는 $gameMenu이다.
        // 이건 무조건이니 외워야한다.
            }else if (input === "2") { // 휴식
    
            }else if (input === "3"){ //종료
    
            }
        });
        $battleMenu.addEventListener("submit", this.onBattleMenuInput);
        this.changeScreen("game");
    }
    changeScreen(screen){
        if(screen === "start"){
            $startScreen.style.display = "block";
            $gameMenu.style.display = "none";
            $battleMenu.style.display = "none";
        } else if (screen === "game"){
            $startScreen.style.display = "none";
            $gameMenu.style.display = "block";
            $battleMenu.style.display = "none";
        } else if (screen === "battle"){
            $startScreen.style.display = "none";
            $gameMenu.style.display = "none";
            $battleMenu.style.display = "block";
        }
    }
    onGameMenuInput = (event) =>{
        event.preventDefault();
        const input = event.target["menu-input"].value;
        if (input === "1"){ // 모험
            this.changeScreen("battle");
        }else if (input === "2") { // 휴식

        }else if (input === "3"){ //종료

        }
    }
    onBattleMenuInput = (event) =>{
        event.preventDefault();
        const input = event.target["battle-input"].value;
        if (input === "1"){ // 공격

        }else if (input === "2"){ // 회복

        }else if (input === "3"){ // 도망

        }
    }
}