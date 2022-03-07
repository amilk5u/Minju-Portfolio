$(document).ready(function(){	

	/* 인트로효과----------------------------------------------------------------------------------- */
	var main = $('.main');
		slogan = $('.slogan');	
		btn01 = $('.menu-btn');	
		btn02 = $('.view-btn');	
		about = $('.left');	
		contact = $('.right');			
		
	main.animate({top:'230px'},700 ,'easeOutBounce');
	slogan.animate({top:'220px'},850, 'easeOutBounce');
	btn01.animate({opacity:'1'},850);
	btn02.animate({opacity:'1'},850);
	about.animate({left:'-10px'},650,'easeOutBack');
	contact.animate({right:'-10px'},650,'easeOutBack');
	
	/* 메인페이지 이벤트효과------------------------------------------------------------------------  */
	var $s01 = $('#section00');
		$bottom = $('.bottom');
	var $dt = $s01.find('h1');
	var $dd = $s01.find('p');
	var $mDown = $s01.find('.mDown');
	var $main = $('#section01');
	var $ball01 = $('.ball01');
	var $ball02 = $('.ball02');
	var $header = $('#header');
	var $type = $('.type');
		$hmain= $('.view-btn02');
		$menubox = $('.menu-box');	
		
	/* 메인다운를 클릭했을때  */
	$mDown.click(function(){
		$main.css('display','block');
		$s01.slideUp(1000); 
		$mDown.fadeOut(700);
		$ball01.fadeOut(350);
		$ball02.fadeOut(600);
		$header.slideDown();
		$type.fadeOut(500);
	});				 
		 
	$('.type').typed({
		strings:[
		"Hello!!",
		"My Name Is Seokyeon",
		"I'm Web Designer",
		"Have a Good Day"
		],
		typeSpeed:150,
		backDelay:200,
		loop:true
	});	
	$('.type1').typed({
		strings:[
		"인간과 동물의 공존"
		],
		typeSpeed:150,
		backDelay:200,
		loop:true
	});
	$('.type2').typed({
		strings:[
		"유니크함, 편안함, 젊은"
		],
		typeSpeed:150,
		backDelay:200,
		loop:true
	});	
		
	/* 메인메뉴클릭시에 메뉴박스보이기------------------------------------------------------------- */
	
	var $click = $('.menu-box .click');
	
	$hmain.click(function(){
		$menubox.slideDown();
	});				
	$click.click(function(){
		$menubox.slideUp();
	});				

	
	
	
	/* fashion 1/ fashion2 click */
	var $fashion1=$('#section02 .fashion .text >li:first-of-type');
		$fashion2=$('#section02 .fashion .text >li:last-of-type');		
		
	var $design1=$('.design1');
		$design2=$('.design2');
		
	$fashion1.click(function(){
		$design1.css({display:'block'});
		$design2.css({display:'none'});
	});
	$fashion2.click(function(){
		$design1.css({display:'none'});
		$design2.css({display:'block'});
	});
	
	
	
	
	

	
	
	
	
	
	/* swiper========================== */
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 0,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
	/* swiper========================== */
    var swiper = new Swiper('.swiper-container1', {
      slidesPerView: 6,
      spaceBetween: 20,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
	/* swiper========================== */
    var swiper = new Swiper('.swiper-container2', {
      slidesPerView: 5,
      spaceBetween: 20,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
	
	
	/* click action=================== */
	var $sketch1=$('.sketch1');
		$sketch2=$('.sketch2');
		$sketch3=$('.sketch3');
		$sketch4=$('.sketch4');
		
		$poto1=$('.poto1');
		$poto2=$('.poto2');
		$poto3=$('.poto3');
		$poto4=$('.poto4');
		$poto5=$('.poto5');
		
	var $plus=$('.plus');
		$plus1=$('.plus1');
		$plus2=$('.plus2');
		$plus3=$('.plus3');		
		
		$plus5=$('.plus5');		
		$plus6=$('.plus6');		
		$plus7=$('.plus7');		
		$plus8=$('.plus8');		
		$plus9=$('.plus9');		
	
	/* 일러스트 */
	$plus1.click(function(){
		$(this).fadeOut(1);
		$sketch2.fadeIn(500);
		$plus2.fadeIn(500);
	});
	$plus2.click(function(){
		$(this).fadeOut(1);
		$sketch3.fadeIn(500);
		$plus3.fadeIn(500);
	});
	$plus3.click(function(){
		$(this).fadeOut(1);
		$sketch4.fadeIn(500);
		$plus4.fadeIn(500);
	});
	
	/* 사진 */
	$plus5.click(function(){
		$(this).fadeOut(1);
		$poto2.fadeIn(500);
		$plus6.fadeIn(500);
	});
	$plus6.click(function(){
		$(this).fadeOut(1);
		$poto3.fadeIn(500);
		$plus7.fadeIn(500);
	});
	$plus7.click(function(){
		$(this).fadeOut(1);
		$poto4.fadeIn(500);
		$plus8.fadeIn(500);
	});
	$plus8.click(function(){
		$(this).fadeOut(1);
		$poto5.fadeIn(500);
		$plus9.fadeIn(500);
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/* window scroll++++++++++++++++++++++++++++++++ */
	$(window).scroll(function(){
		var $info = $(this).scrollTop();
		$('.t').text($info);
			
			
		var $menu=$('.menu-btn02> .nemo');
			$view=$('.view-btn02 > .nemo');
			
		if($info > 100){
			$menu.css({backgroundColor:'black'});
			$view.css({backgroundColor:'black'});
		}else{
			$menu.css({backgroundColor:'white'});
			$view.css({backgroundColor:'white'});		
		}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
	});
	
});