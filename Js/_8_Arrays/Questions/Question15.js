// Merge two arrays 

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergeArr = [...arr1,...arr2];

console.log(mergeArr);

// Add "India" to the begining of array
let arr3 = ["USA", "Canada", "Australia"];
let updatedArr3 = ["India", ...arr3];
console.log(updatedArr3);

// Copy an not accual copy an array
let arr4 = [1, 2, 3];
let copyArr = [...arr4];
console.log(copyArr);