const backToTop = document.querySelector(".top");
const toggleNavbar = document.querySelector(".nav-toggle");
const navLink = document.querySelector(".nav-links");
const body = document.querySelector("body");

const cursor = document.querySelector(".cursor");
const cursorRound = document.querySelector(".cursor-round");
const cursorOuter = document.querySelector(".cursor-outer");

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const videoPlayer = document.querySelector(".video-promo");

play.addEventListener("click", () => {
  pause.style.display = "block";
  play.style.display = "none";

  videoPlayer.play();
});

pause.addEventListener("click", () => {
  pause.style.display = "none";
  play.style.display = "block";

  videoPlayer.pause();
});

window.addEventListener("mousemove", onMouseMove);

function onMouseMove(e) {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  cursorRound.style.top = e.pageY + "px";
  cursorRound.style.left = e.pageX + "px";

  cursorOuter.style.top = e.pageY + "px";
  cursorOuter.style.left = e.pageX + "px";
}

toggleNavbar.addEventListener("click", () => {
  if (navLink.style.display === "none") {
    navLink.style.display = "block";
  } else {
    navLink.style.display = "none";
  }
});

window.addEventListener("scroll", (e) => {
  let windowHeight = window.scrollY;
  if (windowHeight >= 280) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});
