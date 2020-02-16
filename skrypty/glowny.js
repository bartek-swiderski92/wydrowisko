var SELEKTOR_DUZEGO_OBRAZU = '[data-typ-obrazu="cel"]'
var SELEKTOR_TYTULU_OBRAZU = '[data-typ-obrazu="tytul"]';
var SELEKTOR_MINIATURY = '[data-typ-obrazu="wyzwalacz"]';

function zmienObraz(urlObrazu, tekstTytulu) {
'use strict';
var duzyObraz = document.querySelector(SELEKTOR_DUZEGO_OBRAZU);
duzyObraz.setAttribute('src', urlObrazu);
var tytulObrazu = document.querySelector(SELEKTOR_TYTULU_OBRAZU);
tytulObrazu.textContent = tekstTytulu;
}

function obrazMiniatury(miniatura) {
  'use strict';
  return miniatura.getAttribute('data-url-obrazu');
}

function tytulMiniatury(miniatura) {
  'use strict';
  return miniatura.getAttribute('data-tytul-obrazu');
}

function zmienObrazNaPodstMiniatury(miniatura) {
  'use strict';
  zmienObraz(obrazMiniatury(miniatura), tytulMiniatury(miniatura));
}

function dodajObslugeKliknieciaMiniatury(miniatura) {
  'use strict';
  miniatura.addEventListener('click', function(zdarzenie) {
    zdarzenie.preventDefault();
    zmienObrazNaPodstMiniatury(miniatura);
  });
}

function odczytajTabliceMiniatur (){
  'use strict';
  var miniatury = document.querySelectorAll(SELEKTOR_MINIATURY);
  var tablicaMiniatur = [].slice.call(miniatury);
  return tablicaMiniatur;
}

function inicjujZdarzenia() {
  'use strict';
  var miniatury = odczytajTabliceMiniatur();
}

function inicjujZdarzenia () {
  'use strict';
  var miniatury = odczytajTabliceMiniatur();
  miniatury.forEach(dodajObslugeKliknieciaMiniatury);
}

inicjujZdarzenia();
