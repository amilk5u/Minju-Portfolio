$(document).ready(function(){
	
	

	var $main_menu=$('.main_menu');
		$mn_mask=$('.mn_mask');
		$menu1=$('#menu1');
		$menu2=$('#menu2');
		$menu3=$('#menu3');
		$menu4=$('#menu4');
		$menu5=$('#menu5');
		$menu6=$('#menu6');
		$menu7=$('#menu7');
		$menu8=$('#menu8');
		$menu9=$('#menu9');
		
		
		
	$menu2.hover(function(){
		$main_menu.css({backgroundPosition:'0 -194px'});
		
	},function(){
		$main_menu.css({backgroundPosition:'0 6px'});
	
	}); 
	$menu3.hover(function(){
		$main_menu.css({backgroundPosition:'0 -294px'});
		
	},function(){
		$main_menu.css({backgroundPosition:'0 6px'});
	
	}); 
	$menu4.hover(function(){
		$main_menu.css({backgroundPosition:'0 -394px'});
		
	},function(){
		$main_menu.css({backgroundPosition:'0 6px'});
	
	}); 
	$menu5.hover(function(){
		$main_menu.css({backgroundPosition:'0 -494px'});
		
	},function(){
		$main_menu.css({backgroundPosition:'0 6px'});
	
	}); 
	$menu6.hover(function(){
		$main_menu.css({backgroundPosition:'0 -594px'});
		
	},function(){
		$main_menu.css({backgroundPosition:'0 6px'});
	
	}); 
	$menu7.hover(function(){
		$main_menu.css({backgroundPosition:'0 -694px'});
		
	},function(){
		$main_menu.css({backgroundPosition:'0 6px'});
	
	}); 
	$menu8.hover(function(){
		$main_menu.css({backgroundPosition:'0 -794px'});
		
	},function(){
		$main_menu.css({backgroundPosition:'0 6px'});
	
	}); 
	$menu9.hover(function(){
		$main_menu.css({backgroundPosition:'0 -894px'});
		
	},function(){
		$main_menu.css({backgroundPosition:'0 6px'});
	
	}); 
	
	
	
	$('.minibox1').hover(function(){
		$('.icon4').css({backgroundPosition:'-115px 0'});
		$('.icon4_1').css({backgroundPosition:'-23px -38px'});
		$(this).css({borderColor:'#222'});
		
	},function(){
		$('.icon4').css({backgroundPosition:'-80px 0'});
		$('.icon4_1').css({backgroundPosition:'-12px -38px'});
		$(this).css({borderColor:'#ccc'});
	});
	
	$('.link_text1').hover(function(){
		$(this).css({backgroundPosition:'-218px -150px'});
		
	},function(){
		$(this).css({backgroundPosition:'-218px -110px'});
		
	});
	$('.link_text2').hover(function(){
		$(this).css({backgroundPosition:'-288px -150px'});
		
	},function(){
		$(this).css({backgroundPosition:'-288px -110px'});
		
	});
	$('.link_text3').hover(function(){
		$(this).css({backgroundPosition:'-374px -150px'});
		
	},function(){
		$(this).css({backgroundPosition:'-374px -110px'});
		
	});
	$('.link_text4').hover(function(){
		$(this).css({backgroundPosition:'-462px -150px'});
		
	},function(){
		$(this).css({backgroundPosition:'-462px -110px'});
		
	});
	$('.link_text5>.img').hover(function(){
		$(this).css({backgroundPosition:'-628px -150px'});
		
	},function(){
		$(this).css({backgroundPosition:'-628px -110px'});
		
	});
	
	
	
	
	
	
	
	
	
	/* main_menu hover---------- */
	
	var $submenu=$('.sub_menu>ul>li');

	
	
/* 	$submenu.hover(function(){
		$(this).css({color:'pink'});
	},function(){
		
	}); */
	
	
	
	
	
	
	
	$('.main_category').hover(function(){
		$('.shinsegae_text1').css({backgroundPosition:'0 -244px'}); /* 신세게배경 */
		$(this).css({backgroundColor:'#fbfbf9'});	/* 배경컬러 */
		$(this).find('span').css({borderColor:'#ccc'});	/* 보더색상 */
		$('.shinsegae_text2').css({borderWidth:'0'});	/* 마지막칸 보더width */
		$submenu.css({color:'white'});
		
	},function(){
		$('.shinsegae_text1').css({backgroundPosition:'0 -300px'});
		$(this).css({backgroundColor:'rgba(0,0,0, .4)'});
		$(this).find('span').css({borderColor:'rgba(300,300,300,0.2)'});
		$('.shinsegae_text2').css({borderWidth:'0 1px 1px 1px'});	
		
	});

	var $family = $('.family_site');
		$fam_hidn = $('.hidn_site');
	
	
		$family.click(function(){
			$fam_hidn.toggle();			
		});
		
/* 		$('body').click(function(){
			$fam_hidn.hide();
			
		}); */
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
});