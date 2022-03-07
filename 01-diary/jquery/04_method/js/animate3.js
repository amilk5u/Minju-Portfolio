$(document).ready(function(){
	var tb = $('.table');
	var tg = $('.toggle');
	tg.click(function(){
		tg.toggleClass('on');
		if(tg.hasClass('on')){
			tb.stop(true).animate({
				left:'0px'
			},1000, 'easeInElastic');
		}else{
			tb.stop(true).animate({
				left:'-900px'
			},1000, 'easeInElastic');
		}
	});
});

// $(selector).animate({속성:'값'},속도, 호출(함수나 변수(callback)));
// 이징함수를 쓸때는 속도뒤에 '이징함수'
