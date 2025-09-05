let a = document.querySelector("h1");
// Now listen go to browser console tab there you will find h1 now expand that and search for which key's default value is what I write in the h1 tag then if you will chamge those key's value then you will see the change in the h1 tag
console.dir(a);

// First keys is 
// innerHTML HTML Tag badalta hai
a.innerHTML = "<p>H1 my name is Tapabrata</p>";

let b = document.querySelector("h2");
console.dir(b);
// innerText Text badalta hai
b.innerText = "H2 my name is Tapabrata";

let c = document.querySelector('h3');
console.dir(c);
// textContent bhi text hi badalta hai
c.textContent = "H3 my name is Tapabrata";