const viewport_height = visualViewport.height;
const JINGLE_CONTAINER = document.querySelector("#deckfall-jingle-audio");
const JINGLE_AUDIO = document.querySelector("#deckfall-jingle-audio audio");

JINGLE_AUDIO.playbackRate = 1.3;
JINGLE_AUDIO.preservesPitch = false;
JINGLE_AUDIO.volume = 0.05;

JINGLE_CONTAINER.addEventListener("click", () => {
  if (JINGLE_AUDIO.paused) {
    JINGLE_AUDIO.play();
    JINGLE_CONTAINER.classList.add("audio-playing");
  } else {
    JINGLE_AUDIO.pause();
    JINGLE_CONTAINER.classList.remove("audio-playing");
  }
});

document.addEventListener("scroll", () => {
  if (!JINGLE_AUDIO.paused) {
    const top = JINGLE_CONTAINER.getBoundingClientRect().top;
    if (top < 0 || top > viewport_height) {
      JINGLE_AUDIO.pause();
      JINGLE_CONTAINER.classList.remove("audio-playing");
    }
  }
});
document.querySelectorAll(".spoiler").forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("reveal");
  });
});
document.querySelectorAll("section .spoiler-section-flag").forEach((e) => {
  const SECTION = e.parentElement;
  const INNER_SECTION = e;
  const ALERT_TEXT = INNER_SECTION.innerHTML;
  const SECTION_HTML = SECTION.innerHTML;
  SECTION.innerHTML = `
    <i class="spoiler-alert">
      ${ALERT_TEXT}
    </i>
    <section class="spoiler-content">
      ${SECTION_HTML}
    </section> `;

  SECTION.classList.add("spoiler");
  SECTION.addEventListener("click", () => {
    SECTION.classList.add("reveal");
  });
});
const SOLUTION_VIDEO = document.querySelector("#solution-video");
SOLUTION_VIDEO.addEventListener("ended", () => {
  SOLUTION_VIDEO.style.opacity = 0;
  setTimeout(() => {
    SOLUTION_VIDEO.currentTime = 0;
    SOLUTION_VIDEO.style.opacity = 1;
    setTimeout(() => {
      SOLUTION_VIDEO.play();
    }, 1000);
  }, 1000);
});
