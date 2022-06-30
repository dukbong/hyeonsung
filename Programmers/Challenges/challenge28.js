let citations = [3,0,6,1,5];
// return : 3
function solution(citations) {
    let answer = [];
    let max = Math.max(...citations);
    let num = 0;
    for (let i = 0; i <= max; i++){
        let check = citations.filter((v)=> v >= num);
        if(num <= check.length){
            answer.push(num);
            num++
        }else{
            break;
        }
    }
    answer.sort((a,b)=>b-a);
    return answer[0];
}
console.log(solution(citations));