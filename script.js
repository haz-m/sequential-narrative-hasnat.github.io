var startBtn = document.getElementById("star");
var balls = new Audio("./sounds/button.mp3");
var bgm = new Audio("./sounds/bgm.mp3");

function func() {
  balls.play();
}

// make a function called playBGM that plays the background music or pause it
function playBGM() {
  if (bgm.paused) {
    bgm.play();
  } else {
    bgm.pause();
    bgm.currentTime = 0;
  }
}

function startGame() {
  window.location.href = "game/game.html";
}
