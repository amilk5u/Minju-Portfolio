$(document).ready(function(){
	var color1 = $('.div1').css('background-color','#9999FF');
	var color2 = $('.div2').css('background-color','#FF99FF');
	var color3 = $('.div3').css('background-color','#99FFB2');
	var color4 = $('.div4').css('background-color','#FF9999');
	color1.fadeIn();
	color2.fadeIn('slow');  //slow normal fast
	color3.fadeIn(3000);
	color4.fadeTo(3000, 0.15);
});

// 페이드인은 display:none 이여야 한다
