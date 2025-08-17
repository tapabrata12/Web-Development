// use .some() to check if any element is grater than 35


const ages = [32, 33, 16, 40];

const isGrater = ages.some(function(params) {
    return params > 35
});

console.log(isGrater);