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