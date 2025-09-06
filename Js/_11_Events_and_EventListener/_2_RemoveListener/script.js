const btn = document.querySelector('button'); 
const p = document.querySelector('p');

// Function to change the text of paragraph
function funcTextChange () {
    p.textContent = "Text Changed";
}

btn.addEventListener('dblclick',funcTextChange);

// Event listener remove karne ke liye hum removeEventListener ka use karte hain
// removeEventListener function me humein do cheezein deni hoti hain
// 1. same event ka naam jise humne event listener me pass kiya tha
// 2. same function jise humne event listener me pass kiya tha

btn.removeEventListener('dblclick',funcTextChange);