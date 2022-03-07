$(document).ready(function(){


	/* bx slider========= */
	var slider = $('.slider').bxSlider({
		mode:'fade', 
		auto: true, 
		pause:3000,
		autoHover:true,
		stopAuto: false,
		controls:true,
		pager:true,
		/* captions: true, */
		/* keyboardEnabled:true, */
		/* autoDirection:'next', */
		/* pager:false, */
		/* controls:false, */
		/* autoControls: true,  */
		/* slideWidth: 600 */	
	});	
	
	/* click============ */
	
	var $li1=$('.sec2_menu li').eq('0');
		$li2=$('.sec2_menu li').eq('1');
		$li3=$('.sec2_menu li').eq('2');
		$li4=$('.sec2_menu li').eq('3');
		$li5=$('.sec2_menu li').eq('4');
		$li6=$('.sec2_menu li').eq('5');		
	
	var $list1=$('.wrap2 .list1');
		$list2=$('.wrap2 .list2');
		$list3=$('.wrap2 .list3');
		$list4=$('.wrap2 .list4');
		$list5=$('.wrap2 .list5');
		$list6=$('.wrap2 .list6');
	
	$li1.click(function(){
		$list1.stop(true).fadeIn(1);
		$list1.siblings().stop(true).fadeOut(1);
	});
	$li2.click(function(){
		$list2.stop(true).fadeIn(1);
		$list2.siblings().stop(true).fadeOut(1);
	});
	$li3.click(function(){
		$list3.stop(true).fadeIn(1);
		$list3.siblings().stop(true).fadeOut(1);
	});
	$li4.click(function(){
		$list4.stop(true).fadeIn(1);
		$list4.siblings().stop(true).fadeOut(1);
	});
	$li5.click(function(){
		$list5.stop(true).fadeIn(1);
		$list5.siblings().stop(true).fadeOut(1);
	});
	$li6.click(function(){
		$list6.stop(true).fadeIn(1);
		$list6.siblings().stop(true).fadeOut(1);
	});
	
	
	
	
	    var swiper = new Swiper('.swiper-container', {
      slidesPerView:4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
/*       pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }, */
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});