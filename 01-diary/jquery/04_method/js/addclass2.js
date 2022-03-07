$(document).ready(function(){
	var b1 = $('button:eq(0)');
	var b2 = $('button:eq(1)');
	var b3 = $('button:eq(2)');
	var box=$('.box');
	
	b1.click(function(){
		box.addClass('on');
	});
	b2.click(function(){
		box.removeClass('on');
	});
	b3.click(function(){
		box.toggleClass('on');
	});
	
	$('figure').hover(function(){
		$(this).toggleClass('active');
	});
	
	$('.colorbox').hover(function(){
		$('.cbox').toggleClass('slide');
	});
	
});