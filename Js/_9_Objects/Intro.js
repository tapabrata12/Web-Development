// Objects defination: Object kya hai? Object ek "box" hai jisme aap multiple cheezein (properties) store kar sakte ho.

// Empty object banane ka tarika
let guy = {};

// Object with properties
let banda = {
    naam: "Rahul", // Key value structure
    umar: 25,
    kaam: "Developer"
};

// Properties kaise access karein:

console.log(banda.naam) // Rahul

// Alternative way to access properties
console.log(banda["umar"]); // 25

// importanrt thing 

let aa = 'naam'

// console.log(banda.aa) // Agar app samaj rahe hoo ki aa -> "naam" me convert hoker apko "Rahul" dega too app galat hai eiye "undefined" dega

// Lekin agar app eisahi kar na chhate hoo to appko banda[aa] likna pade gaa

console.log(banda[aa]); // Ab yee Rahul return karega 