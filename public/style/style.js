
$(document).ready(function(){
  var offset = $('header').offset().top ;
  var stop = Math.round($(window).scrollTop());
  if(stop > offset) {
    $('nav.navbar.navbar-fix-top').css('background-color', '#f0f0f0');
    $('nav.navbar.navbar-fix-top').css('padding-top', '0');
    $('.nav>li>a').css('color', '#424242', 'important');
    $('button.logo-button').css('background-image', "url('../images/temp-watch-black-long.gif')")
  } else {
    $('nav.navbar.navbar-fix-top').css('background-color', 'transparent');
    $('.nav>li>a').css('color', 'white', 'important');
    $('nav.navbar.navbar-fix-top').css('padding-top', '1.5rem');
    $('button.logo-button').css('background-image', "url('../images/temp-watch-white.gif')")
  }
  $(window).on('scroll', function() {
    var stop = Math.round($(window).scrollTop());
    if(stop > offset) {
      $('nav.navbar.navbar-fix-top').css('background-color', '#f0f0f0');
      $('nav.navbar.navbar-fix-top').css('padding-top', '0');
      $('.nav>li>a').css('color', '#424242', 'important');
      $('button.logo-button').css('background-image', "url('../images/temp-watch-black-long.gif')")
    } else {
      $('nav.navbar.navbar-fix-top').css('background-color', 'transparent');
      $('.nav>li>a').css('color', 'white', 'important');
      $('nav.navbar.navbar-fix-top').css('padding-top', '1.5rem');
      $('button.logo-button').css('background-image', "url('../images/temp-watch-white.gif')")
    }
  });
});

$(document).ready(function(){

  $("#services").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#services-div").offset().top
    },
    1500)
  });
  $( "#services-btn").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#services-div").offset().top
    },
    1500)
  });
  $("#contact-us").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#contact-us-div").offset().top
    },
    1500)
  });
  $( "#services-btn-dd").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#services-div").offset().top
    },
    1500)
  });
  $("#contact-us-dd").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#contact-us-div").offset().top
    },
    1500)
  });
  $(".logo-button").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("header").offset().top
    },
    1500)
  });

  var product = $('.our-services').offset().top;
  var application = $('.applications').offset().top;
  var contact = $('.contact-us').offset().top;

  $(window).on('scroll',function(){
    var stop = Math.round($(window).scrollTop());
    if (stop > (product - 10)) {
      $('.product-li').addClass('active');
    } else {
      $('.product-li').removeClass('active');
    };
    if (stop > ((contact - product + 280))) {
      $('.product-li').removeClass('active');
      $('.contact-li').addClass('active');
    } else {
      $('.contact-li').removeClass('active');
    };
  });
});
