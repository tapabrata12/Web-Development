// Hoisting diffrences between declarations and expressions 

name(); // Because of hoisting 
name2(); // Hoisting is not applied to function expressions




function name() {
    console.log("Hello");
}

let name2 = function(){
    console.log("Hello");
}