const ti = gsap.timeline()

ti.from(".logo",{
    y:-50,
    opacity:0,
    duration:0.5,
    delay:0.5
});

ti.from("#l1",{
    y:-50,
    opacity:0,
    duration:0.5
});

ti.from("#l2",{
    y:-50,
    opacity:0,
    duration:0.5
});

ti.from("#l3",{
    y:-50,
    opacity:0,
    duration:0.5
});

ti.from("#l4",{
    y:-50,
    opacity:0,
    duration:0.5
});

ti.from(".hero-section",{
    y:50,
    opacity:0,
    duration:0.5,
    scale:0.5
});