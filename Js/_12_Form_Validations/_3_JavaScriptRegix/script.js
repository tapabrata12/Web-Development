let eml = document.getElementById("eml");
let user = document.getElementById("name");
eml.addEventListener("input", (e) => {
    e.preventDefault();
    // JavaScript Regex
    const em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    em.test(e.target.value);
    console.log(em.test(e.target.value));
});


// // username validation
// user.addEventListener("input", (e) => {
//     e.preventDefault();
//     const us = /^[a-zA-Z]{2,10}$/;
//     us.test(e.target.value);
//     console.log(us.test(e.target.value));
// });

user.addEventListener("input", (e) => {
    e.preventDefault();
    const usr = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$'/;
    usr.test(e.target.value)
    console.log(usr.test(e.target.value));
});