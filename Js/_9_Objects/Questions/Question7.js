// Destructure the name and corrdinates

const Obj = {
    
    name: "John",
    location: {
            lat : 40.7128,
            long: -74.0060
        },
};

let{lat,long} = Obj.location;
console.log(lat,long);

let{name} = Obj;
console.log(name);