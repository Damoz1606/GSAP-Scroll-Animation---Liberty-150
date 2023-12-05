gsap.registerPlugin("ScrollTrigger");

const introAnimate = () => {
    const intro = gsap
        .timeline()
        .to(".helper",
            {
                opacity: 0,
                duration: 0.01,
                ease: "expo.out"
            }, "<")
        .to("#logo",
            {
                y: -405,
                scale: 0.2,
                duration: 0.2,
                ease: "expo.out"
            }, "<+=0.01")
        .fromTo("#liberty",
            {
                y: 0,
                scale: 0.8,
                duration: 0.2,
                ease: "power0.easeIn"
            },
            {
                y: -225,
                scale: 1,
            }, "<")
        .to("#intro-h1",
            {
                scale: 0,
                opacity: 0,
                duration: 0.2,
                ease: "power0.easeIn"
            }, "<")
        .to("#intro-h3",
            {
                scale: 0,
                opacity: 0,
                duration: 0.2,
                ease: "power0.easeIn"
            }, "<+=0.05");
    return intro;
}

const modelAnimate = () => {
    const model = gsap
        .timeline({
            default:
            {
                duration: 1.2,
                ease: "expo.in"
            },
        })
        .fromTo(".model-name",
            {
                opacity: 0,
                scale: 0
            },
            {
                opacity: 1,
                scale: 1
            }, "<")
        .fromTo(".models",
            {
                x: -150,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1
            }, "<+=0.05")
        .fromTo(".rotator",
            {
                x: 150,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1
            }, "<")
        .to(".model-name", { opacity: 0, scale: 0, ease: "expo.out" }, ">+=1")
        .to(".models", { opacity: 0, x: -150, ease: "expo.out" }, "<+0.05")
        .to(".rotator", { opacity: 0, x: 150, ease: "expo.out" }, "<")

    return model;
}

const specsAnimate = () => {
    const specs = gsap
        .timeline()
        .fromTo(".specs",
            {
                x: 0
            },
            {
                x: "100%",
                duration: 0.75,
                ease: "expo.in"
            })
        .fromTo(".specs dt",
            {
                x: -20,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "expo.in"
            }, "<")
        .fromTo(".specs dd",
            {
                x: -10,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "expo.in"
            }, "<")
        .to(".specs",
            {
                x: 0,
                ease: "expo.in"
            }, ">+=1")
    return specs;
}

const charsAnimate = () => {
    const chars = gsap
        .timeline()
        .fromTo(".chars",
            {
                x: 0
            },
            {
                x: "-100%",
                duration: 0.5,
                ease: "expo.in"
            }, "<")
        .fromTo(".chars dt",
            {
                x: 20,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "expo.in"
            }, "<")
        .fromTo(".chars dd",
            {
                x: 10,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "expo.in"
            }, "<")
        .to(".chars",
            {
                x: 0,
                ease: "expo.out"
            }, ">+=1")

    return chars;
}

const outroAnimate = () => {
    const outro = gsap
        .timeline()
        .fromTo(".outro",
            {
                y: 250,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "expo.in"
            }, "<")

    return outro;
}

window.addEventListener("load", () => {
    const timelineAnimation = gsap.timeline({
        default: { duration: 1.2 },
        scrollTrigger: {
            trigger: "main",
            start: "top top",
            end: 5000,
            markers: true,
            scrub: true
        }
    });

    const intro = introAnimate();
    const model = modelAnimate();
    const specs = specsAnimate();
    const chars = charsAnimate();
    const outro = outroAnimate();

    timelineAnimation
        .add(intro)
        .add(model)
        .to(".specs-chars-background",
            {
                scaleY: 1,
                duration: 0.5,
                ease: "sine.in"
            }, ">")
        .to("#liberty",
            {
                x: 1000,
                y: -400,
                scale: 2,
                duration: 0.5,
                ease: "expo.in"
            }, "<")
        .add(specs, "<")
        .add(chars)
        .to("#liberty",
            {
                x: -1000,
                scale: 2,
                duration: 0.5,
                ease: "expo.in"
            }, "<")
        .to(".specs-chars-background",
            {
                scaleY: 0,
                duration: 0.5,
                ease: "sine.out"
            }, ">+=1.25")
        .to("#liberty",
            {
                x: 0,
                y: -225,
                scale: 1,
            }, "<")
        .add(outro);
});