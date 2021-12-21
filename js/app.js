
gsap.registerPlugin(ScrollTrigger);
gsap.registerEffect({
    name: "counter",
    extendTimeline: true,
    defaults: {
        end: 0,
        duration: 0.5,
        ease: "power1",
        increment: 1,
    },
    effect: (targets, config) => {
        let tl = gsap.timeline()
        let num = targets[0].innerText.replace(/\,/g, '')
        targets[0].innerText = num

        tl.to(targets, {
            duration: config.duration,
            innerText: config.end,
            modifiers: {
                innerText: function (innerText) {
                    return gsap.utils.snap(config.increment, innerText).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                }
            },
            ease: config.ease
        }, 0)

        return tl
    }
})

document.addEventListener("DOMContentLoaded", function (e) {

    window.scrollTo(0, 0);

    let tlIntro = gsap.timeline({ delay: 0.6 });
    tlIntro.from(".logo img", { opacity: 0, duration: .8, y: -50, ease: Back.easeOut })
    tlIntro.from(".intro .intro-text", { opacity: 0, duration: .8, y: -50, ease: Back.easeOut }, "-=0.3")


    const titulosMeses = document.querySelectorAll(".titulo-mes");
    titulosMeses.forEach((element) => {
        let tl = gsap.timeline()
        tl.set(element, { y: 50, opacity: 0 })
        tl.to(element, { y: 0, opacity: 1, duration: 0.5 });
        ScrollTrigger.create({
            trigger: element,
            start: "top 75%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
            animation: tl,
        })
    })

    const imageWrappers = document.querySelectorAll(".image-wrapper");
    imageWrappers.forEach((element) => {
        let tl = gsap.timeline()
        tl.set(element, { y: 50, opacity: 0 })
        tl.to(element, { y: 0, opacity: 1, duration: 0.3 });
        ScrollTrigger.create({
            trigger: element,
            start: "top 75%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
            animation: tl
        })
    })

    const textContents = document.querySelectorAll(".text-content");
    textContents.forEach((element) => {
        let tl = gsap.timeline()
        tl.set(element, { x: -50, opacity: 0 })
        tl.to(element, { x: 0, opacity: 1, duration: 0.3 });
        ScrollTrigger.create({
            trigger: element,
            start: "top 75%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
            animation: tl,
        })
    })

    tlParallax = gsap.timeline({
        scrollTrigger: {
            trigger: ".parallax-images",
            start: "top 50%",
            toggleActions: "restart none none reverse",
            scrub: 1
        }
    })
    tlParallax.from(".parallax-images .bg-1", { y: 500 })
        .from(".parallax-images .bg-2", { y: 800 }, 0)


    let tlLevelUp = gsap.timeline();
    gsap.set(".level-up .titulo", { rotationY: 180, scale: 0 })
    tlLevelUp.to(".level-up .titulo", {
        duration: 1, rotationY: 0, scale: 1, transformOrigin: "center", scrollTrigger: {
            trigger: ".level-up .titulo",
            start: "top 75%",
            end: "top 50%",
            scrub: 1,
        }
    })

    gsap.set(".divider-nuvens", { xPercent: 100 });
    gsap.fromTo(".divider-nuvens .chuva", { opacity: 1, y: -20, x: 20 }, { opacity: 0, y: 15, x: 0, duration: 0.5, repeat: -1, repeatDelay: 0.5 })
    let tlNuvens = gsap.timeline();
    tlNuvens.to(".divider-nuvens", {
        duration: 1.2, xPercent: -15, scrollTrigger: {
            trigger: ".divider-nuvens",
            start: "top 75%",
            end: "bottom 50%",
            scrub: 1
        }
    })

    gsap.set(".divider-astronauta .planeta", { x: "-100vw" });
    gsap.set(".divider-astronauta .astronauta", { x: "100vw" });
    let tlDividerAstronautaPlaneta = gsap.timeline();
    tlDividerAstronautaPlaneta.to(".divider-astronauta .planeta", {
        duration: 1.2, x: "-15vw", scrollTrigger: {
            trigger: ".divider-astronauta .planeta",
            start: "top 150%",
            end: "top 50%",
            scrub: 1
        }
    })

    let tlDividerAstronautaBaleira = gsap.timeline();
    tlDividerAstronautaBaleira.to(".divider-astronauta .astronauta", {
        duration: 1.2, x: "10vw", scrollTrigger: {
            trigger: ".divider-astronauta .astronauta",
            start: "top 150%",
            end: "top 50%",
            scrub: 1
        }
    })

    gsap.set(".marco-fim .saturno", { x: "-100vw" });
    gsap.set(".marco-fim .foguete", { x: "100vw", y: -500 });
    let tlMarcoFimSaturno = gsap.timeline();
    tlMarcoFimSaturno.to(".marco-fim .saturno", {
        duration: 1.2, x: "-15vw", scrollTrigger: {
            trigger: ".marco-fim .saturno",
            start: "top 75%",
            end: "bottom 70%",
            scrub: 1,
        }
    })

    let tlMarcoFimFoguete = gsap.timeline();
    tlMarcoFimFoguete.to(".marco-fim .foguete", {
        duration: 1.2, x: "10vw", y: 0, scrollTrigger: {
            trigger: ".marco-fim .foguete",
            start: "top 50%",
            end: "bottom 30%",
            scrub: 1
        }
    })

    gsap.set(".divider-asteroids", { xPercent: -100 });
    gsap.to(".divider-asteroids", {
        duration: 1.2, xPercent: 0, scrollTrigger: {
            trigger: ".divider-asteroids",
            start: "top 70%",
            end: "top 50%",
            scrub: 1,
        }
    })


    gsap.set(".foguete-final", { y: "100%", x: "-50%" });
    let tlFogueteFinal = gsap.timeline();
    tlFogueteFinal.to(".foguete-final", {
        y: "0", x: "0", scrollTrigger: {
            trigger: ".footer",

            start: "top 80%",
            end: "bottom 100%",
            scrub: 1,
        }
    })


    let tlNumbers = gsap.timeline();
    var upgradeableNumbers = $("[data-contador]");
    upgradeableNumbers.each(function () {
        var $this = $(this);
        var finalNumber = $(this).data("valor-final");
        $this.waypoint({
            handler: function () {
                tlNumbers.counter($this, { end: finalNumber, duration: 3 }, "-=3");
            },
            offset: "80%"
        });
    });


});













