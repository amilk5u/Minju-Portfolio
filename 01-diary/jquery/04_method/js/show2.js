$(document).ready(function(){
	var b1 = $('button:eq(0)');
	var b2 = $('button:eq(1)');
	var b3 = $('button:eq(2)');
	var b4 = $('button:eq(3)');
	
	b1.click(function(){
		$('.div1').show();
	});
	b2.click(function(){
		$('.div1').hide();
	});
	b3.click(function(){
		$('.div2').show();
	});
	b4.click(function(){
		$('.div2').hide();
	});
});


