// Privent the errors

const Obj = {
    address: {
        locations: {
            lats : 40.7128,
            longs: -74.0060
        },
    },
};

console.log(Obj?.address?.location?.lat);
console.log(Obj?.address?.location?.long);