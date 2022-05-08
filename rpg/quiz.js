const a = "b";
const c = ["d",true,1];
const e = {g:"h"};
const i = [{j:"k"},{l:"m"}];
const n = {o:{p:"q"}};

const a1 = a;
//원시값은 애초에 복사만된다.
const c1 = [...c];
const c2 = c.slice();
//배열 안에 내용이 있지만 모두 원시데이터이기 때문에 얕은복사를 해도 똑같다.
const e1 = {...e};
//객체 안에 객체가 있는게 아니기 때문에 상관없다.
const i1 = JSON.parse(JSON.stringify(i));
const n1 = JSON.parse(JSON.stringify(n));