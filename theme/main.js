
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() == 0) {
      $('.header').removeClass('fixed');
    } else {
      $('.header').addClass('fixed');
    }
  });
  $('.nav-item li a').click(function() {
    $('.nav-item li a.active-2').removeClass('active-2');
    $(this).addClass('active-2');
  });
  $('#menu li a').click(function() {

    //console.log("Clicked");
    $('#menu li a.active-2').removeClass('active-2');
    $(this).addClass('active-2');
  });
  $('.hover').mouseover(function() {
    $('.overly').css("visibility","visible");
  });
  
  $('.hover').mouseout(function() {
    $('.overly').css("visibility","hidden");
  });
  
  
})
