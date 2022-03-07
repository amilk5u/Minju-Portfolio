$(document).ready(function(){
	
	
	/* header+++++++++++++++++++++++++++++++++++++++++ */
			
	/* swiper slider----------------- */
	
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
    });
		
	
	/* contents++++++++++++++++++++++++++++++++++++++ */
	
	/* content1 sec3------------------- */
	
	/* news_tab-------------------------- */
	
	var $ns_tab1 = $('.news_tab1');
		$ns_tab2 = $('.news_tab2');
		$ns_tab3 = $('.news_tab3');
		$ns_tab4 = $('.news_tab4');
	
	var $ns_t1 = $('.ns_text1');
		$ns_t2 = $('.ns_text2');
		$ns_t3 = $('.ns_text3');
		$ns_t4 = $('.ns_text4');
		
	/* click action----------------------- */
	
	
	$ns_tab1.click(function(){
		$ns_t1.fadeIn(1);
		$ns_t2.fadeOut(1);
		$ns_t3.fadeOut(1);
		$ns_t4.fadeOut(1);
		$(this).parent().css({backgroundColor:'white',borderBottom:'0'});
		$(this).parent().siblings().css({backgroundColor:'#FCFCFA', borderBottom:'1px solid #eee'});
	});
	
	$ns_tab2.click(function(){
		$ns_t1.fadeOut(1);
		$ns_t2.fadeIn(1);
		$ns_t3.fadeOut(1);
		$ns_t4.fadeOut(1);
		$(this).parent().css({backgroundColor:'white',borderBottom:'0'});
		$(this).parent().siblings().css({backgroundColor:'#FCFCFA', borderBottom:'1px solid #eee'});
	});
	
	$ns_tab3.click(function(){
		$ns_t1.fadeOut(1);
		$ns_t2.fadeOut(1);
		$ns_t3.fadeIn(1);
		$ns_t4.fadeOut(1);
		$(this).parent().css({backgroundColor:'white',borderBottom:'0'});
		$(this).parent().siblings().css({backgroundColor:'#FCFCFA', borderBottom:'1px solid #eee'});

	});
	
	$ns_tab4.click(function(){
		$ns_t1.fadeOut(1);
		$ns_t2.fadeOut(1);
		$ns_t3.fadeOut(1);
		$ns_t4.fadeIn(1);
		$(this).parent().css({backgroundColor:'white',borderBottom:'0'});
		$(this).parent().siblings().css({backgroundColor:'#FCFCFA', borderBottom:'1px solid #eee'});

	});
	
	
	
	


	/* icon_box---------------------- */
	
	var $icon1 = $('.icon1');
		$icon2 = $('.icon2');
		$icon3 = $('.icon3');
		$icon4 = $('.icon4');
		$icon5 = $('.icon5');
		$icon6 = $('.icon6');
		$icon7 = $('.icon7');
		$icon8 = $('.icon8');
		$icon9 = $('.icon9');
		$icon10 = $('.icon10');
		
	var $ibox = $('.icon_box')

	/* icon_box hover------------------ */
	
	$ibox.hover(function(){
		$(this).find('.icon1').css({backgroundImage:'url(img/icon_img0_1.png)'});
	},function(){
		$(this).find('.icon1').css({backgroundImage:'url(img/icon_img0.png)'});
	});
	$ibox.hover(function(){
		$(this).find('.icon2').css({backgroundImage:'url(img/icon_img1_1.png)'});
	},function(){
		$(this).find('.icon2').css({backgroundImage:'url(img/icon_img1.png)'});
	});
	$ibox.hover(function(){
		$(this).find('.icon3').css({backgroundImage:'url(img/icon_img2_1.png)'});
	},function(){
		$(this).find('.icon3').css({backgroundImage:'url(img/icon_img2.png)'});
	});
	$ibox.hover(function(){
		$(this).find('.icon4').css({backgroundImage:'url(img/icon_img3_1.png)'});
	},function(){
		$(this).find('.icon4').css({backgroundImage:'url(img/icon_img3.png)'});
	});
	$ibox.hover(function(){
		$(this).find('.icon5').css({backgroundImage:'url(img/icon_img4_1.png)'});
	},function(){
		$(this).find('.icon5').css({backgroundImage:'url(img/icon_img4.png)'});
	});
	$ibox.hover(function(){
		$(this).find('.icon6').css({backgroundImage:'url(img/icon_img5_1.png)'});
	},function(){
		$(this).find('.icon6').css({backgroundImage:'url(img/icon_img5.png)'});
	});
	$ibox.hover(function(){
		$(this).find('.icon7').css({backgroundImage:'url(img/icon_img6_1.png)'});
	},function(){
		$(this).find('.icon7').css({backgroundImage:'url(img/icon_img6.png)'});
	});
	$ibox.hover(function(){
		$(this).find('.icon8').css({backgroundImage:'url(img/icon_img7_1.png)'});
	},function(){
		$(this).find('.icon8').css({backgroundImage:'url(img/icon_img7.png)'});
	});
	$ibox.hover(function(){
		$(this).find('.icon9').css({backgroundImage:'url(img/icon_img8_1.png)'});
	},function(){
		$(this).find('.icon9').css({backgroundImage:'url(img/icon_img8.png)'});
	});
	$ibox.hover(function(){
		$(this).find('.icon10').css({backgroundImage:'url(img/icon_img9_1.png)'});
	},function(){
		$(this).find('.icon10').css({backgroundImage:'url(img/icon_img9.png)'});
	});
	
		
	
	
	/* footer++++++++++++++++++++++++++++++++++++++ */
	
	var $f_hbtn = $('.f_hidden_btn');
	
		$f_hbtn.click(function(){
			$('#f_sec2').stop(true).slideToggle(300);
			$(this).toggleClass('hidden_color');
			$(this).find('img').toggleClass('hidden_img');
		});		
		
		
	
		var $f_tab1 = $('.f_tab_btn >ul>li:eq(0)');
		$f_tab2 = $('.f_tab_btn >ul>li:eq(1)');
		$f_tab3 = $('.f_tab_btn >ul>li:eq(2)');
		$f_tab4 = $('.f_tab_btn >ul>li:eq(3)');
	
		$f_hbtn1 = $('.hidden_btn_wrap > div:eq(0)');
		$f_hbtn2 = $('.hidden_btn_wrap > div:eq(1)');
		$f_hbtn3 = $('.hidden_btn_wrap > div:eq(2)');
		$f_hbtn4 = $('.hidden_btn_wrap > div:eq(3)');
	
	
	/* click------------------------ */
		

	
		$f_tab1.click(function(){
			$f_hbtn1.toggle();
			$f_hbtn1.siblings().fadeOut(1);
			$(this).siblings().css({borderColor:'#444', color:'#ccc'});
			$(this).css({borderColor:'#ccc', color:'#ff8000'});
			$(this).prev().css({borderColor:'#444 #ccc #444 #444'});
		});
		
		$f_tab2.click(function(){
			$f_hbtn2.toggle();
			$f_hbtn2.siblings().fadeOut(1);
			$(this).siblings().css({borderColor:'#444', color:'#ccc'});
			$(this).css({borderColor:'#ccc', color:'#ff8000'});
			$(this).prev().css({borderColor:'#444 #ccc #444 #444'});
		});
		
		$f_tab3.click(function(){
			$f_hbtn3.toggle();
			$f_hbtn3.siblings().fadeOut(1);
			$(this).siblings().css({borderColor:'#444', color:'#ccc'});
			$(this).css({borderColor:'#ccc', color:'#ff8000'});
			$(this).prev().css({borderColor:'#444 #ccc #444 #444'});
		});
		
		$f_tab4.click(function(){
			$f_hbtn4.toggle();
			$f_hbtn4.siblings().fadeOut(1);
			$(this).siblings().css({borderColor:'#444', color:'#ccc'});
			$(this).css({borderColor:'#ccc', color:'#ff8000'});
			$(this).prev().css({borderColor:'#444 #ccc #444 #444'});
		}); 
		
	/* sns_img hover------------------------- */
	
	var $icon1 = $('.icon_link1>img');
		$icon2 = $('.icon_link2>img');
		$icon3 = $('.icon_link3>img');
		$icon4 = $('.icon_link4>img');
		$icon5 = $('.icon_link5>img');
		$icon6 = $('.icon_link6>img');
		$icon7 = $('.icon_link7>img');
		$icon8 = $('.icon_link8>img');
		
		$icon1.parents('a').hover(function(){
			$icon1.attr({src:'img/sns_icon1_1.png'});
		},function(){
			$icon1.attr({src:'img/sns_icon1.png'});
		});
	
		$icon2.parents('a').hover(function(){
			$icon2.attr({src:'img/sns_icon1_2.png'});
		},function(){
			$icon2.attr({src:'img/sns_icon2.png'});
		});
	
		$icon3.parents('a').hover(function(){
			$icon3.attr({src:'img/sns_icon1_3.png'});
		},function(){
			$icon3.attr({src:'img/sns_icon3.png'});
		});
	
		$icon4.parents('a').hover(function(){
			$icon4.attr({src:'img/sns_icon1_4.png'});
		},function(){
			$icon4.attr({src:'img/sns_icon4.png'});
		});
	
		$icon5.parents('a').hover(function(){
			$icon5.attr({src:'img/sns_icon1_5.png'});
		},function(){
			$icon5.attr({src:'img/sns_icon5.png'});
		});
	
		$icon6.parents('a').hover(function(){
			$icon6.attr({src:'img/sns_icon1_6.png'});
		},function(){
			$icon6.attr({src:'img/sns_icon6.png'});
		});
	
		$icon7.parents('a').hover(function(){
			$icon7.attr({src:'img/sns_icon1_7.png'});
		},function(){
			$icon7.attr({src:'img/sns_icon7.png'});
		});
	
		$icon8.parents('a').hover(function(){
			$icon8.attr({src:'img/sns_icon1_8.png'});
		},function(){
			$icon8.attr({src:'img/sns_icon1.png'});
		});
	
	


	/* scroll action------------------ */
	
	var $ftop_btn = $('.top_action_wrap');
		$info = $(this).scrollTop();
	
	
	/* click after top------------------ */
	
		$ftop_btn.click(function(){
			$('html,body').animate({scrollTop:0},800);
		});
		

		
	
});