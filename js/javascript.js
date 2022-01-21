var el = document.getElementById('menu'); // elemento alvo
var numPx = '150'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > numPx) {
    	el.classList.add('mudaCor'); // adiciona classe "mudaCor"
    } else {
      el.classList.remove('mudaCor'); // remove classe "mudaCor"
    }
});