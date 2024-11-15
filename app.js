var nav = document.querySelector("#nav");

document.querySelector("body").addEventListener("wheel", (dets) => {
  console.log(dets);
  if (dets.deltaY >= 0) {
    gsap.to(nav, {
      transform: "translate(-50%, -105%)",
      ease: "power1.out",
      delay: 0.3,
    });
  } else {
    gsap.to(nav, {
      transform: "translate(-50%, 0%)",
      ease: "power1.out",
    });
  }
});

var direction = 1;
var targetUp = 95;
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
}, 50);

gsap.to(".line-section", {
  x: -window.innerWidth,
  duration: 10,
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
