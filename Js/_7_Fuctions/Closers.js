// Closures: ek function jo return kare ek aur function and return hone wala function hammesa use karega parent function ka koi variable

function abcd() {
    let a = 10;
    return function() {
        console.log(a);
    }
}

// Lexical Scoping:

function xyz() {

    let b = 20; // Accessible in xyz
    function bcd() {
        let c = 30; // Accessable only in bcd
        
        function ght() {
            let g = 50; // Accessable only in ght
        }
    }
        
}

// This is a called Lexical scoping because the inner function can access the variables of its parent function.


// IIFE: 

(function() {
    // This type of writing is called IIFE (Immediately Invoked Function Expression)
})();

