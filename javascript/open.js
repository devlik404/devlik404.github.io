// load 


$(window).on('load', function(){
    $('.container-about .biografi').addClass('left');
    $('.container-about .skill').addClass('right');

 });

//  scroll
$(window).scroll(function(){
   const wScroll = $(this).scrollTop();

   if (wScroll > $('.sclproject').offset().top-600){
    $('.container-card .container .card').each(function(i){
       setTimeout(function(){
          $('.container-card  .container .card').eq(i).addClass ('tumbnail');
       },500 * (i+1));
    });
   
   
}

});
// alert share

$(document).ready(function(){
$('.shareAll').click(function(){
   $('#overlay').fadeIn();
  
});
});

const container = document.querySelector('.overlay');
container.addEventListener('click', function(e){
 if ( e.target.className == 'btn-close'){
    e.target.parentElement.parentElement.parentElement.style.display = 'none';
    e.preventDefault();
 }
});
// copy
function copy(){
   document.querySelector('#inputQ').select(),document.execCommand('copy');
   }


// download resume
const link = document.querySelector('.download');
$(document).ready(function(){
$('.download').click(function(){
   link.download = 'img/HTML.png';
});
});

