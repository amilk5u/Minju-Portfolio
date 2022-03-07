$(document).ready(function(){
	
	/* 버튼 */
	var $allb=$('.button li:nth-child(1)');
		$enbleb=$('.button li:nth-child(2) img');
		$lightb=$('.button li:nth-child(3) img');
	var alltext=$('.button li:first-child');	
		
	/* 사진 */
	var $all=$('.wrap .all');
		$enble=$('.wrap .enble');
		$light=$('.wrap .light');
		
	$allb.click(function(){
		$all.css({display:'block'});
		$enble.css({display:'none'});
		$light.css({display:'none'});
		alltext.css({fontWeight:'bold'});
		$enbleb.attr({src:'img/btn_gallery02_off.jpg'});
		$lightb.attr({src:'img/btn_gallery03_off.jpg'});
	});
	$enbleb.click(function(){
		$all.css({display:'none'});
		$enble.css({display:'block'});
		$light.css({display:'none'});
		$(this).attr({src:'img/btn_gallery02_over.jpg'});
		$lightb.attr({src:'img/btn_gallery03_off.jpg'});
		alltext.css({fontWeight:'lighter'});
	});
	$lightb.click(function(){
		$all.css({display:'none'});
		$enble.css({display:'none'});
		$light.css({display:'block'});
		$enbleb.attr({src:'img/btn_gallery02_off.jpg'});
		$(this).attr({src:'img/btn_gallery03_over.jpg'});
		alltext.css({fontWeight:'lighter'});
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
