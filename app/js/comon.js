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

	// таби на головній сторінці

	$('.colection_tabs li').click(function() {
		$('.colection_tabs li.active').removeClass('active');
		$(this).addClass('active');
		colection_slider.trigger("to.owl.carousel", [$(this).index(), 300]);
	});

	$('.paginator li').click(function() {
		$('.paginator li.active').removeClass('active');
		$(this).addClass('active');
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


	// dropdown in mobile-menu-left

	$(".mobile-menu-left li").click(function() {
		$(this).children(".dropdown").slideToggle('slow');
	});

	// dropdown_search
	
	$('.search input').keyup(function(){
		if($(this).val().length > 3) {
			$('.dropdown_search').slideDown('slow');
		}
		else{
			$('.dropdown_search').slideUp('slow');
		}
	});

	// таблиця розмірів
	$('.fancy-table').fancybox();

	// вибір кольора товара
	$('.catalog-item .catalog-item-size li a').click(function(event) {
		event.preventDefault();
		$(this).parents('ul').children('li').removeClass('active');
		$(this).parent().not(".fancy").addClass('active');
	});

	// вибір розміру товара
	$('.catalog-item .catalog-item-color li a').click(function(event) {
		event.preventDefault();
		$(this).parents('ul').children('li').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents('.catalog-item-info').siblings('.catalog-item_img').find('img').attr('src', $(this).children('img').attr('src'));;
	});

	// кількість товару
	$('.catalog-item-count a.count-plus').click(function(event) {
		event.preventDefault();
		let count = $(this).parent().children('input').val();
		count++; 
		$(this).parent().children('input').val(count);
	});
	$('.catalog-item-count a.count-minus').click(function(event) {
		event.preventDefault();
		let count = $(this).parent().children('input').val();
		if(count == 1){$(this).parent().children('input').val(1)}
			else{
				count--;
				$(this).parent().children('input').val(count);
			}
		});
});


// preloader
$(window).on('load', function() {
	$('.preloader').delay(700).fadeOut('slow');
});


function addActive(elem){
	if($(elem).parent().hasClass('active')){
		$(elem).parent().removeClass('active');
	}
	else{
		$(elem).parent().addClass('active');
	}
}
