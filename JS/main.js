$(document).ready(function () {
  $('.container').mouseenter(function () {
      $('.card').stop().animate({
          top: '-90px'
      }, 'slow');
  }).mouseleave(function () {
      $('.card').stop().animate({
          top: 0
      }, 'slow');
  });
});

$(document).ready(function () {
  $('.card').click(function () {
    $('.card-inner').slideToggle('slow');
  });
});
function closeCard() {
  $('.card-inner').slideUp('slow');
}

let estadoCarta = 0;

$(document).ready(function () {
   $('.card').click(function () {
      if (estadoCarta === 0) {
         $(this).animate({
            top: '-90px'
         }, 'slow');
         estadoCarta = 1;
      } else if (estadoCarta === 1) {
         $('.card-inner').slideDown('slow');
         estadoCarta = 2;
      }
   });
});

function closeCard() {
   $('.card-inner').slideUp('slow');
   estadoCarta = 1; // vuelve a permitir ver la carta de nuevo si se cierra
}