// HOF ek aisa function ahi jaha as a parameter either function pass kiya jata hai ya fir function return karta hoo

// Returns a function
function name() {
    return function() {
        console.log("Hello from the inner function!");
    }
}

name()(); // Invoking the returned function

// Takes a function as an argument
function greet(callback) {
    console.log("Greeting from the greet function!");
    callback(); // Invoking the callback function
}
greet(function() {
    console.log("Hello from the callback function!");
}); // Passing a function as an argument