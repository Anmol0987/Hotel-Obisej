var t = gsap.timeline()

t.from("#page1 svg",{
    y:-50,
    opacity:0,
    delay:0.3,
    duration:0.6
})
.from("#page1 img",{
    scale:0.5,
    duration:1.5,
    ease: Power4.easeOut,
    borderRadius:"20px"
})
.from("#nav",{
    y:-60,
    delay:-0.1,
    duration:0.2,
})