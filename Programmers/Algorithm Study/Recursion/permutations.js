// 순열
let arr = [1, 2, 3, 4];
let num = 3;

const getPermutations = (arr, num) => {
    const result = [];
    if (num === 1){
        return arr.map((v)=>[v]);
    }
    arr.forEach((fixed, index, origin)=>{
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, num - 1);
        const fixed_permutations = permutations.map((v)=>[fixed, ...v]);
        result.push(...fixed_permutations);
    });
    return result;
}
console.log(getPermutations(arr, num));
