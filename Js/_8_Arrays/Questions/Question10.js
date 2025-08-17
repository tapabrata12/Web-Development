// Use reduce to find the product of all elements in an array

const arr = [5,9,2,3,6,5,4,5,10];

newArr = arr.reduce((acc,val)=>{
    return acc*val;
},1);

console.log(newArr);
