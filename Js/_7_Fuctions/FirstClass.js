// First class functions in Javascript 

// Ek concept hota hai jaha pe functions ko value ki tarah treat kiya jata hai
// Jaha jaha value ja sakta hai waha waha function bhi ja sakta hai that means ek function parameter ke jagah me vhi function ja sakta hai

function greet() {
   return "Hello";
}
function name(name) { // name will be treated as a function here
    console.log("Tapabrata"+ name());
}

name(greet);