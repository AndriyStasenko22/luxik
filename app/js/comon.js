$(document).ready(function() {



	var anim=['fadeInLeft', 'fadeInRight', 'fadeInDown', 'fadeInUp'];
	var number=Math.round(Math.random()*anim.length);
	
	$('.home_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:false
	});

// Home products slider

var products_slider=$('.products-slider');
products_slider.owlCarousel({
	items: 4,
	margin: 15,
	loop: true,
	nav: true,
	smartSpeed: 700,
	autoplay: true,
	autoplaySpeed: 700,
	autoplayTimeout:3000,
	navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			margin:0,
			nav:false
		},
		400:{
			items:2,
			nav:false
		},
		768:{
			items:3,
			nav:false
		},
		992:{
			items:4

		}
	}
});

	// Home colection slider
	var colection_slider = $('.colection-slider');

	colection_slider.owlCarousel({
		items:1,
		autoHeight: true,
		loop: true
	})

	$('.colection_tabs li').click(function() {
		$('.colection_tabs li.active').removeClass('active');
		$(this).addClass('active');
		colection_slider.trigger("to.owl.carousel", [$(this).index(), 300]);
	});

	// кнопка на верх
	$('.btn_scroll').click(function() {
		$('html, body').animate({scrollTop: 0},600);
	});

	// мобільне меню
	$('.mobile-menu-btn').click(function() {
		$('.mobile-menu-left').animate({left: '0%'}, 500);
		$('.body-overlay').css("visibility",'visible').animate({opacity: 1},500);
	});
	$('.body-overlay').click(function() {
		$('.body-overlay').css("visibility",'hidden').animate({opacity: 0}, 500);
		$('.mobile-menu-left').animate({left: '-100%'}, 500);
	});
	$(".mobile-menu-left .menu_categoty").click(function() {
		$(this).children(".dropdown").slideToggle(300);
	});

});


// preloader
$(window).on('load', function() {
	$('.preloader').delay(700).fadeOut('slow');
});