$(document).ready(function(){
	/* 섹션애니메이션 -------------------------*/
	$scroll=$('.scroll');	
	$anitext=$('.anitext');	
	/* 원페이지스크롤--------------------------- */
	$('#wraper').onepage_scroll({
		sectionContainer: "section",
		easing: "ease", 			
		animationTime: 1000,
		pagination: true, 
		updateURL: false,
		beforeMove: function(index){
			$anitext.css({display:'none'});
		},
		afterMove :  function (index) {
			$anitext.fadeIn(1800);
		},
		loop: false, 
		keyboard: true,
		responsiveFallback: false,
		direction: "vertical"  			
	});	
	/* 스크롤클릭다운 -----------------------------*/
	$scroll.click(function(){
		$('#wraper').moveDown();
	});	
	/* 메인 로고 페이드인------------------------ */
		mainlogo = $('#section01 .logo');		
		mainlogo.fadeIn(4000);	
	/* 서브네비호버------------------------------------------------ */
	var sub01 = $('.sub_nav li:nth-child(1)');
		sub02 = $('.sub_nav li:nth-child(2)');
		sub03 = $('.sub_nav li:nth-child(3)');
		sub04 = $('.sub_nav li:nth-child(4)');
		sub05 = $('.sub_nav li:nth-child(5)');
		sub06 = $('.sub_nav li:nth-child(6)');
		pagination01 = $('.onepage-pagination li:nth-child(1) a');
		pagination02 = $('.onepage-pagination li:nth-child(2) a');
		pagination03 = $('.onepage-pagination li:nth-child(3) a');
		pagination04 = $('.onepage-pagination li:nth-child(4) a');
		pagination05 = $('.onepage-pagination li:nth-child(5) a');
		pagination06 = $('.onepage-pagination li:nth-child(6) a');
		
		pagination01.hover(function(){
			sub01.css({opacity:'1'});
		},function(){
			sub01.css({opacity:'0'});
		});
		pagination02.hover(function(){
			sub02.css({opacity:'1'});
		},function(){
			sub02.css({opacity:'0'});
		});
		pagination03.hover(function(){
			sub03.css({opacity:'1'});
		},function(){
			sub03.css({opacity:'0'});
		});
		pagination04.hover(function(){
			sub04.css({opacity:'1'});
		},function(){
			sub04.css({opacity:'0'});
		});
		pagination05.hover(function(){
			sub05.css({opacity:'1'});
		},function(){
			sub05.css({opacity:'0'});
		});
		pagination06.hover(function(){
			sub06.css({opacity:'1'});
		},function(){
			sub06.css({opacity:'0'});
		});		
	/*  text */		
	var sec02t=$('#section02 .text');
	sec03t=$('#section03 .text');
	sec04t=$('#section04 .text');
	sec05t=$('#section05 .text');
	sec06t=$('#section06 .text');
	
	/* text의 이미지 */
	var sec02timg=$('#section02 .text img');
	sec03timg=$('#section03 .text img:last-child');
	sec04timg=$('#section04 .text img:last-child');
	sec05timg=$('#section05 .text img:last-child');
	sec06timg=$('#section06 .text img:last-child');
	
	/* background */
	var back02=$('#section02 .background img');
	back03=$('#section03 .background img');
	back04=$('#section04 .background img');
	back05=$('#section05 .background img');
	back06=$('#section06 .background img');
	
	/* 이미지호버 배경필터블러적용------------------------------- */
	
	sec02timg.hover(function(){
		back02.attr({src:'img/img02fiter.jpg'});
	},function(){
		back02.attr({src:'img/img02.jpg'});
	});
	sec03timg.hover(function(){
		back03.attr({src:'img/img03fiter.jpg'});
		$(this).attr({src:'img/buttonb.png'});
	},function(){
		back03.attr({src:'img/img03.jpg'});
		$(this).attr({src:'img/buttonw.png'});
	});
	sec04timg.hover(function(){
		back04.attr({src:'img/img05fiter.jpg'});
		$(this).attr({src:'img/buttonb1.png'});
	},function(){
		back04.attr({src:'img/img05.jpg'});
		$(this).attr({src:'img/buttonw1.png'});
	});
	sec05timg.hover(function(){
		back05.attr({src:'img/img06fiter.jpg'});
		$(this).attr({src:'img/buttonb1.png'});
	},function(){
		back05.attr({src:'img/img06.jpg'});
		$(this).attr({src:'img/buttonw1.png'});
	});
	sec06timg.hover(function(){
		back06.attr({src:'img/img07fiter.jpg'});
		$(this).attr({src:'img/buttonb.png'});
	},function(){
		back06.attr({src:'img/img07.jpg'});
		$(this).attr({src:'img/buttonw.png'});
	});
	
	/* 호버시 이미지바뀜 */



	
	
	
	
	
	
});
