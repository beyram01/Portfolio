const clickTriger = document.querySelector(".clickTriger");
const modelBody = document.querySelector(".model__body");
const projectsContainer = document.querySelector(".projects__container");
const arrowTop = document.querySelector("#arrow-top");
const arrowBottom = document.querySelector("#arrow-bottom");
const projectsNavBtn = document.querySelector("#nav-projects");
const homeBody = document.querySelector(".home__body");
const modelTitle = document.querySelector("#model-title");
const projects = document.querySelectorAll(".project");

const windowWidth = window.innerWidth;

let tl = gsap.timeline({
  paused: true,
});
if (windowWidth > 850) {
  const duration = 0.75;
  tl.to(modelBody, {
    duration: duration,
    ease: Power3.easeOut,
    css: { width: windowWidth > 1050 ? "94%" : "91%" },
  });
  tl.to(modelBody, {
    duration: duration,
    ease: Power3.easeOut,
    css: { height: "102%" },
  });
  tl.to(projectsContainer, {
    duration: duration,
    ease: Power3.easeOut,
    css: { height: "90%", padding: "2rem 0" },
  });
  tl.fromTo(
    modelTitle,
    {
      opacity: 0,
    },
    {
      duration: 0.3,
      opacity: 1,
      ease: Power3.ease,
    }
  );
  tl.fromTo(
    ".project",
    {
      css: { transform: "translate(-10px, 10px)", opacity: 0 },
    },
    {
      duration: 0.3,
      css: { transform: "translate(0)", opacity: 1 },
      ease: Power3.ease,
    }
  );
} else {
  tl.to(modelBody, {
    duration: 0.8,
    ease: Power3.ease,
    css: { bottom: "10%" },
  });
  tl.to(projectsContainer, {
    duration: 0.8,
    ease: Power3.ease,
    css: { height: "90%", padding: "2rem 0" },
  });
}

let open = false;
if (clickTriger) {
  clickTriger.addEventListener("click", () => {
    if (!open) {
      tl.play();
    } else {
      tl.reverse(2);
    }
    open = !open;
  });
}

projectsNavBtn.addEventListener("click", () => {
  if (!open) {
    tl.play();
    document.body.style.overflow = "hidden";
    homeBody.style.overflow = "hidden";
  } else {
    tl.reverse();
    document.body.style.overflowY = "scroll";
    homeBody.style.overflowY = "scroll";
  }
  open = !open;
});

// Customize Scrollbars

const scrollBar = document.querySelector("#progress-bar");

homeBody.onscroll = (e) => {
  const scroll = e.target.scrollTop;
  const windowHeight = window.innerHeight;
  const homeBodyHeight = e.target.scrollHeight;

  const scrollPercent = (scroll / (homeBodyHeight - windowHeight)) * 100;

  scrollBar.style.height = `${scrollPercent}%`;
};
