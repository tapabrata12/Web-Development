function name(params) {
    return function name2(a = params) {
        return a;
    }
}

let result = name(function() {
    console.log("Hello");
})(); // this returns the function

result(); // now we call the returned function
