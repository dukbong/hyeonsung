// 멀쩡한 사각형 개수

type Sol = (a:number, b:number) => number;

const solution: Sol = (w, h)=>{
  let answer = 0;
  if(w > h) [w, h] = [h, w];
  for(let i = 0; i < w; i++){
    answer = answer + (Math.floor(h * i / w) * 2);
  }
  return answer;
}