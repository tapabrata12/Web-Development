// Sum with Rest parameter
function Rest(...val) {
    console.log(val);
    let sum = 0;
    for (let i = 0; i<val.length; i++){
        sum += val[i];
    }

    return sum;
}

console.log(Rest(1,2,5,8,6,3,2));