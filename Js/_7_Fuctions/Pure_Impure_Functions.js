// Pure impure functions: 
// Asa function jo ki bahar ki value ko na badle wo pure function

function pure() {
    console.log("Hello");
}

pure();
// Impure functions:
// Aur jo bhar ki value ko badal de wo impure function

let x = 10;
function impure() {
    x = ++x;
    console.log(x);
}

impure();