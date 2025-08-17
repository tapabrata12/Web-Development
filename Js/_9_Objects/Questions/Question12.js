// Deep clone the following Object safely

obj = {
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

dublicate = JSON.parse(JSON.stringify(obj));

dublicate.Address.PIN = 200400;

console.log(obj);
console.log(dublicate);