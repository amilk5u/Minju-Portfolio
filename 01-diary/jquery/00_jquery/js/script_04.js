﻿$(document).ready(function(){
	$('p').mouseenter(function(){
		$('p').css({
			backgroundColor:'red',
			color:'pink',
			lineHeight:'40px'
		});
	});
	$('span').mouseenter(function(){
		$('span').css({
			backgroundColor:'blue',
			color:'pink',
			lineHeight:'40px'
		});
	});	
});