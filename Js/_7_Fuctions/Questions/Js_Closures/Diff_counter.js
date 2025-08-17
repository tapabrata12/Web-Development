function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let a = createCounter();
let b = createCounter();

console.log(a()); // ?
console.log(b()); // ?
