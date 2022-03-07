$(document).ready(function(){
	$('p').each(function(){
		$(this).click(function(){
			$(this).fadeOut();
		})
	});
});

	
	//fadeOut 점점 흐려지게
	//fadeIn 점점 선명하게
	//this 상수 = 변하지 않는 변수
	//each() 각각의 모두에게 적용하라
	
	