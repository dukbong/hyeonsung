//5 x 4  이차원 배열을 만들고 배열의 요소를 1로 만들어라

const $table = document.createElement("table");

for (let i = 0; i < 5; i++) {
  const $tr = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    const $td = document.createElement("td");
    $td.textContent = "1";
    $tr.append($td);
  }
  $table.append($tr);
}

document.body.append($table);


const a = [];

for (let i = 0; i < 5; i++){
    const b = [];
    for (let j = 0; j < 4; j++){
        b.push("1");
    }
    a.push(b);
}

console.log(a);