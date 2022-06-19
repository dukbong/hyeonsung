//멀쩡한 사각형 (테스트 코드 6번 실패)
let w = 9;
let h = 6;

function solution(w,h){
    let answer = 0;
    if( w === h ){
        return answer = w*h-w;
    }else{
        let slope = h/w;
        for(let i = 1; i < w; i++){
            let y = i * slope;
            if (y-Math.floor(y) > 0){
                answer += Math.floor(y);
            }else{
                answer += y;
            }
        }
        return answer * 2;
    }
}
console.log(solution(w,h));