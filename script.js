// Javascript for moving dot cursor and blurred background cursor
let cursor = document.querySelector("#crsr")
let blur = document.querySelector("#crsr-blur");

document.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    cursor.style.transition = "all ease .11s";
});

document.addEventListener("mousemove", function (bets) {
    blur.style.left = bets.x - 250 + "px";
    blur.style.top = bets.y - 250 + "px";
});

//JavaScript for navigation animation
var navLink = document.querySelectorAll("#nav a");
navLink.forEach(function(elem) {
    elem.addEventListener("mouseover", () => {
        cursor.style.scale = 3;
        cursor.style.border = "1px solid white";
        cursor.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", () => {
        cursor.style.scale = 1;
        cursor.style.border = "1px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E";
    });
});
// JavaScript for down-icon on hero page
var downIcon = document.querySelector("#down-icon");
downIcon.addEventListener("mouseenter", () => {
    downIcon.style.scale = .5;
    downIcon.style.transition = "all ease-in-out .3s";
});
downIcon.addEventListener("mouseleave", () => {
    downIcon.style.scale = 1;
    downIcon.style.transition = "all linear .3s";
})

//GSAP for navbar
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

//GSAP for main page
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

// GSAP for about us page
gsap.from("#about-us img, #about", {
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        scrub: 1,
        start: "top 60%",
        end: "top 30%"
    },
    y: 40,
    opacity: 0,
    duration: 2
})

// GSAP for cards animation
//Card1
gsap.from("#card1", {
    scrollTrigger: {
        trigger: "#cards",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "top 60%",
        end: "top 30%"
    },
    x: -100,
    duration: 1,
    opacity: 0
})
//Card2
gsap.from("#card2", {
    scrollTrigger: {
        trigger: "#cards",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "top 60%",
        end: "top 30%"
    },
    y: 200,
    duration: 1,
    opacity: 0
})
//Card3
gsap.from("#card3", {
    scrollTrigger: {
        trigger: "#cards",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "top 60%",
        end: "top 30%"
    },
    right: -100,
    duration: 1,
    opacity: 0
});
//GSAP for description
gsap.from("#description h1", {
    scrollTrigger: {
        trigger: "#description h1",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
        // markers: true
    },
    y: 30,
    duration: 1
})
// GSAP for colon animation on page2
gsap.from("#colon1", {
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        scrub: 3,
        // markers: true,
        start: "top 55%",
        end: "top 45%"
    },
    x: -70,
    y: -70
})
gsap.from("#colon2", {
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        scrub: 3,
        // markers: true,
        start: "top 60%",
        end: "top 50%"
    },
    x: 70,
    y: 70
})