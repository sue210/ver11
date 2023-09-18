//figure image slide
setInterval(function(){

    $('figure ul').animate({
      top : '-120px'
    }, 600, function(){
      $('figure ul').append($('figure ul li').eq(0));
      $('figure ul').css({ top : 0});
  
    });
  
  }, 1000);
  