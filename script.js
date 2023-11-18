import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let cursor = document.querySelector("#crsr")
let blur = document.querySelector("#crsr-blur");

document.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
});

document.addEventListener("mousemove", function (bets) {
    blur.style.left = bets.x - 250 + "px";
    blur.style.top = bets.y - 250 + "px";
});

gsap.to("#nav", {
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -5%",
        end: "40%",
        scrub: .7,
        // markers: true,

    },
    backgroundColor: "black",
    duration: .5,
    height: "110px"
    
});

gsap.to("#main", {
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        scrub: 3,
        // markers: true,
        start: "top -20%",
        end: "top -60%"
    },
    backgroundColor: "black",
    duration: 2,
});
