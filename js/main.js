//! Parallax

const banner = document.querySelector("#banner");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const line = document.querySelector("#line");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;

  if (scrollPosition > 150) {
    banner.style.backgroundSize = "150%";
    title.style.opacity = 0;
    title.style.translate = "0 -50px";
    title.style.scale = "0.9";
    description.style.opacity = 0;
    description.style.translate = "0 -40px";
    description.style.scale = "0.8";
    line.style.opacity = 0;
    line.style.translate = "0 -40px";
    line.style.scale = "0.8";
  } else {
    banner.style.backgroundSize = "180%";
    title.style.opacity = 1;
    title.style.translate = 0;
    title.style.scale = 1;
    description.style.opacity = 1;
    description.style.translate = 0;
    description.style.scale = 1;
    line.style.opacity = 1;
    line.style.translate = 0;
    line.style.scale = 1;
  }
}

document.addEventListener("scroll", onScroll);