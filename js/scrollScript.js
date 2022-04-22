ScrollTrigger.matchMedia({
  "(min-width: 1281px)": function(){

    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length -1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        markers: false,
        pin: true,
        scrub: 2,
        end: "+=4500"
      }
    });
    
    gsap.to(".container80s",{
      y:innerHeight * -1,
      duration:2,
      scrollTrigger:{
        trigger:".header",
        markers: false,
        start: "center center",
        end:"200% top",
        scrub: 1,
      }
    });
    
    gsap.to(".imgContenedor",{
      y:innerHeight * .2,
      x:innerWidth * .1,
      duration:2,
      ease:"circ",
      scrollTrigger:{
        trigger:".header",
        markers: false,
        start: "center center",
        end: "400% top",
        scrub: 2,
      }
    });
    
    gsap.fromTo(".shoeImage1",{
      y:innerHeight * 1,
      x:innerWidth * 1,
    }, { 
      y:innerHeight * 0,
      x:innerWidth * 0,
      duration:2,
      ease:"circ",
      scrollTrigger:{
        trigger: ".nikePromotion",
        markers: false,
        start: "center center",
        end: "200% 50%",
        scrub: 2
      }
    });
    
    gsap.fromTo(".shoeImage2",{
      y:innerHeight * 1,
      x:innerWidth * 1,
    }, { 
      y:innerHeight * 0,
      x:innerWidth * 0,
      duration:2,
      ease:"circ",
      scrollTrigger:{
        trigger: ".aboutNike",
        markers: false,
        start: "center center",
        end: "400% top",
        scrub: 2
      }
    });
    
    gsap.fromTo(".infoShoe1", {
      y:innerHeight * 10,
    }, {
      y:innerHeight * 0,
      duration: 1,
      ease:"circ",
      scrollTrigger:{
        trigger: ".nikePromotion",
        markers: false,
        start: "center center",
        end: "200% center",
        scrub: 2
      }
    });
    
    gsap.fromTo(".infoShoe2", {
      y:innerHeight * -10,
    }, {
      y:innerHeight * 0,
      duration: 1,
      ease:"circ",
      scrollTrigger:{
        trigger: ".aboutNike",
        markers: false,
        start: "bottom bottom",
        end: "300% top",
        scrub: 2
      }
    });
    
    gsap.to(".container80s2", {
      repeat: -1,
      y: innerHeight * .5,
      duration: 1,
      yoyo: true
    }); 
  }
});
