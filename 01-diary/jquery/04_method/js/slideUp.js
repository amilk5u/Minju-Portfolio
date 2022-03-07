$(document).ready(function(){
	//전역변수
	var div1 = $('.div1');
	var div2 = $('.div2');
	var div3 = $('.div3');
	div1.css('background-color','#9999FF'); 
	div2.css('background-color','#FF99FF');
	div3.css('background-color','#99FFB2');
	
	$('button').click(function(){ 
		div1.slideUp();
		div2.slideUp('slow');
		div3.slideUp(3000);
	});
});


