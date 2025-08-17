// Use .map() to squre each number
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squreArr = arr.map(function(value) {
    return Math.pow(value,2);
}); 

console.log(squreArr);