// Datatype
// Type of Datatype variable holdes.

// It has two types of datatypes
// 1. Primitive Datatypes
// 2. Reference Datatypes

// Primitive Datatypes: Are those datatypes which we get a real copy of the value.
let x = 10; // Number
let y = x; // y is a copy of x, not a reference
console.log(x); // 10

// Reference Datatypes: Are those datatypes which we get a reference of the value.
let arr1 = [1, 2, 3]; // Array (Reference Datatype)
let arr2 = arr1; // arr2 is a reference to arr1, not a
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]

arr2.pop(); // Modifying arr2 will affect arr1
console.log(arr1); // [1, 2] - arr1 is affected by the change in arr2

// Primitive Datatypes
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol (ES6)
// 7. BigInt (ES11)


// Reference Datatypes
// 1. Object
// 2. Array
// 3. Function

// Primitive Datatypes
// Number
let num1 = 5;
let num2 = 10.66;
console.log(num1);
console.log(num2); 
// Type check
console.log(typeof num1);
console.log(typeof num2);



// String
// Strings are enclosed in single or double quotes or (backticks)
// -> Single quotes ''
// -> Double quotes ""
// -> Backticks `` (Template Literals)
let str1 = "Hello, World!";
let str2 = 'Hello, World!';
let str3 = `Hello, World!`; // Template literal
console.log(str1);
console.log(str2);
console.log(str3);
// Type check
console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);


// Boolean
let bool1 = true;
let bool2 = false;
console.log(bool1);
console.log(bool2);
// Type check
console.log(typeof bool1);
console.log(typeof bool2);

// Null
// Null is a special value that represents the intentional absence of any value. We deliberately assign null to a variable to indicate that still now we don't have any value for that variable.
let nullVar = null; // Printing 'null' directly will not show the type as 'object' in some environments
console.log(nullVar);
// Type check
console.log(typeof nullVar);

// Undefined
// Undefined is a special value that indicates that a variable has been declared but has not yet been assigned a value. It is the default value for uninitialized variables.
let undefinedVar;
console.log(undefinedVar);
// Type check
console.log(typeof undefinedVar);

// Symbol
// Symbols are a new primitive type introduced in ES6. They are unique and immutable values, often used as object property keys to avoid name clashes.

obj1 = {
  uid: 1,
  name: "John",
  age: 30,
};

console.log(obj1);
// If I try to make a new 'uid' property, it will overwrite the existing one
obj1.uid = 2;
console.log(obj1);
// To avoid this, we can use Symbol
obj2 = {
  uid: 10,
  name: "John",
  age: 30,
};

console.log(obj2);

// Now if I try to make a new 'uid' property with the help of Symbol, it will not overwrite the existing one
const sym1 = Symbol("uid");
obj2[sym1] = 20; // Using Symbol as a key
console.log(obj2);

// Type check
console.log(typeof sym1); // "symbol"

// And also symbol are unique, so if I create another symbol with the same description, it will not be equal to the first one
const sym2 = Symbol("uid");
console.log(sym1 === sym2); // false, even though they have the same description

// BigInt
// BigInt is a new primitive type introduced in ES11 (ES2020) that allows you to work with integers larger than the Number type can safely represent.
let Int = Number.MAX_SAFE_INTEGER; // Maximum safe integer in JavaScript
console.log(Int); // 9007199254740991
console.log(Int + 1); // 9007199254740992
console.log(Int + 2); // Should give: 9007199254740993 but gives: 9007199254740992
console.log(Int + 3); // 9007199254740994 
console.log(Int + 4); // Should give: 9007199254740995 but gives: 9007199254740996
// This is the problem if we try to add more than 2 to the maximum safe integer, it will not give the correct result.
// To solve this problem, we can use BigInt
// This is because JavaScript uses double-precision floating-point format for numbers, which can lead to precision issues for large integers.

Int = BigInt(Int);
console.log(Int); // 9007199254740991n
console.log(Int + 1n); // 9007199254740992n
console.log(Int + 2n); // 9007199254740993n
console.log(Int + 3n); // 9007199254740994n
console.log(Int + 4n); // 9007199254740995n

// Another way to create BigInt is by appending 'n' to the end of the number
let bigIntNum = 1234567890123456789012345678901234567890n; // BigInt literal
console.log(bigIntNum); // 1234567890123456789012345678901234567890n
// Type check
console.log(typeof bigIntNum); // "bigint"

// Reference Datatypes

// Short and simple if you saw brackets [] or {} or () after '=' then it is a reference datatype
// And if try to copy it then directly you can't as it passes the reference of the value not the value itself

// 1. Array: 
// Arrays are ordered collections of values, which can be of any type, including other arrays or objects.
// They are defined using square brackets [].

let arr3 = [1, 2, 3]; // Array (Reference Datatype)
let arr4 = arr3; // arr4 is a reference to arr3, not a copy
console.log(arr3); // [1, 2, 3]
console.log(arr4); // [1, 2, 3]

arr4.pop(); // Modifying arr4 will affect arr3
console.log(arr3); // [1, 2] - arr3 is affected by the change in arr4

// 2. Object:
// Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be of any type.
let obj3 = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming"],
};
let obj4 = obj3; // obj4 is a reference to obj3, not a copy
console.log(obj3); // { name: 'Alice', age: 25, hobbies: [ 'reading', 'gaming' ] }
console.log(obj4); // { name: 'Alice', age: 25, hobbies: [ 'reading', 'gaming' ] }
obj4.age = 30; // Modifying obj4 will affect obj3
console.log(obj3); // { name: 'Alice', age: 30, hobbies: [ 'reading', 'gaming' ] } - obj3 is affected by the change in obj4

// 3. Function:
// Functions are first-class objects in JavaScript, meaning they can be treated like any other object. They can be assigned to variables, passed as arguments, and returned from other functions.
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet('Tapabrata'); // Hello, Tapabrata!