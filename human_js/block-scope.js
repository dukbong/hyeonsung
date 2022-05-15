const x = true;
const y = false;

function a() {
    let a = 4;
    y = true; // 접근 가능 하며, false에서 true로 변경
    if(x) {
        let a = 3;
        for (let i = 0; i < a; i++){
            console.log(i);
        }
        if (!y) {
            kkk();
        }
    }
    // z(); // 에러가 발생한다. TDZ
}

a();
const z = (a,b)=>{return a + b};
z(3,5);

/*
if, for 이런것들도 다 block scope이기 때문에 선언을 정리할때 적어줘야한다.
 - for문은 각각 별개의 선언문정리가 필요하다.
 - 매개변수 또한 선언문 정리할때 써줘야한다.
   const z = (a,b) => {return a+b}
   이것은 아래와 같기 때문이다.
   const z = () {
       const a;
       const b;
       return a + b;
   }
   ★ 선언문을 정리 할때는 꼭 위에서부터 내려오면서 해야한다.
*/


