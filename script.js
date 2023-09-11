// Page 1 Gsap/

var tl = gsap.timeline();

tl.from("#navbar",{
    y :-90,
    opacity:0,
    duration:1,  
})

tl.from("#section2 .div1 h1",{
    x : -700,
    stagger: 0.3,
    duration:0.4,
})
tl.from("#section2 .div2 h4 , .div2 h3",{
    x : 700,
    opacity:0,
    stagger: 0.3,
    duration:0.4,
})

// Page 2 Gsap/

gsap.to("#first-p",{
  backgroundColor:"#00000042",
  opacity:0.8,
  duration:1,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    start:"top 40%",
    end:"top 41%",
    scrub :3 ,
    pin:true,
}
})

gsap.from(".row1 .div , .row2 .div",{
    x : -800,
    transation:0,
    duration:0.1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 23%",
        end:"top 24%",
        scrub:0.1,
        // markers:true,
    }
})
gsap.from(".bigdiv img",{
    x : 800,
    duration:0.1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 23%",
        end:"top 24%",
        scrub:3,
    }
})

// GSAP PAGE 3 

gsap.from("#page3 .text h1, #page3 .text h2, #page3 .text h3, #page3 .text i",{
    y:70,
    opacity:0,
    duration:1,
    delay:2,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page3 .text",
        scroller :"body",
        start:"top 30%",
        end:"top 33%",
        scrub:5,
        markers:true,
    }
})
// Arrow move functions/

var move = document.querySelector("#section2 .div2 h3")

move.addEventListener("mouseenter",()=>{
    gsap.to("#section2 .div2 i",{
        x:20,
        duration : 1.5,
    })
})
move.addEventListener("mouseleave",()=>{
    gsap.to("#section2 .div2 i",{
        x:0,
        duration : 1.5,
    })
})
var move2 = document.querySelector("#page3 .text>h3")

move2.addEventListener("mouseenter",()=>{
    gsap.to("#page3 .text>h3 i",{
        x:20,
        duration : 1.5,
    })
})
move2.addEventListener("mouseleave",()=>{
    gsap.to("#page3 .text>h3 i",{
        x:0,
        duration : 1.5,
    })
})

