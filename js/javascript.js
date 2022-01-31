var el = document.getElementById("menu"); // elemento alvo
var numPx = "150"; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener("scroll", function () {
  if (window.scrollY > numPx) {
    el.classList.add("mudaCor"); // adiciona classe "mudaCor"
  } else {
    el.classList.remove("mudaCor"); // remove classe "mudaCor"
  }
});

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");


// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    
    btn.classList.add("fa-pause")
    btn.classList.remove("fa-play");
 
  } else {
    video.pause();
    
    btn.classList.add("fa-play");
    btn.classList.remove("fa-pause")
  
  }
}

//mutando video

var btnVol = document.getElementById("btnAudio");

function enableMute(){
  if (video.muted === false) {    
    video.muted = true;
    btnVol.classList.add("fa-volume-mute")
    btnVol.classList.remove("fa-volume-up");
}
else {
  video.muted = false;
  btnVol.classList.remove("fa-volume-mute")
  btnVol.classList.add("fa-volume-up");
     }
    }

  
  

