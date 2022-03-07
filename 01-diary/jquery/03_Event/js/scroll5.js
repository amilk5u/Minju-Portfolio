$(document).ready(function(){

	//윈도우 스크롤
	$(window).scroll(function(){
		var $s01 = $('#sec01').offset();
		var $s02 = $('#sec02').offset();
		var $s03 = $('#sec03').offset();
		var $s001 = $('#sec01').height();
		var $s002 = $('#sec02').height();
		var $s003 = $('#sec03').height();
		console.log($s001); 

		var $info = $(this).scrollTop();
		var $li= $('li');
		var $span = $('span');
		var $st = $('section');
/*  	console.log($info);   */
		if($info  > 50){
			$('html, body').stop(true).animate({scrollTop: $s002.top},800, 'easeInCubic');
		}

		

		if($info > 50 ){
			$('header').css({
				backgroundColor:'black',
				height:'68px'
			});
			$li.css('lineHeight','68px');
			/* $('html, body').animate({scrollTop: $s02.top},800, 'easeInCubic'); */
		}else{
			$('header').css({
				backgroundColor:'',
				height:'48px'
			});
			$li.css('lineHeight','48px');
		}
		
		$span.text($info);
	});
	
	
	
	
});


/* if($(document).scrollTop() >= 100 ){} */