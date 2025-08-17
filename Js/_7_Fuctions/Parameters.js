// Default parameter

function func(a,b) {
    console.log(a,b);
}

func()
// Thats why default parameters are useful, they can be used to avoid this kind of errors.
function add(a=1,b=0) {
    console.log(a+b);
}

add()

// Rest parameter and Spread parameter
// Jab arguments ki quantity unknown ho, ya phir variable length arguments pass karne ho, tab rest parameter ka use hota hai.
// Rest parameter is used to collect all remaining arguments into an array.
// Jab ... function ke parameter space me lagee tab usse rest parameter kehte hain.
// Agar arrays and objects ke saath kaam karna ho, tab spread operator ka use hota hai.
function func(...params) {
    console.log(params);
}

func(1,2,3,4,5,6,7,8,9,22,44,33); // Rest parameter collects all arguments into an array

function func2(a,b,c,...params) {
    console.log(params);
}

func2(1,2,3,4,5,6,7,8,9,22,44,33); // Rest parameter collects all arguments into an array

// Return statement
// Jahha se ayeho waha se wapas laut jao ek value ke saath.

function add(a,b) {
    return a+b;
}
add(1,2); // 3