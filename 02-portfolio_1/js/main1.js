$(document).ready(function(){	

	/* 인트로효과----------------------------------------------------------------------------------- */
	var main = $('.main');
		slogan = $('.slogan');	
		btn01 = $('.menu-btn');	
		btn02 = $('.view-btn');	
		about = $('.left');	
		contact = $('.right');			
		
	main.animate({top:'230px'},700 ,'easeOutBounce');
	/* slogan.animate({top:'220px'},850, 'easeOutBounce'); */
	btn01.animate({opacity:'1'},850);
	btn02.animate({opacity:'1'},850);
	
	/* 메인페이지 이벤트효과------------------------------------------------------------------------  */
	var $s01 = $('#section00');
		$bottom = $('.bottom');
	var $dt = $s01.find('h1');
	var $dd = $s01.find('p');
	var $mDown = $s01.find('.mDown');
	var $main = $('#section01');
	var $ball01 = $('.ball01');
	var $ball02 = $('.ball02');
	var $header = $('#header');
	var $type = $('.type');
		$hmain= $('.view-btn02');
		$menubox = $('.menu-box');	
		/* text */
		$left = $('.left');
		$right = $('.right');
		$left01 = $('.left01');
		$right01 = $('.right01');	
		
	/* 메인다운를 클릭했을때  */
	$mDown.click(function(){
		$main.css('display','block');
		$s01.slideUp(700); 
		$mDown.fadeOut(700);
		$header.slideDown();
		$('footer').fadeIn();
		$left.fadeIn(400);
		$right.fadeIn(400);
		$left01.fadeOut(1);
		$right01.fadeOut(1);
	});				 

	
	
	
	/* main animation +++++++++++++++++++++++++++++++++++++++*/
		$sec0=$('#section00');
		$colo=$('.colo');
		/* border */
		$bo=$('.bo');
		/* mainimg */
		$mainI1b=$('#section00 .img1');
		$mainI1=$('#section00 .img1>img');
		$mainI2b=$('#section00 .img2');
		$mainI2=$('#section00 .img2>img');
		/* charmshinportfolio */
		$maint1=$('#section00 .mainimg1');
		$maint2=$('#section00 .mainimg2');
		var $mDown = $s01.find('.mDown');

		
		/* back */
		$colo.css({backgroundColor:'white'});
		$('.intro').fadeIn().delay(1200).fadeOut();
		/* 반전배경 */
		$mainI2b.delay(2000).fadeIn(800);	
		/* 반전배경이미지 */
		$mainI2.delay(3000).fadeOut(300);
		/* 반전text */
		$maint2.delay(2000).fadeIn(800).delay(200).fadeOut(300);
		
		
		/* 컬러배경 */
		$mainI1b.delay(3000).fadeIn(1);
		/* 컬러text */
		$maint1.delay(3000).fadeIn(1);
		/* 반전배경애니메이션 */
		$mainI2b.delay(400).animate({
			left:'450%'			
		},1200,'easeInOutCubic');
		/* 보더 */
		$bo.delay(4000).fadeIn(300);
		/* 글자 */
		$('.maintext').delay(4000).fadeIn(300);
		/* 다운 */
		$mDown.delay(4000).animate({
			top:'90%'
		},900,'easeInOutCubic');


	
		
	/* 메인메뉴클릭시에 메뉴박스보이기------------------------------------------------------------- */
	
			/* 클릭메뉴 */
		var $click = $('.menu-box .click');
			$ba1 = $('.menu-box >.menu >a:eq(0)');
			$ba2 = $('.menu-box >.menu >a:eq(1)');
			$ba3 = $('.menu-box >.menu >a:eq(2)');
			$ba5 = $('.menu-box >.menu >a:eq(3)');
			
			/* 섹션 */
			$section00 = $('#section00');
			$section01 = $('#section01');
			$section02 = $('#section02');
			$section03 = $('#section03');
			
			/* text */
			$left = $('.left');
			$right = $('.right');
			$left01 = $('.left01');
			$right01 = $('.right01');	

			$main2 =$('.main2>h1');
		
		/* slide Up/Down */
		$hmain.click(function(){
			$menubox.slideDown();
		});				
		$click.click(function(){
			$menubox.slideUp();
		});				
		

		/* main click */
		$ba1.click(function(){					
			$menubox.slideUp(500);
			$section01.fadeOut(1);
			$section02.fadeOut(1);
			$section03.fadeOut(1);
			$('footer').fadeOut(1);
			$section00.fadeIn();
			$mDown.fadeIn();				
		});
		
		/* about click */
		$ba2.click(function(){					
			$menubox.slideUp(500);
			$section01.fadeOut(1);
			$section02.fadeIn(1);
			$section03.fadeOut(1);
			$section00.fadeOut(1);					
			$main2.text('ABOUT');
			
			/* text */
			$left.fadeOut(1);
			$right.fadeOut(1);
			$left01.fadeOut(1);
			$right01.fadeIn(1);
		});
		
		/* project click */
		$ba3.click(function(){					
			$menubox.slideUp(500);
			$section01.fadeIn(1);
			$section02.fadeOut(1);
			$section03.fadeOut(1);
			$section00.fadeOut(1);					
			$main2.text('PROJECT');
			
			/* text */
			$left.fadeIn(1);
			$right.fadeIn(1);
			$left01.fadeOut(1);
			$right01.fadeOut(1);
		});
		
		/* contact click */
		$ba5.click(function(){					
			$menubox.slideUp(500);
			$section01.fadeOut(1);
			$section02.fadeOut(1);
			$section03.fadeIn(1);
			$section00.fadeOut(1);		
			$main2.text('CONTACT');			

			/* text */
			$left.fadeOut(1);
			$right.fadeOut(1);
			$left01.fadeIn(1);
			$right01.fadeOut(1);
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	/* 박스호버------------------------------------------------------------------------------------------- */
		var $box01 = $('#box01');
		$img01 = $('#img01');
		$box02 = $('#box02');
		$img02 = $('#img02');
		$box03 = $('#box03');
		$img03= $('#img03');
		$box04 = $('#box04');
		$img04= $('#img04');
		$box05 = $('#box05');
		$img05= $('#img05');
		$box06 = $('#box06');
		$img06= $('#img06');	
		$box07 = $('#box07');
		$img07= $('#img07');	
		$box08 = $('#box08');
		$img08= $('#img08');	
	
	/* 호버액션------------------------------------------------------------------------------------------- */
	$lefthover = $('.left-hover');
	$righthover = $('.right-hover');
	$left = $('.left');
	$right = $('.right');
	$left01 = $('.left01');
	$right01 = $('.right01');


	

	/* 애니메이션---------------------------------------------------------------------------------------- */
	var $animateleft = $('.animateleft');	
		$animateright = $('.animateright');	
		$animateleft01 = $('.animateleft01');	
		$animateright01 = $('.animateright01');	
		$section01 = $('#section01');
		$section02 = $('#section02');
		$section03 = $('#section03');
		$left = $('.left');
		$right = $('.right');
		$left01 = $('.left01');
		$right01 = $('.right01');	
		$footer = $('footer');	
	var $info = $(this).scrollTop();
		$main2 =$('.main2>h1');
	
	
	
	/* left */
	$left.click(function(){
		$animateleft.animate({
			width:'100%'
		},1000 ,'easeInOutExpo',function(){
			$(this).animate({
				left:'100%'
			},function(){
				$(this).css({
					width:'0px',
					left:'0'
				});
			});
			$section01.hide();
			$left.hide();
			$right.hide();
			$right01.show();
			$section02.show();
			$right01.show();
			$main2.text('ABOUT');
		});
	});
	
	/* right01 */
	$right01.click(function(){
		$animateright01.animate({
			width:'100%'
		},1000, 'easeInOutExpo',function(){
			$(this).animate({
				right:'100%'
			},function(){
				$(this).css({
					width:'0',
					right:'0'
				});
			});
			$section02.hide();
			$right01.hide();
			$section01.show();
			$left.show();
			$right.show();
			$main2.text('PROJECT');
		});
	});
	
	/* right */
	$right.click(function(){
		$animateright.animate({
			width:'100%'
		},1000 ,'easeInOutExpo' ,function(){
			$(this).animate({
				right:'100%'
			},function(){
				$(this).css({
					width:'0px',
					right:'0'
				});
			});
			$section01.hide();
			$left.hide();
			$right.hide();
			$left01.show();
			$section03.show();
			$main2.text('CONTACT');
		});
	});
	
	/* left01 */
	$left01.click(function(){
		$animateleft01.animate({
			width:'100%'
		},1000, 'easeInOutExpo',function(){
			$(this).animate({
				left:'100%'
			},function(){
				$(this).css({
					width:'0',
					left:'0'
				});
			});
			$section03.hide();
			$left01.hide();
			$section01.show();
			$left.show();
			$right.show();
			$main2.text('PROJECT');
		});
	});

	


	
	
	
	
	
	
	
	
	
	
	
	
	
	/* modal screen+++++++++++++++++++++++++++++++++++++ */
	var $m1 = $('.modal_01');
		$m2 = $('.modal_02');
		$m3 = $('.modal_03');
		$m4 = $('.modal_04');
		$m5 = $('.modal_05');
		$m6 = $('.modal_06');
		$m7 = $('.modal_07');
		$m8 = $('.modal_08');
	
	
	/* sk */
	$box01.click(function(){
		$m1.fadeIn(200);		
	});
	/* go*/
	$box02.click(function(){
		$m3.fadeIn(200);			
	});
	/* smeg */
	$box03.click(function(){
		$m2.fadeIn(200);		
	});
	/* motion */
	$box04.click(function(){
		$m4.fadeIn(200);			
	});
	/* nike */
	$box05.click(function(){
		$m5.fadeIn(200);			
	});
	/* unitbase */
	$box06.click(function(){
		$m6.fadeIn(200);			
	});
	/* hanacard */
	$box07.click(function(){
		$m7.fadeIn(200);			
	});
	/* kakao */
	$box08.click(function(){
		$m8.fadeIn(200);			
	});

	
	
	
	$('.back').click(function(){
		$m1.fadeOut(150);
		$m2.fadeOut(150);
		$m3.fadeOut(150);
		$m4.fadeOut(150);
		$m5.fadeOut(150);
		$m6.fadeOut(150);
		$m7.fadeOut(150);
		$m8.fadeOut(150);
	});
	$('.wraper .wrap').click(function(){
		$m1.fadeOut(150);
		$m2.fadeOut(150);
		$m3.fadeOut(150);
		$m4.fadeOut(150);
		$m5.fadeOut(150);
		$m6.fadeOut(150);
		$m7.fadeOut(150);
		$m8.fadeOut(150);
	});
	
	
	
	/* section02+++++++++++++++++++++++++++++++++++++++++++ */
	
	
	/* swiper========================== */
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 9,
      spaceBetween: 0,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
	
	

	
	
	
	
	
	
	
	
	
	
	
	/* 실시간스크롤높이값--------------------------------------------------------------------- */
	$(window).scroll(function(){
		var $info = $(this).scrollTop();
			
		
		$('.t').text($info);
		
		
		
			
			
			
			
			
	});
	
});