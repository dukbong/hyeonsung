let n = 15;

function solution(n) {
    let answer = [];
    let check = [4,1,2];
    while(n){
        answer.unshift(check[n%3]);
        n = (n%3===0)?Math.floor(n/3)-1:Math.floor(n/3);
    }
    return answer.join("");
}
console.log(solution(n));