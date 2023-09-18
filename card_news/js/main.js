//figure image slide
setInterval(function(){

    $('figure ul').animate({
      left : '0'
    }, 600, function(){
      $('figure ul').append($('figure ul li').eq(0));
      $('figure ul').css({ left : 0});
  
    });
  
  }, 1000);
  