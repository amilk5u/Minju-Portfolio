/* $(document).ready(function(){
		$('.button').click(function(){
			$('html, body').animate({scrollTop:0},500, 'easeInCirc');
		});		
	}); */

// $(selector).animate({속성:'값'},속도, 호출(함수나 변수(callback)));
// 이징함수를 쓸때는 속도뒤에 '이징함수'

/*
offset 함수 : 지정객체의 좌표인식( top , left )
scrollTop : 브라우져 상단 위치 속성 (쉽게 말하면 그냥 맨위라는 뜻)
*/

$(document).ready(function(){
	$('.button').click(function(){
		$('html, body').animate({scrollTop:0},500);
	});
});
