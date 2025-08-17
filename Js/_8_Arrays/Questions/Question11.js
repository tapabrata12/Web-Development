// Use find() and get the first number less than 10
let arr =  [10,50,60,5,10];

newArr = arr.find((num)=> {
    return num < 10;
});

console.log(newArr);