

// load 
$(window).on('load', function(){
   $('.container .bio').addClass('kiri');
   $('.container .skill').addClass('kanan');
   

});









// paralax

$(window).scroll(function(){
 const wScroll = $(this).scrollTop();
 $('.jumbotron img').css({
    'transform': 'translate(0px,'+ wScroll /1 + '%)',
    'transition':'1.2s'
 });

//  $('.jumbotron h1').css({
//     'transform': 'translate(0px,'+ wScroll/0.8+ '%)',
//     'transition':'0.9s'
//  });

//  $('.jumbotron p').css({
//     'transform': 'translate(0px,'+ wScroll/0.5 + '%)',
//     'transition':'0.5s'
    
//  });
 
//  
if (wScroll > $('.pro-b').offset().top-300){
   $('.container .card').each(function(i){
      setTimeout(function(){
         $('.container .card').eq(i).addClass ('tumb');
      },500 * (i+1));
   });


   // $('.container .card').addClass ('tumb');
}

});





