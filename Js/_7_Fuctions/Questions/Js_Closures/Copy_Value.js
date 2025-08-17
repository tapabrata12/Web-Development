function outer() {
    let count = 10;
    return function(value = count) {
        value++;
        console.log(value);
    }
}

const a = outer();
a();
a();