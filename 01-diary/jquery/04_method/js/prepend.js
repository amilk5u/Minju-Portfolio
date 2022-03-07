$(document).ready(function(){
	var basket = $('#basket');
	var apple = $('#apple');
	var banana = $('#banana');
	var orange = $('#orange');
	basket.prepend(apple);		//베스킷에 애플이 맨앞에 들어간다
	basket.prepend(banana);		//베스킷에 바나나가 맨앞에 들어간다
	basket.prepend(orange);		//베스킷에 오랜지가 맨앞에 들어간다
	//앞에 부가하기(덧붙이기)
});