gsap.from("h1",{
    y: 30,
    opacity:0,
    duration: 2,
    delay: 1,
    color: "yellow",
    stagger: 0.3
});

gsap.to(".box",{
    x: "90vw",
    borderRadius: "50%",
    rotate:360,
    duration: 2,
    delay:1,
    repeat:-1,
    yoyo: true
});