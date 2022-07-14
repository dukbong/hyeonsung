// 최대공약수, 최소공배수

function solution4(n:number, m:number) : number[]{
  let answer:number[] = [];
  let check = n*m;
  if( n > m ){
    [n, m] = [m, n];
  }
  while(m % n !== 0){
    let a = m/n;
    m = n;
    n = a;
  }
  answer.push(n,check / n);
  return answer;
}