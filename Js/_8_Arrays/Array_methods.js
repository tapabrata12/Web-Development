let arr = [1, 2, 3.6, 5,80];

// Output: 
console.log(arr)
// Length:
console.log(arr.length); 

// Array methods definition: A set of built-in functions that allow you to manipulate arrays in JavaScript.

// push(): Adds multiple elements to the end of the array.
arr.push(6, 7, 8);
console.log(arr);
// pop(): Removes the last element from the array.
arr.pop();
console.log(arr);
// shift(): Removes the first element from the array.
arr.shift();
console.log(arr);
// unshift(): Adds multiple elements to the beginning of the array.
arr.unshift(55, 66, 77);
console.log(arr);
// splice(): Adds or removes elements from the array at a specified index. It does changes the accual array
arr.splice(2,1);
console.log(arr);
arr.splice(2,2)
console.log(arr);
// Add with splice
arr.splice(2, 0, 100, 200);
console.log(arr);

// slice(): Returns a shallow copy of a portion of the array into a new array object. It does not change the original array.
let newArr = arr.slice(1, 4); // start to (end -1) it goes so 1 to (4-1) that means 1 to 3 
console.log(newArr);



// reverse(): Reverses the order of the elements in the array.
arr.reverse();
console.log(arr);

// sort(): Sorts the elements of the array in place and returns the sorted array. But it has little bit complex syntax accually acceps functions 
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sorted_arr = arr2.sort(function(a,b) {
    return a - b; // For ascending order
    // return b - a; // For descending order
});

console.log(sorted_arr);