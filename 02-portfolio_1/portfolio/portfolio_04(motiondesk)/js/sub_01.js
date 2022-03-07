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
		
		var fiter05=$('.fiter');
		   	fiter05img=$('.fiter img');
		
		fiter05img.hover(function(){
			fiter05img.attr({src:'img/btn_story_001_over.png'});
		},function(){
			fiter05img.attr({src:'img/btn_story_001.png'});
		});
	
	
	
	
	
	
});
