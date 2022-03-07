$(document).ready(function(){
	
	//윈도우 스크롤
	$(window).scroll(function(){ 
		var $info = $(this).scrollTop();
		var $li= $('li');
		var $span = $('span');
		/* console.log($info); */

		if($info > 50 ){
			$('header').css({
				backgroundColor:'black',
				height:'68px'
			});
			$li.css('lineHeight','68px');
		}else{
			$('header').css({
				backgroundColor:'',
				height:'48px'
			});
			$li.css('lineHeight','48px');
		}

		/*  $span.text($info); */
	});
	
	
});


/* if($(document).scrollTop() >= 100 ){} */