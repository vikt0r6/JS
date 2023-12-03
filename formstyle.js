var forma = document.forms[0];


var inputKriterijum = document.getElementById('kriterijumi');
var divKriterijum = document.getElementsByClassName('dodatna-pretraga')[0];
var inputSelect = document.getElementById('vrste');
var inputRange = document.getElementById('odrasli');
var inputRange2 = document.getElementById('deca');
var rangeBroj = document.getElementsByTagName('span')[1];
var rangeBroj2 = document.getElementsByTagName('span')[2];




inputRange.addEventListener('input', ispisi, false);

function ispisi() {

  rangeBroj.innerHTML = inputRange.value;

}

inputRange2.addEventListener('input', ispisi2, false);

function ispisi2() {

  rangeBroj2.innerHTML = inputRange2.value;

}




inputKriterijum.addEventListener('change', prikazi, false);

function prikazi() {

  if (inputKriterijum.checked) {

  divKriterijum.classList.add('prikaz');

} else {

  divKriterijum.classList.remove('prikaz');

}

}

