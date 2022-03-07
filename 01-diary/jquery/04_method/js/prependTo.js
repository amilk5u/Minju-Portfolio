$(document).ready(function(){
	var basket = $('#basket');
	var apple = $('#apple');
	var banana = $('#banana');
	var orange = $('#orange');
	basket.prependTo(apple);
	basket.prependTo(banana);
	basket.prependTo(orange);
	//앞에 부가하기(덧붙이기) 맨앞에 들어간다 //맨마지막에 온 것이 맨앞에온다
});