gsap.from('#page1 #box1', {
    y: 100,
    opacity: 0,
    duration: 1,
    scale: 1,
    borderRadius: "50%",
    rotate: 360,
    scrollTrigger: {
        trigger: '#page1 #box1',
        scroller: 'body',
        start: 'top 50%',
        end: 'top 25%',
        markers: true,
        scrub: 1
    }
})

gsap.from('#page2 #box2', {
    y: 100,
    opacity: 0,
    duration: 1,
    borderRadius: "50%",
    scale: 0,
    rotate: 360,
    scrollTrigger: {
        trigger: '#page2 #box2',
        scroller: 'body',
        start: 'top 50%',
        end: 'bottom 20%',
        markers: true,
        scrub: 1
    }
})