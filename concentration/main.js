const $wrapper = document.querySelector('#wrapper');

const total = parseInt(prompt("카드의 개수를 짝수로 입력하세요. 최대 20장"));
const colors = ["red","orange","yellow","green","white","pink","cyan","violet","gray","black"];
let colorSlice = colors.slice(0,total/2);
let colorCopy = colorSlice.concat(colorSlice);
//concat으로 이어붙이기
//["red","orange","yellow","green","white","pink","red","orange","yellow","green","white","pink"]
let shuffled = [];
let clicked= [];
let completed = [];
let clickable = false;
let startTime;
let EndTime;

function shuffle(){
    for (let i = 0; 0 < colorCopy.length; i++){
        const randomIndex = Math.floor(Math.random() * colorCopy.length);
        shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
        //splice를 써서 한개씩 빼서 shuffled에 넣는다.
    }
}

function createCard(i){ //div.card > div.cardInner > (div.card-front + div.card-back)
    const card = document.createElement("div");
    card.className = "card";
    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";
    const cardFront = document.createElement("div");
    cardFront.className = "card-front";
    const cardBack = document.createElement("div");
    cardBack.className = "card-back";
    cardBack.style.backgroundColor = shuffled[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    return card;
}

function onClickCard(){
    if(!clickable || completed.includes(this) || clicked[0]===this){
        return;
    }
    this.classList.toggle("flipped");
    clicked.push(this);
    if(clicked.length !== 2){
        return;
    }
    const firstBackColor = clicked[0].querySelector(".card-back").style.backgroundColor;
    const secondBackColor = clicked[1].querySelector(".card-back").style.backgroundColor;
    if (firstBackColor === secondBackColor){
        completed.push(clicked[0]);
        completed.push(clicked[1]);
        clicked = [];
        if(completed.length !== total){
            return;
        }else if (completed.length === total){
            EndTime = new Date();
            setTimeout(()=>{
                alert(`축하합니다.\n시간은 ${(EndTime-startTime)/1000}초 걸렸습니다.`);
                resetGame();
            },500);
        }
        return;
    }else if (firstBackColor !== secondBackColor){
        clickable = false;
        setTimeout(()=>{
            clicked[0].classList.remove("flipped");
            clicked[1].classList.remove("flipped");
            clicked = [];
            clickable = true;
        },1000);
        //시간을 안주면 틀린카드 골랐을때 안보인다..
    }
}

function startGame(){
    clickable = false;
    shuffle();
    for (let i = 0; i < total; i++){
        const card = createCard(i);
        card.addEventListener("click",onClickCard);
        $wrapper.appendChild(card);
    }
    document.querySelectorAll(".card").forEach((card, index)=>{
        setTimeout(()=>{
            card.classList.add("flipped");
        }, 1000+100*index); // 카드 공개
    });

    setTimeout(()=>{
        document.querySelectorAll(".card").forEach((card)=>{
            card.classList.remove("flipped");
        });
        clickable = true;
        startTime = new Date();
    }, 5000); //카드 감추기

}
startGame(); 

function resetGame(){
    $wrapper.innerHTML = "";
    colorCopy = colors.concat(colors);
    shuffled = [];
    completed = [];
    startGame();
}