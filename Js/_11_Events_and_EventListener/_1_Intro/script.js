// Browser pee koi bhi harkat karo to event raise hojata hai
// event ka matlab hai kuch hona screen pe: jaise click karna, scroll karna, resize karna, hover karna etc.
// Kuch screen pe hoo to apko react karna ana chaiyee.
// EventListner ka matlab hai appne koi action ka reaction diyaa Ex: Click kia to screen red ho gaya.


// How to step by step add event listener
// 1. Select the elements jispe event listener lagana hai

const btn = document.querySelector('button'); // Event listener button pe lagana hai
const p = document.querySelector('p') // button ke click hone pe p ka color change karna hai

console.dir(btn)
console.dir(p)

// 2. Now add EventListner by dot operator, this function will take 2 parameter a. What kind of ops you want b. A function by which you will tell what kind of reaction you want for that ops

btn.addEventListener('click',function() {
    p.style.backgroundColor = 'black';
    p.style.color = 'white';
})

// Another example agar doubble chick karoge to text change hojaega

btn.addEventListener('dblclick',function () {
    p.style.backgroundColor = 'white';
    p.style.color = 'black';
    p.textContent = "Text Changed";
})