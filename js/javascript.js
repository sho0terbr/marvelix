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
    btn.innerHTML = "PAUSE";
 
  } else {
    video.pause();
    btn.innerHTML = "PLAY";
  
  }
}

//mutando video


function enableMute(){
  if (video.muted === false) {    
    video.muted = true;
}
else {
  video.muted = false;
     }
    }

  
  




/*<i class="far fa-play-circle"></i>*/


/* Captura o tamanho atual da Janela */
/*
let w, h;

function displayWindowSize() {
    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
    // console.log("Width: " + w + ", " + "Height: " + h)
};

window.addEventListener("resize", displayWindowSize);

displayWindowSize();
// console.log(displayWindowSize);

*/
/* Define a posição o background */
/*
let bgd = document.getElementById("myVideo"),
    // flyBgd = document.getElementById("fly-back"),
    mainCover = document.getElementById("main-cover");

function backgroundSize() {
    // console.log(mainCover.clientHeight);
    // console.log((h / 10) + "px");
    // flyBgd.style.top = (h / 20) + "px";
    setTimeout(function() {
        bgd.style.top = (mainCover.clientHeight - (mainCover.clientHeight / 3.5)) + "px";
    }, 500);
};

window.addEventListener("resize", backgroundSize);

backgroundSize();
*/


