$(document).ready(function(){
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
	
	
		var box01 = $('.box01');
	var box02 = $('.box02');
	var box03 = $('.box03');	
	var $img01 = $('.box01 .hover-img');
	var $img02 = $('.box02 .hover-img');
	var $img03 = $('.box03 .hover-img');
	var nemo = $('.nemo');	
		btn = $('.menu-toggle-btn');
		gnb = $('.gnb');
		$html = $('html');
		$brand = $('.brand');
		$shop = $('.shop');
		$event = $('.event');
		$com = $('.com');
		brandsub = $brand.find('.sub');
		shopsub = $shop.find('.sub');
		eventsub = $event.find('.sub');
		comsub = $com.find('.sub');
	
	/* 센터호버액션 */
	box01.hover(function(){
		$img01.fadeIn(600);
	},function(){
		$img01.fadeOut(1);
	});
	box02.hover(function(){
		$img02.fadeIn(600);
	},function(){
		$img02.fadeOut(1);
	});
	box03.hover(function(){
		$img03.fadeIn(600);
	},function(){
		$img03.fadeOut(1);
	});
	/* 메뉴바호버 */
	$brand.stop(true).hover(function(){
		brandsub.fadeIn(200);
	},function(){
		brandsub.fadeOut(200);
	});
	$shop.stop(false).hover(function(){
		shopsub.fadeIn(200);
	},function(){
		shopsub.fadeOut(200);
	});
	$event.stop(false).hover(function(){
		eventsub.fadeIn(200);
	},function(){
		eventsub.fadeOut(200);
	});
	$com.stop(false).hover(function(){
		comsub.fadeIn(200);
	},function(){
		comsub.fadeOut(200);
	});	
		
	/* 모바일 클릭 gnb */
	btn.click(function(){
		gnb.slideToggle();
		$(this).find('div').toggleClass('on');
	});

			maintext = $('#section01 .main .text>img');
			mainh3 = $('#section01 .main .text>h3');
			mainbox = $('#section01 .main .text .box');
		

			maintext.fadeIn().animate({
				marginTop:'200px',
				opacity:'1'
			},1000);
			mainh3.fadeIn().animate({
				opacity:'1'
			},1000);
			mainbox.fadeIn().animate({
				opacity:'1'
			},1000);
			

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

	/* 윈도우스크롤 */
	$(window).stop(true).scroll(function(){
		var $info = $(this).scrollTop();
			$header = $('#header');
			$brandli = $('.brand >li');
			$shopli = $('.shop >li');
			$eventli = $('.event >li');
			$comli = $('.com >li');
			logo = $('.logo-icon');
			logoimg = $('.logo-icon img');
			$contact = $('.contact');
			btn = $('.menu-toggle-btn');
			btnbar = $('.menu-toggle-btn div');
		
		if($info < 50){
			$header.css({height:'90px',backgroundColor:'transparent'});
			$brandli.css({lineHeight:'90px'});
			$shopli.css({lineHeight:'90px'});
			$eventli.css({lineHeight:'90px'});
			$comli.css({lineHeight:'90px'});
			logo.css({marginTop:'32px'});
			/* 컨텍트 */
			$contact.css({
				top:'21px',
				border:'2px solid white',
				color:'#eee',
				paddingLeft:'0'
			});
			/* 버튼 */
			btn.css({top:'15px'});
			btnbar.css({backgroundColor:'#222'});
			

		}else{
			$header.css({height:'60px',backgroundColor:'#111111'});
			$brandli.css({lineHeight:'60px'});
			$shopli.css({lineHeight:'60px'});
			$eventli.css({lineHeight:'60px'});
			$comli.css({lineHeight:'60px'});
			logo.css({marginTop:'18px'});
			/* 컨텍트 */
			$contact.css({
				top:'8px',
				border:'0',
				color:'#eee',
				paddingLeft:'30px'
			});
			/* 버튼 */
			btn.css({top:'0'});
			btnbar.css({backgroundColor:'#eee'});




			
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	});
 
 
	

 
 
 
 
	
	
	
	
	
	
	
	
	
	
	
	