var nav = document.querySelector("#nav");

document.querySelector("body").addEventListener("wheel", (dets) => {
  if (dets.deltaY >= 0) {
    gsap.to(nav, {
      transform: "translate(-50%, -105%)",
    });
  } else {
    gsap.to(nav, {
      transform: "translate(-50%, 0%)",
    });
  }
});

var direction = 1;
var targetUp = 100;
var targetDown = 65;
var valueA = 90;
var d = `M 72 218.4 Q 72 91 57.35637225515947 0.5900659653101006 m -5.29287255489681 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0`;

setInterval(() => {
  d = `M 72 218.4 Q 72 91 ${valueA} 0.5900659653101006 m -5.29287255489681 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0`;
  valueA += direction;

  if (valueA >= targetUp) {
    direction = -1;
  } else if (valueA <= targetDown) {
    direction = 1;
  } else {
  }

  gsap.to(".stem  path", {
    attr: { d: d },
  });

  gsap.to(".flower", {
    transform: `translateX(${(valueA - 90) / 3}%) rotate(${
      (valueA - 90) / 3
    }deg) `,
  });
}, 100);

gsap.to(".line-section", {
  x: -window.innerWidth,
  duration: 10,
  repeat: -1,
  ease: "linear",
});
gsap.to(".imgLine img", {
  x: "-17.75rem",
  duration: 8,
  repeat: -1,
  ease: "linear",
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.9,
  spaceBetween: 300,
  freeMode: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper-2", {
  slidesPerView: 3,
  spaceBetween: 50,
  freeMode: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper-3", {
  slidesPerView: 1.2,
  spaceBetween: 200,
  freeMode: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper-5", {
  slidesPerView: 1.5,
  spaceBetween: 100,
  freeMode: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var latters = document.querySelectorAll(".letter");

var movement = 0;

latters.forEach((latter) => {
  latter.childNodes[1].addEventListener("mousemove", (dets) => {
    movement = dets.movementX;
    let stemMovment = dets.movementX / 90 + 30;

    gsap.to(latter.childNodes[1], {
      transform: `translateX(${movement}px) rotate(${movement}deg) `,
    });

    let currentStemPath = latter.childNodes[3].childNodes[1].childNodes[1].getAttribute(
      "d"
    );

    currentStemPath = `M 72 218.4 Q 72 91 ${stemMovment} 0.5900659653101006 m -5.29287255489681 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0`;

    gsap.to(latter.childNodes[3].childNodes[1].childNodes[1], {
      attr: { d: currentStemPath },
    });
  });
});

const eyeContaner = document.querySelector(".eyeContaner");
var count = 0;
function eyeManger() {
  eyeContaner.addEventListener("mouseenter", () => {
    if (count == 0) {
      gsap.to(".redcircle", {
        marginTop: "-80%",
      });
      gsap.to(".circle2", {
        marginTop: "-20%",
      });
      count = 1;
    } else {
      gsap.to(".redcircle", {
        marginTop: "0%",
      });
      gsap.to(".circle2", {
        marginTop: "50%",
      });
      count = 0;
    }
  });
}

eyeManger();

var page2 = document.querySelector("#page-2");

page2.addEventListener("mousemove", (dets) => {
  let X = (dets.x - eyeContaner.getBoundingClientRect().x) / 20;
  let Y = (dets.y - eyeContaner.getBoundingClientRect().y) / 20;

  gsap.to(".eyeboll", {
    transform: `translate(${X}%,${Y}%)`,
  });
});

function eyeIntervel() {
  setInterval(() => {
    eyeContaner.style.height = "0px";
    setTimeout(() => {
      eyeContaner.style.height = "160px";
    }, 200);
  }, 3000);
  setInterval(() => {
    eyeContaner.style.height = "0px";
    setTimeout(() => {
      eyeContaner.style.height = "160px";
    }, 200);
  }, 3100);
}

eyeIntervel();
