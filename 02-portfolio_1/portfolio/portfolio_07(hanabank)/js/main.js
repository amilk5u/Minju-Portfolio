$(document).ready(function(){
	/* 배너클릭-- */
	var banner = $('.banner-click');
		headerB = $('#header-banner');
	headerB.slideDown(500);
	banner.click(function(){
		headerB.slideUp(500);
	});
	

	
	/* 스와이프슬라이드 */
/* 	    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
	  loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });	 */
	
	// 스와이프 베이스	
//	<!-- Slider main container -->
//<div class="swiper-container">
//    <!-- Additional required wrapper -->
//    <div class="swiper-wrapper">
//        <!-- Slides -->
//        <div class="swiper-slide">Slide 1</div>
//        <div class="swiper-slide">Slide 2</div>
//        <div class="swiper-slide">Slide 3</div>
//        ...
//   </div>
//   <!-- If we need pagination -->
//    <div class="swiper-pagination"></div>
    
//    <!-- If we need navigation buttons -->
//    <div class="swiper-button-prev"></div>
//    <div class="swiper-button-next"></div>
    
//    <!-- If we need scrollbar -->
//    <div class="swiper-scrollbar"></div>
//</div>	
	
/*

엥커가 태그를 쓰지 않고 링크하기
<img src="http://placehold.it/1920x700" onclick="javascript:newin=window.open('about:blank'); newin.location.href='http://www.naver.com';" style="cursor:pointer" alt="" />

-참조-
<!--
	자바스크립트를 통한 링크(레퍼런스)
 	<img onclick="javascript:location.href='http://www.naver.com';" src="http://placehold.it/1920x700" alt="" />
	<img onclick="javascript:location.href='http://www.naver.com';" style="cursor:pointer" src="http://placehold.it/1920x700" alt="" /> 커서추가
	<img src="http://placehold.it/1920x700" onclick="javascript:newin=window.open('about:blank'); newin.location.href='http://www.naver.com';" style="cursor:pointer" alt="" /> 블랭크
-->
*/	
	
/* 	    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 100,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      virtual: {
        slides: (function () {
          var slides = [];
          for (var i = 0; i < 6; i += 1) {
            slides.push('Slide ' + (i + 1));
          }
          return slides;
        }()),
      },
    });
    document.querySelector('.slide-1').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.slideTo(0, 0);
    });
    document.querySelector('.slide-250').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.slideTo(249, 0);
    });
    document.querySelector('.slide-500').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.slideTo(499, 0);
    }); */
	
	
	/* 메인슬라이드 */
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 0,
	  loop: true,
     autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      }, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/* 호버.1 */
	var $shopping = $('#shopping');
		$travel = $('#travel');
		$culture = $('#culture');
		$movie = $('#movie');
		
		
		$text01 = $('.text01');
		$text02 = $('.text02');
		$text03 = $('.text03');
		$text04 = $('.text04');
		
    $shopping.hover(function(){
		$shopping.addClass('on1');
		$travel.removeClass('on1');
		$culture.removeClass('on1');
		$movie.removeClass('on1');
		$text01.addClass('on');
		$text02.removeClass('on');		
		$text03.removeClass('on');		
		$text04.removeClass('on');	
    });	
    $travel.hover(function(){
		$shopping.removeClass('on1');
		$travel.addClass('on1');
		$culture.removeClass('on1');
		$movie.removeClass('on1');
		$text02.addClass('on');
		$text01.removeClass('on');		
		$text03.removeClass('on');		
		$text04.removeClass('on');		
    });
    $culture.hover(function(){
		$shopping.removeClass('on1');
		$travel.removeClass('on1');
		$culture.addClass('on1');
		$movie.removeClass('on1');
		$text03.addClass('on');
		$text01.removeClass('on');		
		$text02.removeClass('on');		
		$text04.removeClass('on');		
    });
    $movie.hover(function(){
		$shopping.removeClass('on1');
		$travel.removeClass('on1');
		$culture.removeClass('on1');
		$movie.addClass('on1');
		$text04.addClass('on');
		$text01.removeClass('on');		
		$text02.removeClass('on');		
		$text03.removeClass('on');		
    });
	
	/* 호버.2 */
	var box01 = $('#section02 .hana-pay01 .wrap .box01');	
		box02 = $('#section02 .hana-pay01 .wrap .box02');	
		box03 = $('#section02 .hana-pay01 .wrap .box03');	
		box04 = $('#section02 .hana-pay01 .wrap .box04');	
		box01img = $('#section02 .hana-pay01 .wrap .box01 img');	
		box02img = $('#section02 .hana-pay01 .wrap .box02 img');	
		box03img = $('#section02 .hana-pay01 .wrap .box03 img');	
		box04img = $('#section02 .hana-pay01 .wrap .box04 img');	
		
		hana01 = $('#section02 .hana-pay01 .hana01');
		hana02 = $('#section02 .hana-pay01 .hana02');
		hana03 = $('#section02 .hana-pay01 .hana03');
		hana04 = $('#section02 .hana-pay01 .hana04');
		


	box01.hover(function(){
		hana01.stop(true).fadeIn(300);
		hana02.stop(true).fadeOut(100);
		hana03.stop(true).fadeOut(100);
		hana04.stop(true).fadeOut(100);
		box01img.attr({src:'img/mc_service_banner01_btn01.png'});
		box02img.attr({src:'img/mc_service_banner01_btn022.png'});
		box03img.attr({src:'img/mc_service_banner01_btn033.png'});
		box04img.attr({src:'img/mc_service_banner01_btn044.png'});
	});
	box02.hover(function(){
		hana02.stop(true).fadeIn(300);
		hana01.stop(true).fadeOut(100);
		hana03.stop(true).fadeOut(100);
		hana04.stop(true).fadeOut(100);
		box01img.attr({src:'img/mc_service_banner01_btn011.png'});
		box02img.attr({src:'img/mc_service_banner01_btn02.png'});
		box03img.attr({src:'img/mc_service_banner01_btn033.png'});
		box04img.attr({src:'img/mc_service_banner01_btn044.png'});
	});
	box03.hover(function(){
		hana03.stop(true).fadeIn(300);
		hana01.stop(true).fadeOut(100);
		hana02.stop(true).fadeOut(100);
		hana04.stop(true).fadeOut(100);
		box01img.attr({src:'img/mc_service_banner01_btn011.png'});
		box02img.attr({src:'img/mc_service_banner01_btn022.png'});
		box03img.attr({src:'img/mc_service_banner01_btn03.png'});
		box04img.attr({src:'img/mc_service_banner01_btn044.png'});
	});
	box04.hover(function(){
		hana04.stop(true).fadeIn(300);
		hana01.stop(true).fadeOut(100);
		hana02.stop(true).fadeOut(100);
		hana03.stop(true).fadeOut(100);
		box01img.attr({src:'img/mc_service_banner01_btn011.png'});
		box02img.attr({src:'img/mc_service_banner01_btn022.png'});
		box03img.attr({src:'img/mc_service_banner01_btn033.png'});
		box04img.attr({src:'img/mc_service_banner01_btn04.png'});
	});
	
	
	/* 슬라이드01 text-slider */
		var slider01 = $('.bx01').bxSlider({
		mode:'horizontal', 
		auto: false, 
		autoHover:true,
		stopAuto: false,
		controls:true,
		pager:false,
	});	
	
	/* 슬라이드02 sub-slider*/
	var slider_01 =$('.bx02').bxSlider({
			auto: true,
			autoControls: true, 
			mode:'fade',
			pager:true,
			controls:false,
		});
		
	/* 슬라이드03 sub2-slider*/
/* 	var slider_01 =$('.bx03').bxSlider({
			auto: true,
			autoControls: false, 
			mode:'fade',
			pager:true,
			controls:false,
		}); */

	  $('#slides').slidesjs({
        width: 170,
        height: 265,
        play: {
          active: true,
          auto: false,
          interval: 4000,
          swap: true
        }
      });
	
	
	/* 카드리스트 */
	var cardbtn = $('.wrap .card-list>img');
		cardlist = $('.card-list');
		cashlist = $('.cash-list');
		cardarticle01 = $('.card-list .article01');
		cardarticle02 = $('.card-list02');
		cash01 = $('.cash-list');
		cash02 = $('.cash-list02');
		
		
  		cardbtn.click(function(){
			cardlist.toggleClass('cardon');
			cardarticle01.fadeToggle(400);
			cardarticle02.fadeToggle(400);
		
			cash01.fadeToggle(500);
			cash02.fadeToggle(500); 
		}); 

	
		
		/* 메뉴호버-------------------- */
		
		var menu_01 = $('.main_nav #menu_01');
			menu_02 = $('.main_nav #menu_02');
			menu_03 = $('.main_nav #menu_03');
			menu_04 = $('.main_nav #menu_04');
			menu_05 = $('.main_nav #menu_05');
			menu_06 = $('.main_nav #menu_06');
			menu_07 = $('.main_nav #menu_07');

			
			nav02 = $('.header .nav02');
			

			menu_01.hover(function(){
				nav02.css({height:'600px'});
			},function(){
				nav02.css({height:'100px'});
			});
			menu_02.hover(function(){
				nav02.css({height:'400px'});
			},function(){
				nav02.css({height:'100px'});
			});
			menu_03.hover(function(){
				nav02.css({height:'440px'});
			},function(){
				nav02.css({height:'100px'});
			});
			menu_04.hover(function(){
				nav02.css({height:'610px'});
			},function(){
				nav02.css({height:'100px'});
			});
			menu_05.hover(function(){
				nav02.css({height:'650px'});
			},function(){
				nav02.css({height:'100px'});
			});
			menu_06.hover(function(){
				nav02.css({height:'400px'});
			},function(){
				nav02.css({height:'100px'});
			});
			menu_07.hover(function(){
				nav02.css({height:'530px'});
			},function(){
				nav02.css({height:'100px'});
			});
		
		/* 스크롤메뉴 호버 */
		
		var $scrollbg = $('.scroll_main_nav .scroll_sub .bg');
			scroll_menu01 = $('#scroll_menu01');
			scroll_menu02 = $('#scroll_menu02');
			scroll_menu03 = $('#scroll_menu03');
			scroll_menu04 = $('#scroll_menu04');
			scroll_menu05 = $('#scroll_menu05');
			scroll_menu06 = $('#scroll_menu06');
			scroll_menu07 = $('#scroll_menu07');
			scroll_menu = $('.scroll_main_nav li');
			
			$body = $('body');
		
			/* scroll_menu.css({backgroundColor:'red'}); */
		
 		scroll_menu.hover(function(){
			$body.css({filter:'50'});
		});
		
		scroll_menu01.hover(function(){
			$scrollbg.css({height:'500px'});
		},function(){
			$scrollbg.css({height:'0'});
		});		
		scroll_menu02.hover(function(){
			$scrollbg.css({height:'300px'});
		},function(){
			$scrollbg.css({height:'0'});
		});
		scroll_menu03.hover(function(){
			$scrollbg.css({height:'350px'});
		},function(){
			$scrollbg.css({height:'0'});
		});
		scroll_menu04.hover(function(){
			$scrollbg.css({height:'500px'});
		},function(){
			$scrollbg.css({height:'0'});
		});
		scroll_menu05.hover(function(){
			$scrollbg.css({height:'550px'});
		},function(){
			$scrollbg.css({height:'0'});
		});
		scroll_menu06.hover(function(){
			$scrollbg.css({height:'300px'});
		},function(){
			$scrollbg.css({height:'0'});
		});
		scroll_menu07.hover(function(){
			$scrollbg.css({height:'450px'});
		},function(){
			$scrollbg.css({height:'0'});
		});
	



		// scroll
	$(window).stop(true).scroll(function(){ 
		var $info = $(this).scrollTop();
			$scroll_nav = $('.scroll_nav');
		
		$('.thisscroll').text($info);
		
				
		if($info > 650){
			$scroll_nav.fadeIn(600);
		}else{
			$scroll_nav.fadeOut(300);
		}		
		
		
		
		
		
		
	});
	
	
	
	
	
	/* 푸터버튼 familysite */
	var familysite = $('.btn_familysite');
		familybtn = $('.slideup');
		familyimg = $('.btn_familysite .img');
		
		familysite.click(function(){
			familybtn.toggle();
			familyimg.toggleClass('on02');
		});




	
	
	
	
	
	
	
});