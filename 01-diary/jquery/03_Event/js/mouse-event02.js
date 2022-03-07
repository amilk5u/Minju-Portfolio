$(document).ready(function(){
	
	//.hover(function(){}, function(){});
	
	var img = $('.wraper').find('img');
	
	img.hover(function(){
		img.attr('src','img/img02.png');
	},
	function(){
		img.attr('src','img/img01.png');
	});
});


    /* TIP
	1방식 .css('속성','값');
    2방식 .css({'속성':'값', '속성':'값'});
	3방식 .css({
		color : '값',
		backgroundColor : '값',
		속성 : '값'
	}); 
	
	3번째 방식은 두단어 이상 조합이 될때
	카멜표기법으로 표현한다
	*/
	
	
	
	
	
	
	
	
	
	