$(function(){
//.slideShow라는 class속성값을 갖는 요소를 찾은다음 해당 요소는 각각의 괄호 안에 코드를 적용한다는 의미
	$('.slideShow').each(function(){
		var $slides = $(this).find('img'),
			slideCount = $slides.length,			
			currentIndex=0;
			
			/* console.log(slideCount); */
			$slides.eq(currentIndex).fadeIn();
			
			/* setInterval(함수명,밀리초) */
			setInterval(showNextSlide, 6000);
			
			function showNextSlide(){
			/* var nextIndex=(currentIndex+1)% slideCount; */
				
				var nextIndex = currentIndex +1;
				if(nextIndex === slideCount){
					nextIndex = 0;
				}
				
				$slides.eq(currentIndex).fadeOut();
				$slides.eq(nextIndex).fadeIn();
				
				currentIndex = nextIndex;
			}
	});
});