let outerH1 = document.querySelector('h1');

// This line will the element
outerH1.remove()

// Now removing child element from the parent element

let div = document.querySelector('div');
let innnerH1 = div.querySelector('h1');
div.remove(innnerH1);