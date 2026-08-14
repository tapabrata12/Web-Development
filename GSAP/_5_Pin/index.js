gsap.to(".page2 .text", {
    transform: "translateX(-50%)",
    duration: 1,

    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        scrub: 3,
        start: "top 0%",
        end: "end -100%",
        markers:true,
        pin: true
    }
})