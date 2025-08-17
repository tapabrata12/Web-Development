// What is Early return pattern ?
// It is a technique where we return from a function as soon as we can, if the function is not able to return the expected result.
// It is used to avoid unnecessary computations and improve the performance of the function.
let val = 60;
function func(val) {
    if(val<25) return "Fali";
    else if(val <= 50) return "Pass with Distinction";
    else if(val <= 75) return "Pass with Distinction and Honours";
    else if (val <= 90) return "Pass with Distinction, Honours and Merit";
    else if (val <= 100) return "Pass with Distinction, Honours, Merit and High Distinction";
}

console.log(func(val));