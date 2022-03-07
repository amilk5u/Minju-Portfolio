$(document).ready(function(){
	$('div:last').css('margin-top','350px');		//마지막에 있는 div를 ~해라
	$('button').click(function(){							//버튼을 눌렀을때 실행해라//300px 한번만 움직인다
			$('.div1').animate({left: '300px'},function(){$(this).animate({left:'0px'})});
			$('.div2').animate({left: '+=300px'},500,function(){
				left:'0px'
			});	//300px이 계속 움직여라 500초만큼
	});

});

//$('div').animate({},2000속도,function호출 함수나 변수(){값});  이런식으로 적용한다
// $(selector).animate({속성:'값'},속도, 호출(함수나 변수(callback)));
