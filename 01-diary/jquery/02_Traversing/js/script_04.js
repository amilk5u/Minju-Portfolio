$(document).ready(function(){	
	$('#p1').mouseenter(function(){  	//마우스를 올렸을때 실행하라
	
		
		
		$('#p1')
		.css({
			'background-color':'gold',
			'djdjd-djdjd':'djdjd'		//''을찍으면 데시를 사용해야한다
			});
		$('#p1')
		.css({fontSize:,'200px'});		//''을 안찍을꺼면 카멜기법을 사용해야한다
		
		
		$('#p1').css('line-height','50px');
		$('#p1').css('margin','0 auto');
		$('#p1').css('text-align','center');
		
	});
	$('#p1').mouseout(function(){
		$('#p1').css('background-color','pink');
		
	});
});
 