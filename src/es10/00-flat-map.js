const array = [1, 2, 3 , [4, [5], 6, 7, 8]];

console.log(array.flat(4));

//flatmap

const array2 = [1,2,3,4];
console.log(array2.flatMap(v => [ v, v * 2]))
console.log(array2.flatMap(v => [ v * 2, v]))
console.log(array2.flatMap(v => [ v, v * 2, v]))
console.log(array2.flatMap(v => [ v]))