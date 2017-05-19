$(document).ready(function() {



	var anim=['fadeInLeft', 'fadeInRight', 'fadeInDown', 'fadeInUp'];
	var number=Math.round(Math.random()*anim.length);
	
	// $('.home_slider').slick({
	// 	infinite: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows:false
	// });
	var owl = $('.home_slider');
	owl.owlCarousel({
		items:1,
		autoHeight: true,
		loop: true,
		smartSpeed: 700
	});
	// // Fired before current slide change
	owl.on('change.owl.carousel', function(event) {
			$('.owl-stage .owl-item:not(.active)').find('.slider-item-text').removeClass('animated fadeInLeft');
		// var $currentItem = $('.owl-item', owl).eq(event.item.index);
		// var $elemsToanim = $currentItem.addClass('animate fadeInLeft');
		// setAnimation ($elemsToanim, 'out');
	});

	// // // Fired after current slide has been changed
	owl.on('changed.owl.carousel', function(event) {
		// $('.active .slider-item-text').addClass('animated fadeInLeft');
		// console.log('asasa');

		var $currentItem = $('.owl-item', owl).eq(event.item.index);
		$currentItem.find('.slider-item-text').addClass('animated fadeInLeft');
		console.log($currentItem);
		 // var $currentItem = $('.home_slider').children('.owl-item').width();
		// console.log($currentItem);
	// owl.find('.owl-item.active').removeClass('animated fadeInLeft');
	
		// var $currentItem = $('.owl-item', owl).eq(event.item.index);
		// var $elemsToanim = $currentItem.find("[data-animation-in]");
		// setAnimation ($elemsToanim, 'in');
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
		loop: true,
		smartSpeed: 700
	})

	// таби на головній сторінці
	$('.colection_tabs li').click(function() {
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
		colection_slider.trigger("to.owl.carousel", [$(this).index(), 300]);
	});

	// пагінатор
	$('.paginator li a').click(function(e) {
		e.preventDefault();
		$(this).parent().siblings('li').removeClass('active');
		$(this).parent().addClass('active');
	});


	// кнопка на верх
	$('.btn_scroll').click(function() {
		$('html, body').animate({scrollTop: 0},600);
	});

	// мобільне меню
	$('.mobile-menu-btn').click(function() {
		$('.body-overlay').css("visibility",'visible').animate({opacity: 1},500);
		$('.mobile-menu-left').animate({left: '0%'}, 500);
		$('body').css('overflow', 'hidden');
	});
	$('.body-overlay').click(function() {
		$('.body-overlay').css("visibility",'hidden').animate({opacity: 0}, 500);
		$('.mobile-menu-left').animate({left: '-100%'}, 500);
		$('body').css('overflow', 'visible');
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

	// вибір розміру товара
	$('.catalog-item .catalog-item-size li:not(.fancy)>a').click(function(event) {
		event.preventDefault();
		addActive(this);
	});

	// вибір кольора товара
	$('.catalog-item .catalog-item-color li a').click(function(event) {
		event.preventDefault();
		addActive(this);
		let srcImg=$(this).children('img').attr('src');
		$(this).parents('.catalog-item-info').siblings('.catalog-item_img').find('img').attr('src', srcImg);
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
		if(count == 1){
			$(this).parent().children('input').val(1)
		}
		else{
			count--;
			$(this).parent().children('input').val(count);
		}
	});

	// бокове меню "Каталог"
	$('.catalog-sidebar-list .dropdown_li>a').click(function(event) {
		event.preventDefault();
		$(this).parent('.dropdown_li').toggleClass("open").find('.hidden-dropdown-ul').slideToggle('fast');
	});

	// мобільне меню "Каталог"
	$('.catalog-sidebar .section_title').click(function() {
		if($(window).width()<768){
			$(this).toggleClass("open").siblings('.hidden-block').slideToggle('fast');
		}
	});

	$('.catalog-sidebar-color li a').click(function(event) {
		event.preventDefault();
		addActive(this);
	});

// 	var showcase = $("#carousel");
// 	showcase.Cloud9Carousel( {
// 		yRadius: 60,
// 		xRadius: 750,
// 		transforms:true,
// 		mirrorOptions: {
// 			gap: 20,
// 			height: 0.2
// 		},
// 		buttonLeft: $("#buttons > .left"),
// 		buttonRight: $("#buttons > .right"),
// 	// autoPlay: true,
// 	bringToFront: true,
// 	onLoaded: function() {
// 		showcase.css( 'visibility', 'visible' ),
// 		showcase.css( 'overflow', 'visible' )
// 		showcase.css( 'display', 'none' ),
// 		showcase.fadeIn( 1500 ),
// 		showcase.css( '', '' )
// 	},
// 	onRendered:function() {
// 		// showcase.children("img:not(.cloud9-item)").removeClass('animated fadeInUp');
// 		showcase.children("img:not(.cloud9-item, .circle4)").addClass('animated fadeInUp');
// 		showcase.children("img.circle4").addClass('animated fadeIn');
// 		showcase.children("h3").addClass('animated fadeInLeft');
// 		showcase.children(".cloud9-item").each(function() {
// 			if($(this).css('z-index') != 100){
// 				$(this).css('filter', 'blur(2px)');
// 			}
// 			else{
// 				$(this).css('filter', 'blur(0px)');
// 			}
// 		});
// 	},
// 	onAnimationFinished: function(){
// 	}
// });

// 	$('.cloud9-item, #buttons>.left, #buttons>.right').click(function() {
// 		$('#carousel img:not(.cloud9-item, .circle4)').removeClass('animated fadeInUp');
// 		$('#carousel img.circle4').removeClass('animated fadeIn');
// 		$('#carousel h3').removeClass('animated fadeInLeft');
// 	});

$('.main-catalog-buttons>li a').click(function(event) {
	event.preventDefault();
	$(this).parent().siblings('.active').removeClass('active');
	$(this).parent().addClass('active');
	if ($(this).hasClass('show_table') && $(this).parent().hasClass('active')) {
		$('.catalog-content .tab').removeClass('catalog-list catalog-table').addClass('catalog-table');
		$('.preloader').css("display", 'flex').delay(300).fadeOut('slow');
	}
	if ($(this).hasClass('show_list') && $(this).parent().hasClass('active')) {
		$('.catalog-content .tab').removeClass('catalog-list catalog-table').addClass('catalog-list');
		$('.preloader').css("display", 'flex').delay(300).fadeOut('slow');
	}
});
});


// preloader
$(window).on('load', function() {
	$('.preloader').delay(700).fadeOut('slow');
});


function addActive(elem){
	$(elem).parents('ul').children('li').removeClass('active');
	$(elem).parent().addClass('active');
}