// Nesting and deep access

const user = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        location: {
            lat : 40.7128,
            long: -74.0060
        },
    },
};

// Accessing lat & long

console.log(user.address.location.lat)
console.log(user.address.location.long)

// Object Destructuring 

let {lat,long} = user.address.location;

console.log(lat,long) // Ab bar bar utnaa bara structure nahi lhikna padhe gaa