
// gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ ease: "none" });

// document.addEventListener("DOMContentLoaded", function (e) {
//     gsap.set(".divider-nuvens", { xPercent: 100 });
//     gsap.set(".divider-asteroids", { xPercent: -100 });
//     gsap.set(".timeline-wrapper", { height: 0 });

//     tlParallax = gsap.timeline({

//         scrollTrigger: {
//             trigger: ".parallax-images",
//             start: "top 50%",
//             end: "bottom 0",
//             toggleActions: "restart none none reverse",
//             scrub: 1,
//             markers: true,
//         }
//     })
//     tlParallax.from(".parallax-images .bg-1", { y: 400 })
//         .from(".parallax-images .bg-2", { y: 200 }, 0)

//     tlDividerNuvens = gsap.timeline({ repeat: -1, yoyo: true })
//     tlDividerNuvens.fromTo(".divider-nuvens .chuva", { opacity: 1 }, { duration: 0.5, opacity: 0 })

//     tlComputadorJulho = gsap.timeline({ repeat: -1, yoyo: true });
//     tlComputadorJulho.fromTo(".computador-julho-wrapper", { y: -15 }, { y: 0, duration: 1.3, ease: Linear.easeIn })
//     tlComputadorJulho.fromTo(".computador-julho-wrapper .fogo-1", { y: -10 }, { y: -5, duration: 0.5, ease: Linear.easeIn }, 0)
//     tlComputadorJulho.fromTo(".computador-julho-wrapper .fogo-2", { y: -15 }, { y: 0, duration: 0.5, ease: Linear.easeIn }, 0)

//     let tlNuvens = gsap.timeline();
//     tlNuvens.to(".divider-nuvens", {
//         duration: 1.2, xPercent: -10, scrollTrigger: {
//             trigger: ".divider-nuvens",
//             start: "top 75%",
//             end: "bottom 50%",
//             scrub: 1
//         }
//     })

//     gsap.set(".divider-astronauta", { xPercent: 100 })
//     let tlAstronauta = gsap.timeline();
//     tlAstronauta.to(".divider-astronauta", {
//         duration: 1.2, xPercent: 0, scrollTrigger: {
//             trigger: ".divider-astronauta",
//             start: "top 10%",
//             end: "bottom 90%",
//             scrub: 1,
//         }
//     })

//     gsap.set(".level-up .titulo", { rotationY: 180, scale: 0 })
//     let tlLevelUp = gsap.timeline();
//     tlLevelUp.to(".level-up .titulo", {
//         duration: 1, rotationY: 0, scale: 1, transformOrigin: "center", scrollTrigger: {
//             trigger: ".level-up .titulo",
//             start: "top 75%",
//             end: "bottom 25%",
//             scrub: 1,
//         }
//     })


//     const titulosMeses = document.querySelectorAll(".titulo-mes");

//     titulosMeses.forEach((element) => {

//         gsap.set(element, { y: 30, opacity: 0 })

//         let tl = gsap.timeline()
//         tl.to(element, { y: 0, opacity: 1, duration: 0.5 });

//         ScrollTrigger.create({
//             trigger: element,
//             start: "top 90%",
//             toggleActions: "play none none reverse",
//             animation: tl,
//             markers: true
//         })


//     })



//     gsap.to(".divider-asteroids", {
//         duration: 1.2, xPercent: 0, scrollTrigger: {
//             trigger: ".divider-asteroids",
//             start: "top 70%",
//             end: "bottom 30%",
//             scrub: 1,
//         }
//     })


//     gsap.from(".foguete-final", {
//         duration: 1.2, y: "100%", x: "-50%", scrollTrigger: {
//             trigger: ".footer",

//             start: "top 70%",
//             end: "bottom 30%",
//             scrub: 1,
//         }
//     })





// });




