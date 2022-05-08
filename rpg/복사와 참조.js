const monsterList = [
    { name: "슬라임", hp: 25, att: 10, xp: 10 },
    { name: "스켈레톤", hp: 50, att: 15, xp: 20 },
    { name: "마왕", hp: 150, att: 35, xp: 50 },
  ];

//참조

monster = monsterList[0];
monster.hp = 10;

// monsterList = [
//     { name: "슬라임", hp: 10, att: 10, xp: 10 },
//                       ------
//     { name: "스켈레톤", hp: 50, att: 15, xp: 20 },
//     { name: "마왕", hp: 150, att: 35, xp: 50 },
//   ];
// 이렇게 원본 데이터가 수정이 된다.

//----------------------------------------------------------------

// 깊은복사

monster = JSON.parse(JSON.stringify(monsterList[0]));
monster.hp = 10;
// monsterList = [
//     { name: "슬라임", hp: 25, att: 10, xp: 10 },
//     { name: "스켈레톤", hp: 50, att: 15, xp: 20 },
//     { name: "마왕", hp: 150, att: 35, xp: 50 },
//   ];
// 복사를 했기 때문에 원본 데이터에는 수정이 일어나지 않는다.

//얕은 복사

monster = {...monsterList[0]};
// 얕은 복사는 큰 틀만 복사하고 내부는 참조를 한다.
// 하지만 얕은 복사의 경우 깊은복사와 큰 차이점이 존재 합니다.

const a = [];
const b = "hi";
const c = {};

const arr = [a,b,c];
// [[],"hi",{}]

const arr1 = [...arr];
// 얕은복사

arr1[0].push("1");
// arr1 = [[1],"hi",{}]
// arr = [[1],"hi",{}]
// 여기서 알 수 있는건 얕은 복사의 경우 큰 틀 예제에서는 [      ]이거만 복사되고
// 내부에 있는 내용들은 참조를 하게 된다.
// 단. const b의 "hi" 같은 원시데이터는 참조가 없기 때문에 무조건 복사가 된다.
// 원시데이터 : 문자열, 숫자, boolean, null, undefined