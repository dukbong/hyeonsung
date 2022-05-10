const $table = document.getElementById("table");
const $score = document.getElementById("score");
let data = [];

function draw() {
    data.forEach((rowData, i)=>{
        rowData.forEach((cellData, j) =>{
            if (cellData > 0) {
                $target.textContent = cellData;
                $target.className = "color-" + cellData;
            }else {
                $target.textContent = "";
                $target.className = "";
            }
        });
    });
}

function put2ToRandomCell() {
    const emptyCells = [];
    data.forEach(function (rowData, i) {
        rowData.forEach(function (cellData,j) {
            if (!cellData) {
                emptyCells.push([i,j]);
            }
        });
    });
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    data[randomCell[0]][randomCell[1]] = 2;
}

function startGame(){
    const $fragment = document.createDocumentFragment();
    [1,2,3,4].forEach(function () {
        const rowData = [];
        data.push(rowData);
        console.log(data);
        const $tr = document.createElement("tr");
        [1,2,3,4].forEach(()=>{
            rowData.push(0);
            const $td = document.createElement("td");
            $tr.appendChild($td);
        });
        $fragment.appendChild($tr);
    });
    $table.appendChild($fragment);
    put2ToRandomCell();
    draw();
}


startGame();