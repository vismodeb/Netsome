// Preloader
$(window).on('load',function(){
   $('.preloader').delay(500).fadeOut(300);
})


$(document).ready(function(){
    // Counter Up jquery
	$('.counter').counterUp({
        delay: 10,
        time: 3000,
      });


    // Mobile Menu Icon
   $(document).ready(function(){
      $('#nav-icon4').click(function(){
         $(this).toggleClass('open');
         $('.header-display').slideToggle();
      });
   });

  





    // owlCarousel
    $(".Team_content").owlCarousel({
      responsive: true,
      loop:true,
      dots:false,
      autoplay:true,
      margin: 30,
      slideSpeed : 200,
      items : 4,
      responsive:{
          320:{
              items:1,
          },
          450:{
              items:2,
          },
          767:{
              items:3,
          },
          1110:{
              items:4,
          }
      }
  });

//   video popup

//   $('.test-popup-link').magnificPopup({
//     type: 'iframe',

//     });
    


    $('.teamwork-area .accordion-button').click(function(){
    //   console.log($(this).attr("data-img-src"));
      $("#teamwork_item_img").attr("src", $(this).attr("data-img-src"));
    });


});


 // AOS Animation

 AOS.init({
    duration: 800,
});
