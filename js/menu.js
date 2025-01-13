// menu.js
$(document).ready(function () {
  $('.menu-icon').click(function () {
    $('.slide_modal').fadeIn();
    $('.slide-menu').css('display', 'block').animate({
      left: '0px'
    }, 300);
  });

  $('.close-btn').click(function () {
    $('.slide-menu').animate({
      left: '-250px'
    }, 300, function () {
      $('.slide_modal').fadeOut();
    });
  });

  // close modal
  $('.slide_modal').click(function (event) {
    if (!$(event.target).closest('.slide-menu').length) {
      $('.slide-menu').animate({
        left: '-250px'
      }, 300, function () {
        $('.slide_modal').fadeOut();
      });
    }
  });

  $(window).on('resize', function () {
    $('.slide_modal').hide();
  });
});
