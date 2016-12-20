
$(document).ready(function(){
  var offset = $('header').offset().top ;
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


$("#services").click(function(e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: $("#services-div").offset().top},
    'slow')
  });
  $( "#services-btn").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#services-div").offset().top},
      'slow')
    });
    $("#applications").click(function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $("#applications-div").offset().top},
        'slow')
      });
      $("#contact-us").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: $("#contact-us-div").offset().top},
          'slow')
        });
        $(".logo-button").click(function(e) {
          e.preventDefault();
          $('html,body').animate({
            scrollTop: $("header").offset().top},
            'slow')
          });

          var product = $('.our-services').offset().top;
          var application = $('.applications').offset().top;
          var contact = $('.contact-us').offset().top;

          $(window).on('scroll',function(){
            var stop = Math.round($(window).scrollTop()+1);
            if (stop > product) {
              $('.product-li').addClass('active');
            } else {
              $('.product-li').removeClass('active');
            }

            if (stop > application) {
              $('.product-li').removeClass('active');
              $('.application-li').addClass('active');
            } else {
              $('.application-li').removeClass('active');
            }

            if (stop > ((contact - product)/1)) {
              $('.application-li').removeClass('active');
              $('.contact-li').addClass('active');
            } else {
              $('.contact-li').removeClass('active');
            }
          });
