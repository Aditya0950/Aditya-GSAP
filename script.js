let tl = gsap.timeline();

tl.from("nav img, nav a", {
    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.05
})

tl.from(" button", {
    y: 100,
    duration: 0.25,
    opacity: 0
})

tl.from("main img", {
    opacity: 0,
    duration: 1,
    scale: 2,
    stagger: 0.25,
    borderRadius: "15vw"
})

tl.to("main img", {
    borderRadius: "0.5vw",
    scale: 1
})

tl.from("#Text h1", {
    y: -500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
})

tl.from("#Text span", {
    y: 200,
    opacity: 0,
    duration: 0.5
})

tl.to("#Text span", {
    margin: "0vw 2.75vw"
})