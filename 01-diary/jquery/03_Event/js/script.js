$(document).ready(function(){
	
	var img = $('.wraper').find('img');
	
	img.hover(function(){
		img.attr('src','img/img02.png');
	},
	function(){
		img.attr('src','img/img01.png');
	});
});

