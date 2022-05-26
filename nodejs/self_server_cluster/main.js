const $img = document.querySelector("#img");
const $button = document.querySelector("#button");
const $sub = document.querySelector("#sub");
const $h = document.querySelector("#h");
const $table = document.createElement("table");
const $p = document.querySelector("p");

const Index = {
    snp : [
        ["ETF", "총 수수료", "운용수수료", "기타비용"],
        ["VOO", "0.03%", "-", "-"],
        ["IVV", "0.03%", "-", "-"],
        ["SPY", "0.09%", "-", "-"],
        ["TIGET S&P 500", "0.15%", "0.07%", "0.08%"],
        ["KINDEX S&P 500", "0.17%", "0.07%", "0.1%"],
        ["KODEX S&P 500 TR", "0.18%", "0.05%", "0.13%"],
        ["KBSTAR S&P 500", "0.42%", "0.02%", "0.4%"],
    ],
    nas : [
        ["ETF", "총 수수료", "운용수수료", "기타비용"],
        ["QQQ","0.20%","-","-"],
        ["KODEX NASDAQ 100 TR","0.16%","0.05%","0.11%"],
        ["KINDEX NASDAQ 100","0.18%","0.07%","0.11%"],
        ["KBSTAR NASDAQ 100","0.18%","0.02%","0.16%"],
        ["TIGER NASDAQ 100","0.21%","0.07%","0.14%"],
    ]
}

function createTable (In) {// 자료를 테이블로 작성
    for (let i = 0; i <Index[In].length; i++){
        //매개변수를 쓸때는 꼭 []로 해야한다.
        // Index.In.length를 하게 되면 Uncaught TypeError가 나옵니다.
        const $tr = document.createElement("tr");
        for (let j = 0; j < Index[In][0].length; j++){
            const $td = document.createElement("td");
            $td.textContent = `${Index[In][i][j]}`;
            $tr.appendChild($td);
        }
        $table.appendChild($tr);
    }
    $sub.appendChild($table);
} 

$img.addEventListener("click",(event)=>{
    if (event.target.id === "snp"){
        $img.style.display = "none"; // 배경화면 지움
        $h.textContent = "S&P 500";
        createTable(event.target.id);
        $sub.style.display = "block" 
        $button.style.display = "block"
        $p.style.display = "none";
    } else if (event.target.id === "nas"){
        $img.style.display = "none";
        $h.textContent = "NASDAQ 100";
        createTable(event.target.id);
        $sub.style.display = "block";
        $button.style.display = "block";
        $p.style.display = "none";
    }
});

$button.addEventListener("click",()=>{
    $sub.style.display = "none";
    $img.style.display = "block";
    $button.style.display = "none";
    $table.textContent = "";
    $p.style.display = "block";
    $h.textContent = "INDEX CHOICE";
})