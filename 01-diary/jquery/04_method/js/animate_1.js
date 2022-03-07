$(document).ready(function(){
	$('div').animate({
		right:'800px',	//div를 애니메이션 시킨후 
	},250,function(){
		$(this).slideUp();	//그것을 슬라이드 업해라
	});
});


$(document).ready(function(){
	$('div').animate({
		right:'800px',	//div를 애니메이션 시킨후 
	},250,function(){
		$(this).fadeIn();	//보여라
	});
});



// $(selector).animate({속성:'값'},속도, 호출(함수나 변수(callback)));	제일중요....☆☆☆☆☆

//값들을 동시에 적용한 애니메이션
/* $(document).ready(function(){
	$('div').animate({
		left:'300px',
		bottom:'200px'
	},3000);
}); */

//하나의 애니메이션 동작이 끝나고 난후 콜백함수를 통해 다시 애니메이션 실행한다
/* $(document).ready(function(){
	$('div').animate({
		left:'300px',
	},250,function(){
		$(this).animate({
			left:'0px'	애니메이션한 이것이 다시 되돌아간다 left:0 으로
		});
	});
}); */


//중간에 설명 빠짐