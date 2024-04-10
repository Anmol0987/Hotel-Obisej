function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()

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
    stagger: 1,
    scrollTrigger:{
        trigger:"#page2 #textcon h2 span",
        scroller:"#main",
        start:"top 60%",
        end:"top -25%",
        scrub:3
    }
})

gsap.to("#page2 #svg2",{
    left:"-70vw",
    scrollTrigger:{
        trigger:"#svg2",
        scroller:"#main",
        scrub:2,
    }
},"ani")
gsap.to("#page2 #svg3",{
    left:"-70vw",
    scrollTrigger:{
        trigger:" #svg3",
        scroller:"#main",
        scrub:2,
        // markers:true,
        // start:"top 20%"
    }
},"ani")
var data2=document.querySelectorAll("#page3 #textcon2 h2")
data2.forEach(function(ele){
    var tdata2=ele.textContent
    var stext2=tdata2.split("")
    var clutter2=""
    stext2.forEach(function(e){
        clutter2+=`<span>${e}</span>`
    })
    ele.innerHTML=clutter2
})
gsap.to("#page3 #textcon2 h2 span",{
    color:"#434B34",
    stagger: 1,
    scrollTrigger:{
        trigger:"#page3 #textcon2 h2 span",
        scroller:"#main",
        start:"top 80%",
        end:"top 50%",
        scrub:3
    }
})
gsap.from("#page4 #img1",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4 #img1",
        scroller:"#main",
        start:"top 120%",
        end:"top 90%",
        scrub:1
    }
})
gsap.from("#page4 #img2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4 #img2",
        scroller:"#main",
        start:"top 140%",
        end:"top 110%",
        scrub:1
    }
})
gsap.from("#page4 #img3",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4 #img3",
        scroller:"#main",
        start:"top 170%",
        end:"top 120%",
        scrub:1
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      type:"fraction"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  gsap.to("#page7 #s1",{
    left:"-20vw",
    scrollTrigger:{
        trigger:"#s1",
        scroller:"#main",
        scrub:2,
        start:"top 90%"

    }
},"anim")
gsap.to("#page7 #s2",{
    left:"-10vw",
    scrollTrigger:{
        trigger:" #s2",
        scroller:"#main",
        scrub:2,
        start:"top 90%"
    }
},"anim")