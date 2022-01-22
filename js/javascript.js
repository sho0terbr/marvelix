var el = document.getElementById('menu'); // elemento alvo
var numPx = '150'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > numPx) {
    	el.classList.add('mudaCor'); // adiciona classe "mudaCor"
    } else {
      el.classList.remove('mudaCor'); // remove classe "mudaCor"
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
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
