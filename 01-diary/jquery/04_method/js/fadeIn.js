$(document).ready(function(){
	var b1 = $('button:eq(0)');
	var b2 = $('button:eq(1)');
	var b3 = $('button:eq(2)');
	var b4 = $('button:eq(3)');
	
	b1.click(d1s);
	b2.click(d1h);
	b3.click(d2s);
	b4.click(d2h);
	
	function d1s(){$('.div1').fadeIn();}
	function d1h(){$('.div1').fadeOut();}
	function d2s(){$('.div2').fadeIn();}
	function d2h(){$('.div2').fadeOut();}
});


