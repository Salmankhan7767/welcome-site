
function myFunction(x) {
    x.classList.toggle("change");
    }
    
    $(".toggle").on("click", function(){
      $('ul').slideToggle();
    })


    $('.testimonial').slick({
      centerMode: true,
      centerPadding: '30px',
      slidesToShow: 2 ,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows : false,
      cssEase: 'linear',
      autoplaySpeed: true,
      speed: 4000,
 
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    })




    $('.experience-welcome-slider-main').slick({
      centerMode: true,
      centerPadding: '30px',
      slidesToShow: 3 ,
      autoplay: true,
      arrows : false,
    
      cssEase: 'linear',
      autoplaySpeed: 0,
      speed: 4000,
      
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    })



    $('.counter').addClass('animated fadeInDownBig');

    $('.counter').counterUp({
      delay: 0,
      time: 1,  
    });



    




   






  


    
  


  

    
  


  