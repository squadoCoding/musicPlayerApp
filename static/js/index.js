let songs;
let currentSong;
let currentSongIndex;

const previousBtn = document.getElementById("previous");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progressBar");
const progress = document.getElementById("progress");

const showProgressBar = () => {
  progressBar.style.display = "block";
  if (currentSong.paused) {
    playBtn.firstElementChild.src = "/img/play.png";
  }
  else {
    playBtn.firstElementChild.src = "/img/pause.png";
  }
}
const playSong = (songIndex) => {
  if (currentSongIndex != songIndex) {
    currentSong = new Audio(songs[songIndex].path);
    currentSong.play();
    currentSong.addEventListener("timeupdate", () => {
      progress.value = (currentSong.currentTime / currentSong.duration) * 100;
    });
  }
  else {
    currentSong.play();
    currentSongIndex = songIndex;
  }
};
const stopSong = () => {
  currentSong.pause();
};

previousBtn.addEventListener("click", () => {
  let previousSong = songs[currentSongIndex - 1];
  if (previousSong != undefined) {
    playSong(previousSong.index);
  }
});
playBtn.addEventListener("click", () => {
  if (currentSong != undefined) {
    if (currentSong.paused) {
      playSong(currentSongIndex);
      playBtn.firstElementChild.src = "/img/pause.png";
    }
    else {
      stopSong();
      playBtn.firstElementChild.src = "/img/play.png";
    }
  }
});
nextBtn.addEventListener("click", () => {
  let nextSong = songs[currentSongIndex + 1];
  if (nextSong != undefined) {
    playSong(nextSong.index);
  }
});
progress.addEventListener("change", () => {
  currentSong.currentTime = progress.value * (currentSong.duration / 100);
})