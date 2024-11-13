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
