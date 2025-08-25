// Create elements: 1. Element ko create karoo. 2. Element ko text add karoo. 3. Element ko append karoo.

let a = document.createElement("h1");

a.textContent = "Hello from outer";

document.querySelector('body').prepend(a);

// Create div
let e = document.createElement('div');

// Added to the Screen
document.querySelector('body').appendChild(e);

// Create H1 will goes under div
let f = document.createElement('h1');
// Writing the content
f.textContent = "Hello inside div";
// Added to the screen
e.appendChild(f);