// De structuring 

let arr = [1, 2, 3, 4, 5];

let [a, b, c, d, e] = arr;
console.log(a, b, c, d, e); // 1 2 3 4 5

let [h, , f, , g] = arr;
console.log(h, f, g); // 1 3 5


// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [];
arr2 = [...arr1];
console.log(arr2); // [1, 2, 3] Now arr1 has perfect copied in arr2