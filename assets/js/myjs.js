AOS.init({
  once: true,
  duration: 1000,
});

// Tampil modal di awal
$(document).ready(function () {
  $("#myModal").modal("show");
});

// Tombol Music
var audio = document.getElementById("audio");
var playPauseBTN = document.getElementById("playPauseBTN");
var count = 0;

function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playPauseBTN.innerHTML = '<i class="uil uil-music-tune-slash"></i> Pause';
  } else {
    count = 0;
    audio.pause();
    playPauseBTN.innerHTML = '<i class="uil uil-music"> Play';
  }
}
