const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});

gsap.ticker.lagSmoothing(0);

document.addEventListener('selectstart', (e) => {
  e.preventDefault();
});

window.addEventListener('load', () => {

  document.querySelector('#strng').style.display = 'none';
  document.querySelector('.plts').style.display = 'none';

  document.querySelector('.circle').style.display = 'block';
  document.querySelector('#pg3cont').style.display = 'flex';

  document.querySelectorAll('.element').forEach(el => {
    el.style.opacity = '1';
  });

  baadwaale();
});

var tl = gsap.timeline();

function baadwaale() {
  gsap.from(".step-item", {
    scrollTrigger: {
      trigger: "#pg3_2cont",
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.to("#pg-4", {
    scrollTrigger: {
      trigger: "#pg3cont",
      start: "bottom bottom",
      end: "bottom center",
      scrub: 1,
      onEnter: () => {
        document.querySelector("#pg-4").style.display = "block";
      }
    },
    visibility: "visible",
    ease: "power2.inOut"
  });
}

let a = 0
const circle = document.querySelector('.circle')
const plts = document.querySelector('.plts')

let bbc = 100
let mbc = 900
if(screen.width<768){
  bbc = 0
  mbc = 500
}
if(screen.width<540){
  bbc = 0
  mbc = 400
}

let inpath = `M ${bbc} 30 Q ${(mbc+bbc)/2} 30 ${mbc} 30`;
const vw = window.innerWidth; 

gsap.to("svg path", {
  attr: { d: inpath },
  duration: 0.1,
  ease: "power3.out",
});
let q = 0

gsap.registerPlugin(ScrollTrigger);

gsap.to(".circle", {
  boxShadow: "0 0 30px 10px green",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

const dibbas = document.querySelectorAll('.dibbas');

dibbas.forEach(dibba => {
  dibba.addEventListener('mouseenter', (e) => {
    const rect = dibba.getBoundingClientRect();
    const circle = dibba.querySelector('.absolute');      

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    circle.style.width = '0px';
    circle.style.opacity = 1;
    circle.style.height = '0px';
    circle.style.left = x + '%';
    circle.style.top = y + '%';

    requestAnimationFrame(() => {
      circle.style.transition = 'width 1s ease-in, height 1s ease-in';
      circle.style.width = '3000px';
      circle.style.height = '3000px';
    });
  });

  dibba.addEventListener('mouseleave', (e) => {
    const circle = dibba.querySelector('.absolute');

    circle.style.transition = 'width 0.3s ease-in, height 0.3s ease-in';
    circle.style.width = '0px';
    circle.style.height = '0px';
    circle.style.opacity = 0;
  });
});

const masterTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#pg1cont",
        start: "top top",
        end: "40% top",
        scrub: 1
    }
});

gsap.set("#imgcont", {
    y: "50%",
    opacity: 1,
    height: "2px",
    width: "200px",
    backgroundColor: "#48bb78",
    boxShadow: "0px 0px 10px 2px #48bb78",
    border: "none",
    borderRadius: "0",
    overflow: "hidden",
    left: "50%",
    transform: "translate(-50%, -50%)"
});

gsap.set(".intros", {
    opacity: 0,
    y: 0
});

gsap.set("#card1, #card2, #card3, #card4", {
    opacity: 0,
    translateY: "200vh"
});

masterTl
    .to("#heading", {
        opacity: 1,
        duration: 0.5
    })
    .to("#heading", {
        translateX: "-100%",
        opacity: 0,
        duration: 1
    }, "+=1")
    .to({}, {duration: 0.3})
    .to(".intros", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out"
    })
    .to("#imgcont", {
        height: "600px",
        width: "300px",
        border: "12px solid black",
        borderRadius: "24px",
        boxShadow: "0px 0px 30px 2px #48bb78",
        duration: 2,
        ease: "power2.inOut"
    })
    .to("#imgcont > *", {
        opacity: 1,
        duration: 0.5
    }, "-=0.5")
    .to({}, {duration: 0.5})
    .to("#imgcont", {
        rotate: "90deg",
        duration: 1.5,
        ease: "power2.inOut"
    })
    .to("#imgcont", {
        scale: 100,
        translateX: "-470%",
        duration: 2,
        ease: "power2.inOut"
    })
    .to({}, {duration: 0.5})
    .to("#card1", {
        opacity: 1,
        translateY: "0",
        rotateZ: "7deg",
        duration: 5,
        ease: "power2.out"
    })
    .to("#card2", {
        opacity: 1,
        translateY: "0",
        rotateZ: "-9deg",
        duration: 4,
        ease: "power2.out"
    }, "-=0.5")
    .to("#card3", {
        opacity: 1,
        translateY: "0",
        rotateZ: "2deg",
        duration: 2.5,
        ease: "power2.out"
    }, "-=0.5")
    .to("#card4", {
        opacity: 1,
        translateY: "0",
        rotateZ: "-1deg",
        duration: 4.5,
        ease: "power2.out",
    }, "-=0.5");

gsap.to(["#card1", "#card2"], {
    x: 2000,
    scrollTrigger: {
        trigger: "#pg1cont",
        start: "40% top",
        end: "80% top",
        scrub: 1
    }
});

gsap.to(["#card4", "#card3"], {
    x: -2000,
    scrollTrigger: {
        trigger: "#pg1cont", 
        start: "40% top",
        end: "80% top",
        scrub: 1
    }
});

gsap.to(["#card1", "#card2", "#card3", "#card4"], {
  hidden: true,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#pg1cont",
    start: "80% top",
    end: "90% top",
    scrub: 1
  }
});

