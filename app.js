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

const eyeContaner = document.querySelectorAll(".eyeContaner");
var count = 0;

eyeContaner.forEach((contaner) => {
  contaner.addEventListener("mouseenter", () => {
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
});

eyeContaner.forEach((cont) => {
  setInterval(() => {
    cont.style.height = "0px";
    setTimeout(() => {
      cont.style.height = "160px";
    }, 200);
  }, 3000);
  setInterval(() => {
    cont.style.height = "0px";
    setTimeout(() => {
      cont.style.height = "160px";
    }, 200);
  }, 3100);
});

var videoPlayer = document.getElementById("videoPlayer");
var playbtn = document.getElementById("playBtn");

videoPlayer.addEventListener("click", function () {
  if (videoPlayer.paused == false) {
    videoPlayer.pause();
    playbtn.style.display = "flex";
  } else {
    videoPlayer.play();
    playbtn.style.display = "none";
  }
});

var bootCamp = [
  {
    id: "0",
    sno: "1",
    selected: false,
    img:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-720x778.jpg",
    name: "The Stockholm Experience",
    para:
      "Our Stockholm campus is more than a place to learn; it’s a community. Here’s why it’s the perfect launchpad for your tech career.",
  },
  {
    id: "1",
    sno: "2",
    selected: false,
    img:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-720x778.jpg",
    name: " Get Help Finding Accommodation",
    para:
      "Why not turn your coding journey into an adventure by travelling to Stockholm? If you are interested in a social living experience beyond the ordinary, we collaborate with Allihoop, a community-focused startup that can help with affordable rental studios around Stockholm.",
  },
  {
    id: "2",
    sno: "3",
    selected: true,
    img:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-islands-720x778.jpg",
    name: " The City of Islands",
    para:
      "Stockholm stretches across fourteen islands, offering unique scenery where the waterways mix with the vibrant urban skyline. With each island having its own cultural flavor, Stockholm presents you with a smorgasbord of activities; from the cobbled streets of the Old Town to the bohemian vibes of Södermalm, there is always something new to experience.",
  },
  {
    id: "3",
    sno: "4",
    selected: false,
    img:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-more-ikea-720x778.jpg",
    name: "More than IKEA",
    para:
      "The success of Swedish startups has turned the capital city into a world-renowned tech hub, attracting the attention of talented people and international investors. Apart from Silicon Valley, Stockholm has bred the world’s most tech unicorns per capita, such as Spotify, Klarna, Northvolt, Voi, King, Einride and the list goes on…",
  },
  {
    id: "4",
    sno: "5",
    selected: false,
    img:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-foodies-720x778.jpg",
    name: " A Haven for Foodies",
    para:
      "Swedish meatballs, smoked salmon, and cinnamon buns are all key to traditional Swedish cuisine, but there is so much more to discover in Stockholm. From trendy rooftops for social gatherings to cozy hidden gems serving innovative fusion cuisine, Stockholm boasts an exceptional culinary scene that celebrates the finest of Swedish ingredients and international flavors.",
  },
];

function imgChanger() {
  var clutter = "";
  var btnclutter = "";

  bootCamp.forEach((elem) => {
    if (elem.selected === true) {
      clutter += ` <div class="w-full xl:py-0 py-10 xl:pt-20 xl:flex h-full">
            <div class="xl:w-[80%] xl:block hidden h-full">
              <div class="img-contaner pl-24 w-[80%] h-[85%]">
                <img
                  class="w-full h-full object-cover"
                  src=${elem.img}
                  alt=""
                />
              </div>
            </div>
            <div class="xl:w-full xl:justify-start flex h-full">
              <div class="xl:w-1/2 text-start p-5 xl:p-0 h-full">
                <div
                  class="text-4xl font-semibold text-[#383030] flex justify-center flex-col gap-16  h-full w-full"
                >
                  <h1 class="">
                    <span>
                      <i class="text-[#FFD37D] ri-poker-diamonds-fill"></i
                    ></span>
                    ${elem.name}
                  </h1>
                  <h1 class="text-lg xl:h-fit h-[70vh] leading-relaxed text-[#717171]">
                   ${elem.para}
                  </h1>
                 
                </div>
              </div>
             
            </div>
          </div>`;
    }

    btnclutter += ` <h1 class="px-5 py-2 cursor-pointer bg-[#FFD37D] text-lg rounded-full ${elem.selected}" id=${elem.id}>${elem.sno}</h1>`;
  });

  document.getElementById("page-8").innerHTML = clutter;
  document.querySelector(".allBtn").innerHTML = btnclutter;
}

imgChanger();

document.querySelector(".allBtn").addEventListener("click", (dets) => {
  bootCamp.forEach(function (elem) {
    elem.selected = false;
    console.log(elem.selected);
  });
  bootCamp[dets.target.id].selected = true;

  imgChanger();
  console.log(bootCamp);
});
