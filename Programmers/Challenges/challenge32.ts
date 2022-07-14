// 시저암호

function solution1(s: string, n: number): string{
  const answer = [];
  const sArray: string[] = s.split("");
  const upper: string[] = new Array(26).fill(65).map((v,i)=>String.fromCharCode(v+i));
  const under: string[] = new Array(26).fill(97).map((v,i)=>String.fromCharCode(v+i));

  for (let i = 0; i < sArray.length; i++){
    sArray[i] === " " && answer.push(sArray[i]);
    if(sArray[i]){
      const _sArray: number = sArray[i].charCodeAt(0);
      if(_sArray >= 97){
        _sArray + n > 122 && answer.push(under[under.indexOf(sArray[i]) + n - 26]);
        answer.push(under[under.indexOf(sArray[i]) + n]);
      }
      if(_sArray < 97 && _sArray >= 65){
        _sArray + n > 90 && answer.push(upper[upper.indexOf(sArray[i]) + n - 26]);
        answer.push(upper[upper.indexOf(sArray[i]) + n]);
      }
    }
  }
  const lastCheck : string = answer.join("");
  return lastCheck;
}