gsap.set("#getstarted", {
  opacity: 0,
  scale: 0.8,
  pointerEvents: "none"
});

gsap.to("#getstarted", {
  scrollTrigger: {
    trigger: "#pg1cont",
    start: "50% top",
    end: "90% top",
    scrub: 1,
    onEnter: () => {
      document.querySelector("#getstarted").style.pointerEvents = "auto";
    },
    onLeave: () => {
      document.querySelector("#getstarted").style.pointerEvents = "none";
    }
  },
  scale: 2.7,
  translateY: "30vh",
  opacity: 1,
  duration: 1,
  ease: "power2.inOut"
});

gsap.to(".step-item:not(:first-child)", {
  scrollTrigger: {
    trigger: "#pg1cont",
    start: "85% top",
    end: "95% top",
    scrub: 1,
    onLeave: () => {
      gsap.to(".subpoints-section", {
        display: "block",
        opacity: 1,
        y: -270,
        scale: 0.8,
        duration: 0.5,
        delay: 0.3,
        ease: "power2.out"
      });
    },
    onEnterBack: () => {
      gsap.to(".subpoints-section", {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(".subpoints-section", { display: "none" });
        }
      });
    }
  },
  opacity: 0,
  y: 0,
  stagger: 0.1,
  ease: "power2.inOut"
});

gsap.to("#ExtraSpace",{
  translateY:"-10vh",
   scrollTrigger:{
       trigger:"#pg1cont",
       start:"105% top",
       end:"125% top",
       scrub:1,
       }
})

ScrollTrigger.create({
  trigger: "#pg1cont",
  start: "bottom top",
  onEnter: initializePage2,
  once: true
});

let lastRealIndex = 0;

function showTextForImage(imageNumber) {
  document.querySelectorAll('.element').forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.3s ease-in-out';
  });

  if (imageNumber < lastRealIndex) {
    const elements = document.querySelectorAll(`.text-group-${imageNumber}`);
    
    const previousElements = document.querySelectorAll(`.text-group-${lastRealIndex}`);
    previousElements.forEach(el => {
      el.style.opacity = '0';
    });

    setTimeout(() => {
      elements.forEach(el => {
        el.style.opacity = '1';
      });
    }, 300);

    const introElements = document.querySelectorAll('.intros');
    introElements.forEach(el => {
      el.style.opacity = '1';
    });
  } else {
    const introElements = document.querySelectorAll('.intros');
    introElements.forEach(el => {
      el.style.opacity = '0';
    });
  }

  lastRealIndex = imageNumber;
}

window.addEventListener('load', () => {
  showTextForImage(1);
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  on: {
    slideChange: function () {
      const realIndex = this.realIndex + 1;
      showTextForImage(realIndex);
    }
  }
});

function openFirstCard() {
    gsap.to("#card1", {
        opacity: 1,
        translateY: "0",
        rotateZ: "7deg",
        duration: 1,
        ease: "power2.out"
    });
}

document.querySelectorAll('.android-navigation button').forEach(button => {
    button.addEventListener('click', openFirstCard);
});

function navigateToCard(cardNumber) {
    const cards = ["#card1", "#card2", "#card3", "#card4"];
    const tl = gsap.timeline();
    
    cards.forEach(card => {
        tl.to(card, {
            opacity: 0,
            translateY: "200vh",
            duration: 0.3,
            ease: "power2.inOut"
        }, 0);
    });
    
    if (cardNumber === 1) {
        tl.to("#card1", {
            opacity: 1,
            translateY: "0",
            rotateZ: "7deg",
            duration: 1,
            ease: "power2.out"
        }, 0.3);
    } else {
        tl.to(["#card2", "#card3", "#card4"], {
            opacity: 1,
            translateY: "0",
            rotateZ: (index) => ["-9deg", "2deg", "-1deg"][index],
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        }, 0.3);
    }
}

gsap.to(".element", {
    opacity: 1,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    const totalElements = elements.length;
    
    elements.forEach((el, index) => {
        const angle = (index * (360 / totalElements));
        el.style.setProperty('--angle', `${angle}deg`);
        
        el.style.opacity = '1';
    });

    gsap.to('.element', {
        rotation: 360,
        transformOrigin: "center center",
        duration: 20,
        repeat: -1,
        ease: "none",
        stagger: {
            each: 0,
            from: "start"
        }
    });
});

gsap.utils.toArray('.android-nav-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, {
      scale: 1.2,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  });
  
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    });
  });
});

gsap.from(".step-item", {
  scrollTrigger: {
    trigger: "#pg3_2cont",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out"
});

gsap.to("#main", {
  backgroundPosition: `50% ${window.innerHeight/2}px`,
  ease: "none",
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.utils.toArray('.text-content').forEach(text => {
  gsap.from(text, {
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      end: "bottom 20%"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out"
  });
});

gsap.utils.toArray('.carad').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.2,
      ease: "power2.in"
    });
  });
});

window.addEventListener('load', () => {
  document.querySelectorAll('.element').forEach(el => {
    el.classList.add('text-visible');
    el.style.opacity = '1';
    el.style.visibility = 'visible';
  });
  
  document.querySelector('.circle').style.display = 'block';
  document.querySelector('.circle').style.visibility = 'visible';
});

gsap.set(".subpoints-section", {
  opacity: 0,
  y: 20,
  display: "none"
});