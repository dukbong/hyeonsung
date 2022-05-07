const a = [];

for (let i = 0; i < 5; i++){
    const b = [];
    for (let j = 0; j < 4; j++){
        b.push("1");
    }
    a.push(b);
}



a.flat();
//flat을 하면 2차 이상 배열을 1차 배열로 변환시켜준다.

a.flat().every((td) => td.textContent);
// every는 하나라도 빈칸이 있다면 false

a.flat().some((td) => td.textContent);
// some은 하나라도 차있으면 true


//왜 for문이 있는데 이걸 쓰냐?

// for문은 전체를 돌고 그 결과를 알게되지만
// every와 some은 전체를 돌지 않고 하나라도 비어있으면 every에서는 바로 false를
// 하나라도 차있으면 some에서는 바로 true를 반환해주기 때문에
// 시간 절약이 가능하다.