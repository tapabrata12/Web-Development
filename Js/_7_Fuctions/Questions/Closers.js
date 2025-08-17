function outer() {
    let x = 0;
    console.log(x); // prints 0
    return function(value = x) {
        value++;
        console.log(value);
    }
}

let a = outer(); // only calles the outer function one 
a(); // prints 1 beaceuse now it calls the inner function not the outer function
a(); // prints 1 beaceuse now it calls the inner function not the outer function

function outer2() {
    let x = 0;
    console.log(x); // prints 0
    return function() {
        x++;
        console.log(x);
    }
}

let b = outer2(); // only calls the outer part of outer2 function onese
b(); // prints 1 // This time it calls the inner function but it increments the value of x in the outer function the permanantly makes it 1
b(); // prints 2 // This time it calls the inner function but it increments the value of x in the outer function the permanantly makes it 2
