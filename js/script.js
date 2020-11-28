$(document).ready(function(){
  
$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});
				

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
  
});


$(".slider").slick({

    
    infinite: true,
  
  
    responsive: [{
  
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" 
  
      }]
  });
});