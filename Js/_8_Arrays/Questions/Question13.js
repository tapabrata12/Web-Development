// Check if all number are even or not 

let arr = [2, 4, 6, 8, 10];

let isAllEven = arr.every((num)=> {
    return (num % 2 === 0);
});

console.log(isAllEven); 