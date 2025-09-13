/*
Jab vhi app koi click karte hoo yaa fir koi vhi event raise karte hoo to appka joo event flow hai woo 2 Phases me chalta hai 

Phase 1: Iss Phase mee Event top level element see niche ki taraf ayae gaa
Phase 2: Iss Phase mee Event raised element see event top Parent level tak jayegaa

Aur pahele Phase 1 hota hai lakin Javascript me as default phase 2 dhikta hai agar ham phase ko print karna tee hai too.
That's why agar appko phase 1 dhekna hai too 

Jin jin me capture phase on hai woo capture phase me hii chale gaaa bubblin phase me nahi chalega 
Jin jin me bubbling phase on hai woo bubbling phase me hii chale gaaa capture phase me nahi chalega
*/

let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');

let btn = document.querySelector("#btn");

btn.addEventListener('click', function() {
    console.log("Button clicked"); 
});

c.addEventListener('click', function() {
    console.log("c clicked");
},true);

b.addEventListener('click', function() {
    console.log("b clicked");
});

a.addEventListener('click', function() {
    console.log("a clicked");
},true);