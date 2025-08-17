// Some method
let obj = {
  name: "Tapabrata",
  age: 22,
  DOB: "24-10-2002",
};

// Object.keys
console.log(Object.keys(obj));
// Object.entries
console.log(Object.entries(obj));

// Spread operator

obj2 = { ...obj };
console.log(obj2);

// Object.assign

let obj3 = Object.assign({}, obj); // Here we at first declared and empty object and then assign obj to it

console.log(obj3);

// If our are filled:
let obj4 = Object.assign({ Prize: Infinity }, obj);

console.log(obj4);

/*

Deep Clone:

Important concept: Agar app ka Object ek nested Object hai to spread operator use karein, usse Object ka only Non-nested property accual copy hoga and Nested part Reference pass karneee lage ga accual copy nahi hoga.
*/

let obj5 = {
  name: "Tapabrata",
  age: 22,
  DOB: "24-10-2002",

  // This part is nested object and will not be copied and pass reference
  Address: {
    street: "Elging Road",
    city: "kolkata",
    PIN: 700101,
  }
};

let obj6 = {...obj5}

console.log(obj5)
console.log(obj6)

obj6.Address.PIN = 500;

console.log(obj5)
console.log(obj6)

// Here comes deep colne method

obj5 = {
  name: "Tapabrata",
  age: 22,
  DOB: "24-10-2002",

  // This part is nested object and will not be copied and pass reference
  Address: {
    street: "Elging Road",
    city: "kolkata",
    PIN: 700101,
  }
};

obj6 = JSON.parse(JSON.stringify(obj5))

console.log(obj5)
console.log(obj6)

obj6.Address.PIN = 500;

console.log(obj5)
console.log(obj6) // Now only this changes