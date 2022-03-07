$(document).ready(function(){
	var b1 = $('button:eq(0)');
	var b2 = $('button:eq(1)');
	
	b1.click(d1t);
	b2.click(d2t);
	
	function d1t(){$('.div1').toggle();}
	function d2t(){$('.div2').toggle();}
});


