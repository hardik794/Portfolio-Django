/*--------------------- Copyright (c) 2019 -----------------------
[Master Javascript]

Project: Portfolio Responsive HTML Template
Version: 1.0.6
Assigned to: ThemeForest
------------------------------------------------------------------


------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var portfolio = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- CV Portfolio Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.open_menu();
			this.custom_scrollbar();
			this.rightbtn_onload();
			this.rightside_onload();
			this.bannerleft_onload();
			this.banner_typingtext();
			this.typed_js();
			this.about_opendetails();
			this.isotop_gallery();
			this.circle_progressbar();
			this.magnific_popup();
			this.testimonial_slider();
			this.popup_video();			
			this.responsor_slider();			
			this.world_map();
			this.contact_form();
			this.goto_top();
			this.page_scroll();
			this.window_scroll();
			this.scroll_contact();
			this.read_more();
			
		},
		
		/*-------------- CV Portfolio Functions Calling ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		
	// open menu click toggle
	open_menu: function() {
		if($('.port_togglebox').length > 0){
			$('.port_togglebox').on('click', function(){
				$('body').toggleClass('port_menu_open');
			});
		}
	},
	/*---------------------------------------------------------------------------------------------------*/
	
	
	/*---------------------------------------------------------------------------------------------------*/
	//start custom scroll bar
	custom_scrollbar: function() {
		if($('.port_sidebar_wrapper').length > 0){
			$('.port_sidebar_wrapper').mCustomScrollbar({
			moveDragger:true,
			scrollEasing:"easeOut"
			});
		}
	},
	/*---------------------------------------------------------------------------------------------------*/
	
	// start on load 
	bannerleft_onload: function() {
		if($('.bannner_leftpart').length > 0){
			$(window).on('load', function(){
			setTimeout(function() {
				$('.bannner_leftpart').addClass('mbannner_leftpart');
				}, 300);
			});
		}
	},
	/*------------------------------------------------------------------*/

	// right side image
	rightside_onload: function() {
		if($('.banner_svg_box').length > 0){
			$(window).on('load', function(){
			setTimeout(function() {
				$('.banner_svg_box').addClass('mbanner_svg_box');
				}, 1500);
			});
		}
	},		
	/*------------------------------------------------------------------*/ 
	
	// right side hire me btn
	rightbtn_onload: function() {
		if($('.brc_hirebtn').length > 0){	
			$(window).on('load', function(){
			setTimeout(function() {
				$('.brc_hirebtn').addClass('mbrc_hirebtn');
				}, 2500);
			});
		}
	},
	/*------------------------------------------------------------------*/ 
	
	// Typed JS
	typed_js: function() {
		if($('.typed').length > 0){	
			$('.typed').each(function(){
				var _this = $(this);
				var typed = new Typed(this, {
					stringsElement: _this.parent().find('.typed-strings')[0],
					typeSpeed: 100,
					backSpeed: 80,
					fadeOut: false,
					loop: true
				});
			});
		}
	},
	/*------------------------------------------------------------------*/ 
	
	// animated banner text
	banner_typingtext: function() {
		if($('.icon').length > 0){
			$('.banner_typingtext').textillate({
				loop: true,
				minDisplayTime: 2e3,
				initialDelay: 0,
				autoStart: true,
				"in": {
					effect: "bounceIn",
					// effect: "bounceInDown",
					delayScale: 2.5,
					delay: 50,
					sync: false,
					shuffle: false,
					reverse: false
				},
				out: {
					effect: "bounceOut",
					// effect: "bounceOut",
					delayScale: 2.5,
					delay: 0,
					sync: false,
					shuffle: false,
					reverse: false
				}
			});
		}
	},
	/*------------------------------------------------------------------*/ 
	
	//about open details 
	about_opendetails: function() {
		if($('.icon').length > 0){
			$('.icon').on('click', function() {
				$('.about_leftsection').toggleClass('open_details');
			});
		}
	},
	
	/*------------------------------------------------------------------*/ 
	// Start isotop gallery js 
		isotop_gallery: function() {
			if($('.gallery_grid').length > 0){
				$('.gallery_grid').isotope({
						itemSelector: '.grid-item',
						filter: '*'
					});
					$('.port_project_gallery > .gallery_nav > ul > li').on( 'click', 'a', function() {
						// filter button click
						var filterValue = $( this ).attr('data-filter');
						$('.gallery_grid').isotope({ filter: filterValue });

						//active class added
						$('a').removeClass('gallery_active');
						$(this).addClass('gallery_active');
					});
			}
		},
	/*------------------------------------------------------------------*/ 
	
	// magnifiv popup for project gallery
	magnific_popup: function() {
			if($('.view').length > 0){
			$('.view').magnificPopup({
			  type: 'image',
			  
			  gallery: {
				// options for gallery
				enabled: true
			  }
			  
			  // other options
			});
		}
	},
	/*------------------------------------------------------------------*/
	// Start testimonial swipper slider
	testimonial_slider: function() {
		if($('.port_testimonial_setions .swiper-container').length > 0){
			var swiper = new Swiper('.port_testimonial_setions .swiper-container', {
			  slidesPerView: 1,
			  spaceBetween: 30,
			  loop: true,
			  speed:1000,
			   navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
			  autoplay: {
					delay: 5500,
					disableOnInteraction: false,
				},
			});
		}
	},
	// End testimonial swipper slider
	/*------------------------------------------------------------------*/ 
	
	// Re sponsor swipper slider
	responsor_slider: function() {
		if($('.port_responsor_setions .swiper-container').length > 0){
			var swiper = new Swiper('.port_responsor_setions .swiper-container', {
			  slidesPerView: 5,
			  spaceBetween: 30,
			  loop: true,
			  speed:1000,
			  autoplay: {
					delay: 3500,
				},
				
			// Responsive breakpoints
			  breakpoints: {
				// when window width is <= 320px
				480: {
				  slidesPerView: 1,
				  spaceBetween: 10
				},
				// when window width is <= 480px
				767: {
				  slidesPerView: 3,
				  spaceBetween: 20
				},
				// when window width is <= 640px
				991: {
				  slidesPerView: 4,
				  spaceBetween: 30
				}
			  }
		 
			});
		}
	},
	
	// End Re sponsor swipper slider
	/*------------------------------------------------------------------*/ 
	
	// circle progress bar js start
	circle_progressbar: function() {
		if($('.progressbar').length > 0){
			$(document).ready(function(){
				function animateElements() {
					$('.progressbar').each(function () {
						var elementPos = $(this).offset().top;
						var topOfWindow = $(window).scrollTop();
						var percent = $(this).find('.circle').attr('data-percent');
						var animate = $(this).data('animate');
						if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
							$(this).data('animate', true);
							$(this).find('.circle').circleProgress({
								startAngle: -Math.PI / 2,
								value: percent / 100,
								size : 400,
								thickness: 15,
								lineCap: 'round',
								fill: {
									color: '#fff'
								}
							}).on('circle-animation-progress', function (event, progress, stepValue) {
								$(this).find('strong').text((stepValue*100).toFixed(0) + "%");
							}).stop();
						}
					});
				}

				animateElements();
				$(window).scroll(animateElements);

			
			});
		}
	},
		
	// circle progress bar js start
	/*------------------------------------------------------------------*/ 
	
	// start map js
	world_map: function() {
		if($('#world-map').length > 0){
			$(function(){
				$('#world-map').vectorMap({
				map: 'world_mill',
				scaleColors: ['#C8EEFF', '#0071A4'],
				normalizeFunction: 'polynomial',
				hoverOpacity: 0.9,
				hoverColor: false,
				zoomOnScrollSpeed:1, //default value is 3
				 zoomStep:1.1, //default value is 1.6
					markerStyle: {
									initial:{
												fill: '#00c8da',
												stroke: '#556d91'
											},
									hover: {
												stroke: '#00c8da',
												fill:'#ffc454',
												"stroke-width": 2,
												cursor: 'pointer'
											},
									selected:{
												fill: 'blue'
											},
									selectedHover: {
													}
								},
					regionStyle:{
									initial: {
												fill: '#e3eaef',
												"fill-opacity": 1,
												stroke: 'none',
												"stroke-width": 0,
												"stroke-opacity": 1
											},
									hover: {
												"fill-opacity": 0.8,
												cursor: 'pointer'
											},
									selected:{
												fill: 'yellow'
											},
									selectedHover: {
													}
								},
					backgroundColor: '#fff',
					markers: [
						{
							latLng: [31.230391, 121.473701],
							name: 'Shanghai',
						},
						{
							latLng: [39.904202, 116.407394],
							name: 'Beijing',
						},
						{
							latLng: [28.70406, 77.102493],
							name: 'Delhi',
						},
						{
							latLng: [6.524379, 3.379206],
							name: 'Lagos',
						},
						{
							latLng: [39.343357, 117.361649],
							name: 'Tianjin',
						},
						{
							latLng: [24.860735, 67.001137],
							name: 'Karachi',
						},
						{
							latLng: [41.00824, 28.978359],
							name: 'Istanbul',
						},
						{
							latLng: [35.689487, 139.691711],
							name: 'Tokyo',
						},
						{
							latLng: [23.12911, 113.264381],
							name: 'Guangzhou',
						},
						{
							latLng: [19.075983, 72.877655],
							name: 'Mumbai',
						},
						{
							latLng: [40.7127837, -74.0059413],
							name: 'New York',
						},
						{
							latLng: [34.052235, -118.243683],
							name: 'Los Angeles',
						},
						{
							latLng: [41.878113, -87.629799],
							name: 'Chicago',
						},
						{
							latLng: [29.760427, -95.369804],
							name: 'Houston',
						},
						{
							latLng: [33.448376, -112.074036],
							name: 'Phoenix',
						},
						{
							latLng: [51.507351, -0.127758],
							name: 'London',
						},
						{
							latLng: [48.856613, 2.352222],
							name: 'Paris',
						},
						{
							latLng: [55.755825, 37.617298],
							name: 'Moscow',
						},
						{
							latLng: [40.416775, -3.70379],
							name: 'Madrid',
						},
					]
				  });
				});
		}
	},
	// end map js
	/*------------------------------------------------------------------*/ 
	
	// start video popup js
	popup_video: function() {
		if($('.testimonial_icon .video').length > 0){
			$('.testimonial_icon .video').magnificPopup({ 
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					'<div class="mfp-title">Some caption</div>'+
					'</div>',
				patterns: {
					youtube: {
						index: 'youtube.com/', 
						id: 'v=',
						src: 'https://www.youtube.com/embed/fpQcEiwxzQE'
						}
					}
				}
				// other options
			});	
		}
	},
	// End video popup js
	/*------------------------------------------------------------------*/
	
	// Contact Form Submission
	contact_form: function() {
		if($('.submitForm').length > 0){
			function checkRequire(formId , targetResp){
				targetResp.html('');
				var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
				var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
				var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
				var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
				var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
				var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
				var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
				var check = 0;
				$('#er_msg').remove();
				var target = (typeof formId == 'object')? $(formId):$('#'+formId);
				target.find('input , textarea , select').each(function(){
					if($(this).hasClass('require')){
						if($(this).val().trim() == ''){
							check = 1;
							$(this).focus();
							targetResp.html('You missed out some fields.');
							$(this).addClass('error');
							return false;
						}else{
							$(this).removeClass('error');
						}
					}
					if($(this).val().trim() != ''){
						var valid = $(this).attr('data-valid');
						if(typeof valid != 'undefined'){
							if(!eval(valid).test($(this).val().trim())){
								$(this).addClass('error');
								$(this).focus();
								check = 1;
								targetResp.html($(this).attr('data-error'));
								return false;
							}else{
								$(this).removeClass('error');
							}
						}
					}
				});
				return check;
			}
			$('.submitForm').on('click', function() {
				var _this = $(this);
				console.log(_this.attr('data-type'));
				var targetForm = _this.closest('form');
				var errroTarget = targetForm.find('.response');
				var check = checkRequire(targetForm , errroTarget);
				if(check == 0){
					var formDetail = new FormData(targetForm[0]);
    					formDetail.append('form_type' , _this.attr('data-type'));
					$.ajax({
						method : 'post',
						url : 'ajax.php',
						data:formDetail,
						cache:false,
						contentType: false,
						processData: false
					}).done(function(resp){
						if(resp == 1){
							targetForm.find('input').val('');
							targetForm.find('textarea').val('');
							errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
						}else{
							errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
						}
					});
				}
			});
		}
	},		
	
	
	/*------------------------------------------------------------------*/
	
	/*------------------------------------------------------------------*/
	// Go to Top button
	goto_top: function() {
		if($('.bottom_top').length > 0){
			$(function(){
				// Scroll Event
				$(window).on('scroll', function(){
					var scrolled = $(window).scrollTop();
					if (scrolled > 600) $('.bottom_top').addClass('active');
					if (scrolled < 600) $('.bottom_top').removeClass('active');
				});  
				// Click Event
				$('.bottom_top').on('click', function() {
					$("html, body").animate({ scrollTop: "0" },  500);
				});
			});
		}
	},	
	/*------------------------------------------------------------------*/ 
	
	/*------------------------------------------------------------------*/ 
	//Single page scroll js
	page_scroll: function() {
		if($('.port_navigation.index_navigation .nav_list li').length > 0){	
			$('.port_navigation.index_navigation .nav_list li').on('click' , function(e){
				$('.port_navigation .nav_list li').removeClass('active');
				$(this).addClass('active');
				var target = $('[data-scroll='+$(this).attr('data-number')+']');
				e.preventDefault();
				var targetHeight = target.offset().top-0;
				$('html, body').animate({
					scrollTop: targetHeight
				}, 1000);
			});
		}
	},	
	//scroll active class js
	window_scroll: function() {
		if($('.port_navigation').length > 0){	
			$(window).scroll(function() {
				var windscroll = $(window).scrollTop();
				var target = $('.port_navigation .nav_list li');
				if (windscroll >= 0) {
					$('[data-scroll]').each(function(i) {
						if ($(this).position().top <= windscroll + 78) {
							target.removeClass('active');
							target.eq(i).addClass('active');
						}
					});
				}else{
					target.removeClass('active');
					$('.port_navigation .nav_list li:first').addClass('active');
				}
			});
		}
	},
	/*------------------------------------------------------------------*/ 
	
	/*------------------------------------------------------------------*/
	//click to scroll
	scroll_contact: function() {
		if($('#redirect_contact').length > 0){
			$('#redirect_contact').on('click', function() {
				$('html, body').animate({
					scrollTop: $('#scroll_contact').offset().top
				}, 2000);
			});
		}
	},
	/*------------------------------------------------------------------*/ 
	
	/*------------------------------------------------------------------*/ 
	//Read more
	read_more: function() {
		if($('.ex_btn').length > 0){
			$('.ex_btn').on('click', function() {
				$(".more_content").not($(this).siblings(".more_content")).slideUp();
				$(".ex_btn").not(this).text("Read More");
				$(this).siblings('.more_content').slideToggle();
			  if ($(this).text() == "Read More") {
				$(this).text("Read Less")
			  } else {
				$(this).text("Read More")
			  }
			});
			 $('.ex_rightside').on('click', function(e) {
				e.stopPropagation(); 
			});
		}
	},
	/*------------------------------------------------------------------*/ 
	
	};
	portfolio.init();
	
	
	
	
	
	$(window).on('load', function() {
		$(".status").fadeOut(1800);
		$(".preloader").delay(1000).fadeOut("slow");
	});
		
}(jQuery));	
