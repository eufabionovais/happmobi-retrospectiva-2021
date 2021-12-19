
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none" });

document.addEventListener("DOMContentLoaded", function (e) {
    gsap.set(".divider-nuvens", { xPercent: 100 });
    gsap.set(".divider-asteroids", { xPercent: -100 });
    gsap.set(".timeline-wrapper", { height: 0 });

    tlParallax = gsap.timeline({
        scrollTrigger: {
            trigger: ".parallax-images",
            start: "top 50%",
            end: "bottom 0",
            toggleActions: "restart none none reverse",
            scrub: 1,
            markers: true,
        }
    })
    tlParallax.from(".parallax-images .bg-1", { y: 500 })
        .from(".parallax-images .bg-2", { y: 1000 }, 0)

    tlDividerNuvens = gsap.timeline({ repeat: -1, yoyo: true })
    tlDividerNuvens.fromTo(".divider-nuvens .chuva", { opacity: 1 }, { duration: 0.5, opacity: 0 })

    tlComputadorJulho = gsap.timeline({ repeat: -1, yoyo: true });
    tlComputadorJulho.fromTo(".computador-julho-wrapper", { y: -15 }, { y: 0, duration: 1.3, ease: Linear.easeIn })
    tlComputadorJulho.fromTo(".computador-julho-wrapper .fogo-1", { y: -10 }, { y: -5, duration: 0.5, ease: Linear.easeIn }, 0)
    tlComputadorJulho.fromTo(".computador-julho-wrapper .fogo-2", { y: -15 }, { y: 0, duration: 0.5, ease: Linear.easeIn }, 0)

    let tl = gsap.timeline();




    tl.to(".divider-nuvens", {
        duration: 1.2, xPercent: -25, scrollTrigger: {
            trigger: ".divider-nuvens",

            start: "top 75%",
            end: "bottom 25%",
            scrub: 1,


        }
    })

    // gsap.to(".timeline-wrapper", {
    //     duration: 1.2, height: "100%", scrollTrigger: {
    //         trigger: ".timeline-wrapper",
    //         start: "top 25%",
    //         end: "bottom 0",
    //         scrub: 1,
    //     }
    // })

    // gsap.from(".titulo-mes", {
    //     duration: 1.2, y: 50, opacity: 0, scrollTrigger: {
    //         trigger: ".titulo-mes",
    //         start: "top 75%",
    //         end: "bottom 25%",
    //         scrub: 1,
    //     }
    // })

    gsap.to(".divider-asteroids", {
        duration: 1.2, xPercent: 0, scrollTrigger: {
            trigger: ".divider-asteroids",

            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
        }
    })


    gsap.from(".foguete-final", {
        duration: 1.2, y: "100%", x: "-50%", scrollTrigger: {
            trigger: ".footer",

            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
        }
    })





});




