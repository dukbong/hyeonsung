//기능개발
let progresses = [93, 30, 55, 50];
// let progresses = [95, 90, 99, 99, 80, 99];
let speeds = [1, 30, 5];
// let speeds = [1, 1, 1, 1, 1, 1];
//result = [2,1]
function solution(progresses, speeds) {
    let answer = [];
    progresses = progresses.map((v, i)=>Math.ceil((100-v) / speeds[i]));
    progresses.push(101);
    console.log("progresses",progresses);
    for(let i = 0; i < progresses.length; i++){
        for (let j = i; j < progresses.length; j++){
            if (progresses[i] < progresses[j]){
                answer.push(progresses.slice(i,j).length);
                progresses.splice(i,j);
                i = i -1;
                break;
            }
        }
    }
    return answer;
}
console.log(solution(progresses,speeds));