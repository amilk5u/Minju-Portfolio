$(document).ready(function(){
	var $s01 = $('#sec01').offset();
	var $s02 = $('#sec02').offset();
	var $s03 = $('#sec03').offset();
		
	$('li:eq(0)').click(function(){
		$('html, body').stop(true).animate({scrollTop: $s01.top},800, 'easeInCubic');
	});
	$('li:eq(1)').click(function(){
		$('html, body').stop(true).animate({scrollTop: $s02.top},800, 'easeInCubic');
	});
	$('li:eq(2)').click(function(){
		$('html, body').stop(true).animate({scrollTop: $s03.top},800, 'easeInCubic');
	});
	$('.button').click(function(){
		$('html, body').animate({scrollTop:0},800, 'easeInCubic');
	});
});



   /* var val = $('#Id').offset();
    $('body,html').animate({scrollTop:val.top},300); */

