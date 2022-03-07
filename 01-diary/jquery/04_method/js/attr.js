$(document).ready(function(){
	var img01 = $('figure:first').find('img');
	var img02 = $('figure:last').find('img');
	 img01.hover(function(){
		$(this).attr('src','img/img02.png');
	 }, function(){
		$(this).attr('src','img/img01.png');
	 });
	 
	 img02.click(function(){
		$(this).attr('width','300px');
	 });
});
