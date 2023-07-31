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

var data=document.querySelectorAll("#page2 #textcon h2")
data.forEach(function(e){
    var tdata=e.textContent
    var stext=tdata.split("")
var clutter=""
stext.forEach(function(elem){
    clutter+=`<span>${elem}</span>`
})
e.innerHTML=clutter
})
gsap.to("#page2 #textcon h2 span",{
    color:"#E3E3C4",
    stagger: 0.2,
    scrollTrigger:{
        trigger:"#page2 #textcon h2 span",
        scroller:"body",
        // makers:true,
        start:"top 50%",
        end:"top -20%",
        scrub:3
    }
})

