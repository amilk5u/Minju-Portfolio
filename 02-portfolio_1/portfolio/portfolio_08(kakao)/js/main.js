$(document).ready(function(){




	/* bxslider+++++++++++++++++ */
	var slider = $('.slider').bxSlider({
		mode:'fade', 
		auto: true, 
		pause:3000,
		autoHover:true,
		stopAuto: false,
		controls:true,
		pager:false,
		/* captions: true, */
		/* keyboardEnabled:true, */
		/* autoDirection:'next', */
		/* pager:false, */
		/* controls:false, */
		/* autoControls: true,  */
		/* slideWidth: 600 */	
	});	

	
	/*btn menu++++++++++++++++ */
	
	var $btn=$('.nav2>img');
		$btnMenu=$('.btn_menu');
		$btnMenuimg=$('.btn_menu img');
		
	$btn.click(function(){
		$btnMenu.fadeToggle();
		$header.toggleClass('wh');
	});
	
	$btnMenuimg.click(function(){
		$btnMenu.fadeToggle();
	});
	
	
	
	
	
	/* window scroll+++++++++++++ */
	
		var $header=$('header');
	$(window).scroll(function(){
	
		var $info=$(this).scrollTop();
		
		if($info < 50){
			$header.css({backgroundColor:'transparent',borderBottom:'0'});
		
		
			/* hover */
			$header.hover(function(){
				$(this).css({backgroundColor:'white', borderBottom:'1px solid #eee'});
			},function(){
				$(this).css({backgroundColor:'transparent',borderBottom:'0'});
			});
		}else{
			$header.css({backgroundColor:'white',borderBottom:'1px solid #eee'});
		
		
		
			/* hover */
			$header.hover(function(){
				$(this).css({backgroundColor:'white', borderBottom:'1px solid #eee'});
			},function(){
				$(this).css({backgroundColor:'white', borderBottom:'1px solid #eee'});
			});
		}
		
		
		
		

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	});

	
	
	
	
	
	
		/* footer++++++++++++++++++++ */
	var $right=$('.right .box');
		$rightbox=$('.right .box2');
		$rimg=$('right .box>img');
		
		
	$right.click(function(){
		$rightbox.stop(true).fadeToggle(100);
		
	});
		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
});
 