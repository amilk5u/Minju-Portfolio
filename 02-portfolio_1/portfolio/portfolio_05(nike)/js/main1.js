$(document).ready(function(){
	var slider = $('.slider').bxSlider({
		mode:'horizontal', 
		auto: true, 
		pause:2000,
		autoHover:false,
		pager:true,
		stopAuto:true
		/* autoControls: true, 
		/* captions: true, */
		/* keyboardEnabled:true, */
		/* autoDirection:'next', */
		/* pager:false, */
		/* controls:false, */
		/* autoControls: true, 
		/* slideWidth: 600 */	
	});	
/* 	
	var slider2 = $(".slider2").bxSlider({
		mode:"horizontal",
		speed:500,			//스피드
		pager:false,			//인디케이터
		moveSlides:1,		//넘어가는 슬라이드 갯수
		slideWidth:125,	//슬라이드 너비
		minSlides:4,		//최소슬라이드화면갯수
		maxSlides:6,		//최대슬라이드
		slideMargin:30,
		auto:true,
		autoHover:true,
		controls:false,
		keyboardEnabled:true,
	}); */

	// 클릭시 멈춤 현상 해결 //
		$(document).on('click','.bx-next, .bx-prev',function() {
		slider.stopAuto();
		slider.startAuto();
		slider1.stopAuto();
		slider1.startAuto();
		});
		$(document).on('mouseover','.bx-pager', function() {
		slider.stopAuto();
		slider.startAuto();
		slide2.stopAuto();
		slider2.startAuto();
		});	
		
	
	
	
	
	
	/* 클릭액션------------------- */
		var up =$('.b-up');
			down=$('.b-down');
			wraper =$('.wraper');	
			currentIndex = 0;		
			

			$article =$('.content .wraper article').height();	
			$img =$('.content .wraper article .box').height();	

			

/* 		up.click(function(){
			wraper.css({
				marginTop:'+=680px'
				});
			if(currentIndex ==0){
				wraper.css({
					marginTop:'0'
				});
			}else{
				currentIndex++;
			} */
		down.click(function(){
			wraper.css({
				marginTop:'-=680px'
			});
			if(currentIndex ==5){
				wraper.css({
					marginTop:'-3400px'
				});
				down.addClass('on01');
			}else{
				currentIndex++;
				down.removeClass('on01');
			}			
		});
		
		up.click(function(){
			wraper.css({
				marginTop:'+=680px'
			});
			if(currentIndex ==0){
				wraper.css({
					marginTop:'0'
				});
			}else{
				currentIndex--;
			}
			
		});

		
		
		
		

		var jodun = $('.brand03');
		var jodunimg = $('.brand03 img');		
			converse = $('.brand04');
			converseimg = $('.brand04 img');
		
		jodun.hover(function(){
			jodunimg.attr('src','img/global2.png');
		},function(){
			jodunimg.attr('src','img/global.png');
		});
		converse.hover(function(){
			converseimg.attr('src','img/converse2.png');
		},function(){
			converseimg.attr('src','img/converse.png');
		});
		
	/* 스와이퍼슬라이드-------------------------------------------------- */
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 30,
      // init: false,		
	  loop: true, //무한루프
	  autoplay: {
        delay: 5000,
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
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
		
	/* 윈도우 스크롤---------------------------------------------------------- */
	$(window).scroll(function(){	
	
		var $info = $(this).scrollTop();			

		$('.s').text($info);
		
		var sec05h1=$('#section05 .text01 h1');
		   	sec05p=$('#section05 .text01 p');
		 	sec05h5=$('#section05 .text01 h5');
		
		
		/* text action++++++++*/
		if($info < 5000 ){ 					
			sec05h1.css({
				opacity:'0',
				top:'400px'
			});
			sec05p.css({
				opacity:'0',
				top:'400px'
			});
			sec05h5.css({
				opacity:'0',
				top:'600px'
			});
			
		}else if($info < 5000){				
			sec05h1.css({
				opacity:'1',
				top:'50px'
			});
			sec05p.css({
				opacity:'1',
				top:'150px'
			});
			sec05h5.css({
				opacity:'1',
				top:'300px'
			});
		}else{									
			sec05h1.css({
				opacity:'1',
				top:'50px'
			});
			sec05p.css({
				opacity:'1',
				top:'150px'
			});
			sec05h5.css({
				opacity:'1',
				top:'300px'
			});
		}


		
		
		
		
		/* 예시============ */
		
		if($info < 2100){ 					/* 커서가 2100px 보다 위로 갈때 없어져라 */
			img03.fadeOut(700);		
		}else if($info < 3900){				/* 커서가 3900px 보다 위로갈때 보여라 */
			img03.fadeIn(2000);
			$a.css({color:'white'});	
		}else{									 /* 둘다아닐때 없어져라 */
			img03.fadeOut();
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

	});

});