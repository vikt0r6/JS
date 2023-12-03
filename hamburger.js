

function navSlide() {


  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-linkovi');
  var navLinkovi = document.querySelectorAll('nav-linkovi li');

  burger.addEventListener('click',prekidac, false);

  function prekidac() {

    var klasa = nav.classList.length;

    if (klasa === 1) {

      nav.classList.add('nav-active');
      nav.style.transform = 'translateX(0%)';

    } else {

      nav.classList.remove('nav-active');
      nav.style.transform = 'translateX(100%)';

    }

    burger.classList.toggle('promena');


  }


}



navSlide();




