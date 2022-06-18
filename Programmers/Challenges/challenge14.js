// [1차] 비밀지도
function solution(n, arr1, arr2) {
    let answer = new Array(n).fill("");
  arr1 = arr1.map((v)=>{
   let a = v.toString(2);
    for( let i = 0; i < n; i++){
        if (a.length !==  n){
            a = "0".concat(a);
        }
    }
    return a;
});
  arr2 = arr2.map((v)=>{
   let a = v.toString(2);
    for( let i = 0; i < n; i++){
        if (a.length !==  n){
            a = "0".concat(a);
        }
    }
    return a;
});
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(arr1[i][j] === arr2[i][j] && arr1[i][j] === "0"){
        answer[i] = answer[i] + " ";
      }else{
        answer[i] = answer[i] + "#";
      }
    }
  }
  console.log(arr1);
  console.log(arr2);
  return answer;
}