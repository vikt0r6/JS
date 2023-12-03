var slajder = document.getElementById('box');
var slike = ['flicanflac', 'maldivi', 'majorka'];


var levoDugme = document.getElementsByClassName('prethodna')[0];
var desnoDugme = document.getElementsByClassName('sledeca')[0];

slajder.addEventListener('mouseover', prikazi, false);
slajder.addEventListener('mouseout', sakrij, false);
levoDugme.addEventListener('mouseover', prikazi, false);
desnoDugme.addEventListener('mouseover', prikazi, false);

function prikazi() {

  levoDugme.style.opacity = '1';
  desnoDugme.style.opacity = '1';

}


function sakrij() {

  levoDugme.style.opacity = '0';
  desnoDugme.style.opacity = '0';

}

levoDugme.addEventListener('click', prethodnaSlika, false);
desnoDugme.addEventListener('click', sledecaSlika, false);

var slikeIndeks = 0;

function sledecaSlika() {


   if (slikeIndeks < slike.length) {

    slikeIndeks = slikeIndeks + 1;

  } else {

  slikeIndeks = 1;

  }

  slajder.innerHTML = '<img src=./imgslajder/' + slike[slikeIndeks-1] + '.jpg>';
}

function prethodnaSlika() {


  if (slikeIndeks < slike.length + 1 && slikeIndeks > 1) {

    slikeIndeks = slikeIndeks - 1;

  } else {

  slikeIndeks = slike.length;

  }

  slajder.innerHTML = '<img src=./imgslajder/' + slike[slikeIndeks - 1] + '.jpg>';
}

setInterval(sledecaSlika, 5000);






