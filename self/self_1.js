/*배열에 있는 데이터와 객체에 있는 데이터를 비교하여
객체에 없는 배열의 데이터를 push해준다.*/

const a = [1, 2, 3, 5, 6];
const b = [
  { ID: 41403, CLASS_ID: 1 },
  { ID: 41402, CLASS_ID: 2 },
  { ID: 41400, CLASS_ID: 4 },
];

b.forEach((element, index) => {
  if (element.CLASS_ID != a[index]) {
    b.push({ ID: 41401, CLASS_ID: a[index] });
  }
});

const c = a.filter(x => b.some(y => y.CLASS_ID !== x));
console.log(c);
console.log(b);