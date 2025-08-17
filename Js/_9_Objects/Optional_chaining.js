// Optional Chaining and Computed Propertits

let obj = {
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

console.log(obj?.Addresses?.PIN) // Means if you put a question mark after the object name, it will not throw an error if the object propertity not exists

// Computed Property

let a = "Gender";
let obj2 = {
  name: "Tapabrata",
  age: 22,
  DOB: "24-10-2002",
  [a] : "Male",
  // This part is nested object and will not be copied and pass reference
  Address: {
    street: "Elging Road",
    city: "kolkata",
    PIN: 700101,
  }
};

console.log(obj2);