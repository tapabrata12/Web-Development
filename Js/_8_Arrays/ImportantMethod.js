// Some of the main methods 
// Before using that let's use forEach to iterate through the array
const arr = [1, 2, 3, 4, 5];

arr.forEach(function(item){
  console.log(`Item is ${item}`);
});

// lets do a simple program:

arr.forEach(function(item){
    console.log(item * 2);
});

// map(): map shirf tabhi use karna hai jab apko ek naya array banana hai particular array ke basis par.
//  map() dhektehii saath man mein ek blank array bana liya karo aur phir usmein item add karo.

const newArr = arr.map(function(item,idx) {
    return item + 2;
});


console.log(newArr); // Eaha par return karna anivariya hai nahito as default undefined return hoga.



const newArr2 = arr.map(function(item) {});

console.log(newArr2);

let newArr3 = arr.map(function(item) {
    if (item % 2 === 0) {
        return item * 2;
    } 
});

console.log(newArr3);

// Agar ham map me two argument rakhenghe too ussme 2nd argument index return karta hai
newArr3 = arr.map(function (item,idx) {
    return idx;
})
console.log("Indexes are: ",newArr3);

// Jab vhi apko aisa koi case dikhe jaaye jaha par ek array se naya array banega and wo naya array kuchh values ko rakhega tab map lagega.


// filter(): filter tab use karna hai jab apko ek naya array banana hai lekin usmein kuchh values ko hi rakhna hai.  filter() dhektehii saath man mein ek blank array bana liya karo aur phir usmein according to the condition true or false insert karo True wale hi values naya array mein aayegi.
const newArr4 = arr.filter(function(item) {
    return item % 2 === 0; // Yaha par true wale hi values naya array mein aayegi.
});

console.log(newArr4); // [2, 4] - Yaha par sirf even numbers hi aayenge.

// reduce(): reduce tab use karna hai jab apko ek single value chahiye ho array ke basis par. reduce() dhektehii saath man mein ek blank variable bana liya karo. reduce() function ko do argument chahiye hote hain, ek callback function aur dusra initial value. Callback function ke andar do parameter hote hain, accumulator aur current item.
const sum = arr.reduce(function(accumulator, item) {
    return accumulator + item;
}, 0);

console.log(sum); // 15

// find(): find ki help se ham koi particular value ko dhoond sakte hain. find() function sirf pehli matching value ko return karta hai. Agar koi value nahi milti hai to undefined return hota hai.
const foundItem = arr.find(function(item) {
    if (item === 3)
        return item; // Yaha par hum 3 ko dhoond rahe hain.
});
console.log(foundItem); // 3

// some(): some() function check karta hai ki kya array mein koi bhi item condition ko satisfy karta hai ya nahi. Agar koi item condition ko satisfy karta hai to true return hota hai, otherwise false.
const hasEven = arr.some(function(item) {
    return item % 2 === 0; // Yaha par hum check kar rahe hain ki kya koi even number hai.
});
console.log(hasEven); // true

// every(): every() function check karta hai ki kya array ke saare items condition ko satisfy karte hain ya nahi. Agar saare items condition ko satisfy karte hain to true return hota hai, otherwise false.
const allEven = arr.every(function(item) {
    return item % 2 === 0; // Yaha par hum check kar rahe hain ki kya saare items even hain.
});
console.log(allEven); // false