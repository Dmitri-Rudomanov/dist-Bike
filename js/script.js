
  function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {

  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });
 
 function ibg() {
 let ibg=document.querySelectorAll(".ibg");
 for (var i = 0; i < ibg.length; i++) {
 if(ibg[i].querySelector('img')){
 ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
 }
 }
 }
ibg();

// BurgerMenu
  $('.icon-menu').click(function(){
        $('.icon-menu, .menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.menu__body').click(function(){
       $('.icon-menu, .menu__body').removeClass('active');
       $('body').removeClass('lock');
});



$(document).ready(function(){
	$('.slider__body').slick({
		arrows:false,
		dots:true,
		slidesToShow: 1,
		accessibility: false,
		slidesToScroll: 1,
		easing: 'linear',
		infinite: false,
		initialSlide: 0,
		// variableWidth:,
		// pauseOnDotsHover:true,
		// pauseOnHover:true,
		// pauseOnFocus:true,
		// rows:1-n,
		// touchMove:true,
		// (Sliders_connect)=>asNavFor:,
		// centerMode:false.
		// autoplay:true,
		// speed:1000,
		// autoplaySpeed: 3000,
		adaptiveHeight: true,
		// draggable:true,
		// swipe:true,
		// mobileFirst: true;
		// responsive:[
		// {
		//  	breakpoint: 768,
		// 	settings: {
		 		
	 	// 	}
		// },
		// 	{
		// 		breakpoint: 550,
		// 		settings: {
		// 			slidesToShow:1
		// 		}
		// 	}
		// ]
	});
	// $('.slider__body').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	// console.log(nextSlide);
	
	// });
	// $('.slider__body').slick('setPosition');
	// $('.slider__body').slick('goTo', 2);
	// $('.link_r').click(function (event) {
	// 	$('.slider__body').slick('slickNext')
	// });
});


//Input_email