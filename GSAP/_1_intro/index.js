// a variable
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

gsap.to(box1, { x: 900, duration: 5, delay: 1 });
gsap.from(box2, { x: 900, duration: 5, delay: 1 });
gsap.to(box3, { x: 1000, duration: 5, delay: 1, rotate: 360, backgroundColor: "red", borderRadius: "50%" });
gsap.from(box4, { y: 500, duration: 5, delay: 1, rotate: 360, backgroundColor: "blue", borderRadius: "50%", scale: 0.5 });