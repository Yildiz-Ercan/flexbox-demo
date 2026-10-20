const blocks = document.querySelectorAll(
  ".happyChild, .madChild, .child1, .child2, .child3",
);

const colors = [
  "#39205C",
  "#29366D",
  "#67264B",
  "#20635B",
  "#503477",
  "#294E70",
  "#60265F",
  "#35495B",
  "#654035",
  "#2D5142",
];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Alle Blöcke gemeinsam umfärben
function changeColors() {
  blocks.forEach((block) => {
    const color = randomColor();

    block.style.backgroundColor = color;
    block.style.setProperty("--glow-color", color);
  });
}

changeColors();
setInterval(changeColors, 1500);

// YouTube-Musik starten und Start-Overlay ausblenden
const startButton = document.getElementById("startMusic");
const startOverlay = document.getElementById("musicStart");
const youtubePlayer = document.getElementById("youtubePlayer");

if (startButton && startOverlay && youtubePlayer) {
  startButton.addEventListener("click", () => {
    youtubePlayer.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: "playVideo",
        args: [],
      }),
      "https://www.youtube.com",
    );

    startOverlay.classList.add("hidden");

    setTimeout(() => {
      startOverlay.style.display = "none";
    }, 600);
  });
}
