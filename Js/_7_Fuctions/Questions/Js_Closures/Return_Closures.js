function outer() {
    let name = "Tapabrata";
    return function() {
        return name;
    }
}

let greet = outer();
console.log(greet());