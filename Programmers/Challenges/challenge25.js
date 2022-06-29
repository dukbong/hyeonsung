let priorities = [2, 1, 3, 2];
let location = 2;
function solution(priorities, location) {
    let answer = 0;
    priorities = priorities.map((v,i)=>[i,v]);
    for(let i = 0; i < priorities.length; i++){
        let c = priorities.slice(priorities.indexOf(priorities[1]))
            .sort((a,b)=>b[1]-a[1]);
        if(priorities[i][1] < c[0][1]){
            priorities.push(priorities[i]);
            priorities.shift();
            i--;
        }else{
            let b = priorities.shift();
            answer++;
            if (b[0] === location){
                break;
            }
            i--;
        }
    }
    return answer;
}
console.log(solution(priorities, location));