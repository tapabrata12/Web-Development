// Use .filter to keep numbers greater than 10
const numbers = [5, 12, 8, 130, 44];
const filterArr = numbers.filter(function (value) {
    if (value > 10){
        return true;
    }
});

console.log(filterArr);