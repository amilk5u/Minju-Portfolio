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
	/* 서브네비호버글자-------------------------------------------------------------------------------------- */
	var sub01 = $('.sub_nav li:nth-child(1)');
		sub02 = $('.sub_nav li:nth-child(2)');
		sub03 = $('.sub_nav li:nth-child(3)');
		sub04 = $('.sub_nav li:nth-child(4)');
		sub05 = $('.sub_nav li:nth-child(5)');
		sub06 = $('.sub_nav li:nth-child(6)');
		sub07 = $('.sub_nav li:nth-child(7)');
		sub08 = $('.sub_nav li:nth-child(8)');
		sub09 = $('.sub_nav li:nth-child(9)');
		pagination01 = $('.onepage-pagination li:nth-child(1) a');
		pagination02 = $('.onepage-pagination li:nth-child(2) a');
		pagination03 = $('.onepage-pagination li:nth-child(3) a');
		pagination04 = $('.onepage-pagination li:nth-child(4) a');
		pagination05 = $('.onepage-pagination li:nth-child(5) a');
		pagination06 = $('.onepage-pagination li:nth-child(6) a');
		pagination07 = $('.onepage-pagination li:nth-child(7) a');
		pagination08 = $('.onepage-pagination li:nth-child(8) a');
		pagination09 = $('.onepage-pagination li:nth-child(9) a');
		
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
		pagination07.hover(function(){
			sub07.css({opacity:'1'});
		},function(){
			sub07.css({opacity:'0'});
		});		
		pagination08.hover(function(){
			sub08.css({opacity:'1'});
		},function(){
			sub08.css({opacity:'0'});
		});		
		pagination09.hover(function(){
			sub09.css({opacity:'1'});
		},function(){
			sub09.css({opacity:'0'});
		});		
		
		var fiter05=$('.fiter');
		   	fiter05img=$('.fiter img');
		
		fiter05img.hover(function(){
			fiter05img.attr({src:'img/btn_story_001_over.png'});
		},function(){
			fiter05img.attr({src:'img/btn_story_001.png'});
		});
	
	
		/* section09--------------------------------------------------------------------------------------- */
	
		/* main desk---------------------------------------------------------------- */
		var maindesk=$('.maindesk');
		desk01=$('.maindesk .desk img:first-child');
		desk02=$('.maindesk .desk img:last-child');
	
		desk01.hover(function(){
			$(this).attr({src:'img/img_compare_001_over.png'});
			desk02.css({filter:'blur(7px)'});
		},function(){
			$(this).attr({src:'img/img_compare_001.png'});
			desk02.css({filter:'blur(0)'});
		});
		desk02.hover(function(){
			$(this).attr({src:'img/img_compare_002_over.png'});
			desk01.css({filter:'blur(7px)'});
		},function(){
			$(this).attr({src:'img/img_compare_002.png'});
			desk01.css({filter:'blur(0)'});
		});
		/* leftdesk---------------------------------------------------------------------*/
		var leftdesk=$('.wrap .leftdesk');
		enable=$('.enable img');
		leftbox1=$('.leftdesk .box img:nth-child(1)');
		leftbox2=$('.leftdesk .box img:nth-child(2)');
		leftbox3=$('.leftdesk .box img:nth-child(3)');
		/* 책상이미지010203 */
		leftdesk1=$('.leftdesk .wrapper>img:nth-of-type(1)');
		leftdesk2=$('.leftdesk .wrapper>img:nth-of-type(2)');
		leftdesk3=$('.leftdesk .wrapper>img:nth-of-type(3)');
		/* plus */
		leftplus1=$('.leftdesk .wrapper .plus01');
		leftplus2=$('.leftdesk .wrapper .plus02');
		leftplus3=$('.leftdesk .wrapper .plus03');
		$plus=$('.wrapper [class*=plus] img');
	

		/* enable 호버 */
		enable.hover(function(){
			$(this).attr({src:'img/txt_feature_md_001_over.png'});
		},function(){
			$(this).attr({src:'img/txt_feature_md_001.png'});
		});			
		/* 박스이미지클릭 */
		leftbox1.click(function(){
			leftdesk1.stop(true).fadeIn(1500);
			leftdesk2.stop(true).fadeOut(100);
			leftdesk3.stop(true).fadeOut(100);
			leftplus1.stop(true).fadeIn(1500);
			leftplus2.stop(true).fadeOut(100);
			leftplus3.stop(true).fadeOut(100);
			$(this).attr({src:'img/img_feature_md_001_on.png'});
			leftbox2.attr({src:'img/img_feature_md_002_off.png'});
			leftbox3.attr({src:'img/img_feature_md_003_off.png'});
		});	
		leftbox2.click(function(){
			leftdesk1.stop(true).fadeOut(100);
			leftdesk2.stop(true).fadeIn(1500);
			leftdesk3.stop(true).fadeOut(100);
			leftplus1.stop(true).fadeOut(100);
			leftplus2.stop(false).fadeIn(1500);
			leftplus3.stop(true).fadeOut(100);
			$(this).attr({src:'img/img_feature_md_002_on.png'});
			leftbox1.attr({src:'img/img_feature_md_001_off.png'});
			leftbox3.attr({src:'img/img_feature_md_003_off.png'});
		});	
		leftbox3.click(function(){
			leftdesk1.stop(true).fadeOut(100);
			leftdesk2.stop(true).fadeOut(100);
			leftdesk3.stop(true).fadeIn(1200);
			leftplus1.stop(true).fadeOut(100);
			leftplus2.stop(true).fadeOut(100);
			leftplus3.stop(true).fadeIn(1200);
			$(this).attr({src:'img/img_feature_md_003_on.png'});
			leftbox1.attr({src:'img/img_feature_md_001_off.png'});
			leftbox2.attr({src:'img/img_feature_md_002_off.png'});
		});
		/* rightdesk---------------------------------------------------------------------*/
		var rightdesk=$('.wrap .rightdesk');
		light=$('.light img');
		rightbox1=$('.rightdesk .box img:nth-child(1)');
		rightbox2=$('.rightdesk .box img:nth-child(2)');
		/* 책상이미지010203 */
		rightdesk1=$('.rightdesk .wrapper>img:nth-of-type(1)');
		rightdesk2=$('.rightdesk .wrapper>img:nth-of-type(2)');
		/* plus */
		rightplus1=$('.rightdesk .wrapper .plus01');
		rightplus2=$('.rightdesk .wrapper .plus02');
		$plus=$('.wrapper [class*=plus] img');
	
		/* light 호버 */
		light.hover(function(){
			$(this).attr({src:'img/txt_feature_mdl_001_over.png'});
		},function(){
			$(this).attr({src:'img/txt_feature_mdl_001.png'});
		});			
		/* 박스이미지클릭 */
		rightbox1.click(function(){
			rightdesk1.stop(true).fadeIn(1500);
			rightdesk2.stop(true).fadeOut(100);
			rightplus1.stop(true).fadeIn(1500);
			rightplus2.stop(true).fadeOut(100);
			$(this).attr({src:'img/img_feature_mdl_001_on.png'});
			rightbox2.attr({src:'img/img_feature_mdl_002_off.png'});
		});	
		rightbox2.click(function(){
			rightdesk1.stop(true).fadeOut(100);
			rightdesk2.stop(true).fadeIn(1500);
			rightplus1.stop(true).fadeOut(100);
			rightplus2.stop(false).fadeIn(1500);
			$(this).attr({src:'img/img_feature_mdl_002_on.png'});
			rightbox1.attr({src:'img/img_feature_mdl_001_off.png'});
		});	
		
		/* 플러스이미지호버 */
		$plus.hover(function(){
			$(this).attr({src:'img/btn_feature_001_over.png'});
		},function(){
			$(this).attr({src:'img/btn_feature_001_off.png'});
		});
	
		/* main 액션--------------------------- */
		desk01.click(function(){
			leftdesk.css({display:'block'});
			maindesk.animate({
				left:'100%'
			},1000, 'easeInOutCubic');
			leftdesk.animate({
				left:'0'
			},1000, 'easeInOutCubic',function(){
				maindesk.css({display:'none'});
			});
		});		
		desk02.click(function(){
			rightdesk.css({display:'block'});
			maindesk.animate({
				left:'-100%'
			},1000, 'easeInOutCubic');
			rightdesk.animate({
				left:'0'
			},1000, 'easeInOutCubic' ,function(){
				maindesk.css({display:'none'});
			});
		});		
		/* left 액션------------------------------ */
		enable.click(function(){
			maindesk.css({display:'block'});
			leftdesk.fadeOut(300);
			maindesk.animate({
				left:'0'
			},1000, 'easeInOutCubic' ,function(){
				leftdesk.css({display:'block',left:'-100%'});				
			});
		}); 
		/* right 액션------------------------------ */
		light.click(function(){
			maindesk.css({display:'block'});
			rightdesk.fadeOut(300);
			maindesk.animate({
				left:'0'
			},1000, 'easeInOutCubic' ,function(){
				rightdesk.css({display:'block',left:'100%'});
			});
		}); 

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
