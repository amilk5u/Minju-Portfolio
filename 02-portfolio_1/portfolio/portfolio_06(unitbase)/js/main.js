$(document).ready(function(){
	
	/* menu hover+++++++++++++++++++++++++++++++++++++++++++++++ */
	var $mainnav=$('#header>nav');	
	var $menuli=$('.menu>li');
	var $menu01=$('.menu>li:nth-of-type(1)');
		$menu02=$('.menu>li:nth-of-type(2)');
		$menu03=$('.menu>li:nth-of-type(3)');
		$menu04=$('.menu>li:nth-of-type(4)');
		$menu05=$('.menu>li:nth-of-type(5)');
		$menu06=$('.menu>li:nth-of-type(6)');		
	var $bg=$('.menu>.bg');	
	var $sub01=$('.menu .sub01');
		$sub02=$('.menu .sub02');
		$sub03=$('.menu .sub03');
		$sub04=$('.menu .sub04');
		$sub05=$('.menu .sub05');
		$sub06=$('.menu .sub06');				
	var $logo=$('.logo .logo-icon img');		
		$contact=$('.contact >.box');
		
		
		/* menuli 모두 해당 -----------*/
		$menuli.hover(function(){
			$mainnav.css({backgroundColor:'#25272c'});
			$menuli.css({color:'white'});
			$logo.attr({src:'img/logo_wht.png'});
			$contact.css({color:'white',border:'0'});
		
		},function(){
			$mainnav.css({backgroundColor:'white'});
			$menuli.css({color:'black'});
			$logo.attr({src:'img/logod.png'});
			$contact.css({color:'black',border:'2px solid black'});
		});		
		
		/* menu01---------------------- */
		$menu01.hover(function(){
			$bg.css({height:'380px'});
			$sub01.stop(true).fadeIn(300);			
		},function(){
			$bg.css({height:'0'});		
			$sub01.css({display:'none'});
		});
		/* menu02----------------------- */
		$menu02.hover(function(){
			$bg.css({height:'490px'});
			$sub02.stop(true).fadeIn(100);	
		},function(){
			$bg.css({height:'0'});			
			$sub02.css({display:'none'});
		});
		/* menu03------------------------ */
		$menu03.hover(function(){
			$bg.css({height:'450px'});
			$sub03.stop(true).fadeIn(100);	
		},function(){
			$bg.css({height:'0'});			
			$sub03.css({display:'none'});
		});		
		/* menu04------------------------ */
		$menu04.hover(function(){
			$bg.css({height:'280px'});
			$sub04.stop(true).fadeIn(100);	
		},function(){
			$bg.css({height:'0'});			
			$sub04.css({display:'none'});
		});
		/* menu05------------------------- */
		$menu05.hover(function(){
			$bg.css({height:'280px'});
			$sub05.stop(true).fadeIn(100);	
		},function(){
			$bg.css({height:'0'});			
			$sub05.css({display:'none'});
		});
		

	/* window scroll+++++++++++++++++++++++++++++++++++++++++++++++ */
	$(window).stop(true).scroll(function(){
	
		var $info = $(this).scrollTop();		
		var $logoIcon=$('.logo>.logo-icon');
			$sub=$('.menu>li>[class^=sub]');	
			$menumini=$('.menu .mini');		
			$btn=$('.btn');	
			$btn01=$('.btn > .btn01');	
		
		/* cursor 가 100 이하 일때 */
		if($info < 100){
			$mainnav.css({height:'90px',backgroundColor:'white'});
			$logoIcon.css({marginTop:'35px'});
			$bg.css({top:'90px'});
			$sub.css({top:'90px'});
			$menuli.css({height:'90px',color:'black',lineHeight:'91px'}); 	
			$logo.attr({src:'img/logod.png'});	
			$contact.css({lineHeight:'48px',color:'black',border:'2px solid black', marginLeft:'0px'});
			$btn.css({top:'27px'});
			$btn01.css({backgroundColor:'black'});
			

		
		/* menuli hover -----------*/
		$menuli.hover(function(){
			$mainnav.css({backgroundColor:'#25272c'});
			$menuli.css({color:'white'});
			$logo.attr({src:'img/logo_wht.png'});
			$contact.css({color:'white',border:'0'});
		
		},function(){			
			$mainnav.css({backgroundColor:'white'});
			$menuli.css({color:'black'});
			$logo.attr({src:'img/logod.png'});
			$contact.css({color:'black',border:'2px solid black'});
		});		
			
			
			
		/* cursor 가 100 이상 일때 */
		}else{
			$mainnav.css({height:'60px',backgroundColor:'#25272c'});
			$logoIcon.css({marginTop:'20px'}); 
			$bg.css({top:'60px'});
			$sub.css({top:'60px'});
			$menuli.css({height:'60px',color:'white' ,lineHeight:'62px'}); 
			$logo.attr({src:'img/logo_wht.png'});
			$menumini.css({lineHeight:'90px'});
			$contact.css({lineHeight:'20px',color:'white',border:'0', marginLeft:'20px'});
			$btn.css({top:'13px'});
			$btn01.css({backgroundColor:'white'});
			/* menuli hover---------------- */
			$menuli.hover(function(){
				$mainnav.css({backgroundColor:'#25272c'}); 
				$menuli.css({color:'white'}); 
				$logo.attr({src:'img/logo_wht.png'});
				$contact.css({color:'white',border:'0'});
			},function(){
				$mainnav.css({backgroundColor:'#25272c'});
				$menuli.css({color:'white'}); 
				$logo.attr({src:'img/logo_wht.png'});
				$contact.css({color:'white',border:'0'});
			});
		}		
	});
	
	
	/* main hover action ++++++++++++++++++++++++++++++*/
	
		/* under img */
	var $mI01=$('.main_img01');
		$mI02=$('.main_img02');
		$mI03=$('.main_img03');
		
		$mI01img=$('.main_img01>.main01>img');
		$mI02img=$('.main_img02>.main01>img');
		$mI03img=$('.main_img03>.main01>img');
		/* text */
		$mItext01=$('.main_img01 .maintext');
		$mItext02=$('.main_img02 .maintext');
		$mItext03=$('.main_img03 .maintext');
		
		/* back img */
	var $bI01=$('.back_img01');
		$bI02=$('.back_img02');
		$bI03=$('.back_img03');

		
	var $bI01img=$('.back_img01>img');
		$bI02img=$('.back_img02>img');
		$bI03img=$('.back_img03>img');
		
		/* image scale and opacity============== */
		/* img01 */
		$mI01.hover(function(){
			/* under */
			$mI01img.css({opacity:'0'});
			$mI02img.css({opacity:'0'});
			$mI03img.css({opacity:'0'});
			/* text */
			$mItext01.css({opacity:'0'});
			$mItext02.css({opacity:'0'});
			$mItext03.css({opacity:'0'});
			
			/* back */
			$bI01.css({opacity:'1'});
			$bI01img.css({transform:'scale(1.5)'});
			
		},function(){
			$mI01img.css({opacity:'1'});
			$mI02img.css({opacity:'1'});
			$mI03img.css({opacity:'1'});
			
			$mItext01.css({opacity:'1'});
			$mItext02.css({opacity:'1'});
			$mItext03.css({opacity:'1'});
			
			$bI01.css({opacity:'0'});
			$bI01img.css({transform:'scale(1)'});			
		});
		/* img02 */
		$mI02.hover(function(){
			$mI01img.css({opacity:'0'});
			$mI02img.css({opacity:'0'});
			$mI03img.css({opacity:'0'});
			
			/* text */
			$mItext01.css({opacity:'0'});
			$mItext02.css({opacity:'0'});
			$mItext03.css({opacity:'0'});
			
			$bI02.css({opacity:'1'});
			$bI02img.css({transform:'scale(1.5)'});
		},function(){
			$mI01img.css({opacity:'1'});
			$mI02img.css({opacity:'1'});
			$mI03img.css({opacity:'1'});
			
			$mItext01.css({opacity:'1'});
			$mItext02.css({opacity:'1'});
			$mItext03.css({opacity:'1'});
			
			$bI02.css({opacity:'0'});
			$bI02img.css({transform:'scale(1)'});	
		});
		/* img03 */
		$mI03.hover(function(){
			$mI01img.css({opacity:'0'});
			$mI02img.css({opacity:'0'});
			$mI03img.css({opacity:'0'});
			
			/* text */
			$mItext01.css({opacity:'0'});
			$mItext02.css({opacity:'0'});
			$mItext03.css({opacity:'0'});
			
			$bI03.css({opacity:'1'});
			$bI03img.css({transform:'scale(1.5)'});
		},function(){
			$mI01img.css({opacity:'1'});
			$mI02img.css({opacity:'1'});
			$mI03img.css({opacity:'1'});
			
			$mItext01.css({opacity:'1'});
			$mItext02.css({opacity:'1'});
			$mItext03.css({opacity:'1'});
			
			$bI03.css({opacity:'0'});
			$bI03img.css({transform:'scale(1)'});	
		});
	
	/* hover action+++++++++++++++++++++++++++++++++++++++++++++++ */
		/* sec05사진 */
	var sec5i1=$('#section05 .box01>img');
		sec5i2=$('#section05 .box02>img');
		sec5i3=$('#section05 .box03>img');
		
		
		/* box */
	var sec1b=$('#section01 .box');
		sec3b=$('#section03 .success');
		sec4b=$('#section04 .box');
		sec6b1=$('#section06 .article01:first-child .box');
		sec6b2=$('#section06 .article01:last-child .box');
		fb=$('#footer01');
		
		/* boximg */
		sec1bi=$('#section01 .box>img');
		sec3bi=$('#section03 .success .text>img');
		sec4bi=$('#section04 .box>img');
		sec6bi01=$('#section06 .article01:first-child .box>img');
		sec6bi02=$('#section06 .article01:last-child .box>img');
		fbi=$('#footer01>img');
		
		
		/* 사진 흑백에서 컬러 */
		sec5i1.hover(function(){
			$(this).attr({src:'img/valuable-designer-kv.jpg'});
		},function(){
			$(this).attr({src:'img/valuabl.jpg'});
		});
		sec5i2.hover(function(){
			$(this).attr({src:'img/marketing-communication-kv.jpg'});
		},function(){
			$(this).attr({src:'img/text.jpg'});
		});
		sec5i3.hover(function(){
			$(this).attr({src:'img/design-value-in-business-kv.jpg'});
		},function(){
			$(this).attr({src:'img/dggdgd.jpg'});
		});
	
		/* 박스호버 */
		
		/* sec01--------------- */
		sec1b.hover(function(){
			sec1bi.attr({src:'img/arrow2.png'});
		},function(){
			sec1bi.attr({src:'img/arrow.png'});
		});
		/* sec03---------------- */
		sec3b.hover(function(){
			sec3bi.attr({src:'img/arrow2.png'});
		},function(){
			sec3bi.attr({src:'img/arrow.png'});
		});
		/* sec04 ----------------*/
		sec4b.hover(function(){
			sec4bi.attr({src:'img/arrow2.png'});
		},function(){
			sec4bi.attr({src:'img/arrow.png'});
		});
		/* sec06  box1,box2 ---*/
		sec6b1.hover(function(){
			sec6bi01.attr({src:'img/arrow.png'});
		},function(){
			sec6bi01.attr({src:'img/arrow2.png'});
		});
		sec6b2.hover(function(){
			sec6bi02.attr({src:'img/arrow.png'});
		},function(){
			sec6bi02.attr({src:'img/arrow2.png'});
		});
		/* footer --------------*/
		fb.hover(function(){
			fbi.attr({src:'img/arrow2.png'});
		},function(){
			fbi.attr({src:'img/arrow.png'});
		});
		
		
		
		
		
		
		
		
		
	
	


	/* $('.slider').bxSlider({
		
	});*/
 
	var slider = $('.slider').bxSlider({
		mode:'horizontal', 
		auto: true, 
		pause:3000,
		autoHover:true,
		stopAuto: true,
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

 
 /* bxslider auto 상태에서 selector ( prev / next ) 버튼이나 pager 버튼을 눌렀을때 stop 되는 현상해결 */
/*  $(document).on('click','.bx-next, .bx-prev',function() {
    slider.stopAuto();
    slider.startAuto();
}); */
	
/* 	mode:"horizontal", "vertival",  "fade" 가로 세로 페이드
		speed:500, 스피드
		stopAuto: false 사용후 멈추는기능 없애기
		captions: true,  타이틀캡션 적용여부
		pager:false, 인디케이터
		auto: true, 자동실행
		moveSlides:1, 이동할 슬라이드 수
		slideWidth:125, 슬라이드  넓이
		minSlides:6,	최소 이미지(영역안의 배너 숫자)
		maxSlides:6, 최대 이미지(영역안의 배너 숫자)
		slideMargin:30, 각 슬라이드 여백
		autoHover:true, 마우스 호버시 정지
		controls:false,  넥스트/프리브 좌우 컨트롤러 - 기본은 트루
		autoControls: true,	자동컨트롤(인디케이터와 스타트 스탑버튼) -시작/정지
		stopAutoOnClick: true, 
		slideWidth:600, 슬라이드 넓이값 지정
		pause:3000, 타이머(슬라이드 되는 시간)
		easing:''ease-in-out',  이징함수
		'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier(n,n,n,n)', If not using CSS: 'swing', 'linear 
		video:true 비디오가 포함되어있다면 적용한다
		adaptiveHeight:true, 이미지 높이에 맞게 슬라이드의 높이값을 조절
		keyboardEnabled:true, 키보드 사용여부
		autoDirection:'next', 랜덤이미지
*/


/* $(".slider2").bxSlider({
	mode:"horizontal",
	speed:500,
	pager:false,
	moveSlides:1,
	slideWidth:125,
	minSlides:6,
	maxSlides:6,
	slideMargin:30,
	auto:true,
	autoHover:true,
	controls:false
  }); */
	
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
	

	/* mobile menu+++++++++++++++++++++++++++++++++++++++++++++ */
		/* heder------ */
	var $headerp=$('#header');
		$contents=$('#contents');
	
		/* btn---------- */
		$btn=$('.btn');	
		$btn01=$('.btn > .btn01');	
		
		/* main menu--- */
		$bgmenu=$('.bgmenu');
		
		/* 메뉴----------- */
		$btn_m=$('.btn_m')
		$btn_m1=$('.btn_m1');
		$btn_m2=$('.btn_m2');
		$btn_m3=$('.btn_m3');
		$btn_m4=$('.btn_m4');
		$btn_m5=$('.btn_m5');
		
		/* 메뉴 십자가 btn */
		$btn_b=$('.btn_b');
		$botton1=$('.botton01');
		$botton2=$('.botton02');
		$botton3=$('.botton03');
		$botton4=$('.botton04');
		$botton5=$('.botton05');
		
		/* hover text */
		$btntext1=$('.btntext1');
		$btntext2=$('.btntext2');
		$btntext3=$('.btntext3');
		$btntext4=$('.btntext4');
		$btntext5=$('.btntext5');
		
		/* btn click main menu block */
		$btn.click(function(){
			$bgmenu.fadeToggle(300);
			$headerp.toggleClass('re');
			$contents.toggleClass('no');
			$btn01.toggleClass('rot');			
		});

		
		
		
		
		/* botton click text slideup======== */
		$botton1.click(function(){
			$btntext1.slideToggle();
			$(this).find('.btn_b1').eq('1').fadeToggle();
		});
		$botton2.click(function(){
			$btntext2.slideToggle();
			$(this).find('.btn_b1').eq('1').fadeToggle();
		});
		$botton3.click(function(){
			$btntext3.slideToggle();
			$(this).find('.btn_b1').eq('1').fadeToggle();
		});
		$botton4.click(function(){
			$btntext4.slideToggle();
			$(this).find('.btn_b1').eq('1').fadeToggle();
		});
		$botton5.click(function(){
			$btntext5.slideToggle();
			$(this).find('.btn_b1').eq('1').fadeToggle();
		});
		


	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
 });
 