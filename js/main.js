$(document).ready(function(){

  $(window).on("load",function(){

    {ParticlesBody.init({
        selector: '.background.body',
        color: '#ffffff'
      });
      $('.background.body').addClass('fixed');
    };

    $widthScreen = $( document ).width();
    if ($widthScreen > 768) {
      {ParticlesHeader.init({
          selector: '.background.header',
          color: '#ffffff',
          maxParticlesHeader: 30,
          minDistance: 180,
          connectParticlesHeader: true
        });
      };
      $('.background.header').addClass('back-position');
    } else if ($widthScreen < 768) {
      {ParticlesHeader.init({
          selector: '.background.header',
          color: '#ffffff',
          maxParticlesHeader: 15,
          minDistance: 150,
          connectParticlesHeader: true
        });
      };
      $('.background.header').addClass('back-position');
    }
  });


  $(window).on("scroll", function() {
  	var scrollHeight = $(document).height();
  	var scrollPosition = $(window).height() + $(window).scrollTop();
  	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      var widthScreen = $( document ).width();
        if (widthScreen < 670) {
          $('.background-brand').css('bottom','30px');
        } else {
          $('.background-brand').css('bottom','15px');
        }
  	} else {
        $('.background-brand').css('bottom','170px');
    }
  });

  $('.carousel').carousel({
  	interval: 5000
  });

  $('.element.1').click(function(){
    $('.element-hidden.1').slideDown();
    $('.element-hidden.2, .element-hidden.3, .element-hidden.4').slideUp();
  });
  $('.element-hidden.1').click(function(){
    $('.element-hidden.1').slideUp();
  });

  $('.element.2').click(function(){
    $('.element-hidden.2').slideDown();
    $('.element-hidden.1, .element-hidden.3, .element-hidden.4').slideUp();
  });
  $('.element-hidden.2').click(function(){
    $('.element-hidden.2').slideUp();
  });

  $('.element.3').click(function(){
    $('.element-hidden.3').slideDown();
    $('.element-hidden.2, .element-hidden.1, .element-hidden.4').slideUp();
  });
  $('.element-hidden.3').click(function(){
    $('.element-hidden.3').slideUp();
  });

  $('.element.4').click(function(){
    $('.element-hidden.4').slideDown();
    $('.element-hidden.2, .element-hidden.3, .element-hidden.1').slideUp();
  });
  $('.element-hidden.4').click(function(){
    $('.element-hidden.4').slideUp();
  });

  $('a[href^="#whoarewe"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

  $('html, body').stop().animate({
     'scrollTop': $target.offset().top
  }, 900, 'swing');

});
