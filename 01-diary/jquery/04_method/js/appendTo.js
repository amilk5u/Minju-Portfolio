$(document).ready(function(){
	var basket = $('#basket');
	var apple = $('#apple');
	var banana = $('#banana');
	var orange = $('#orange');
	
 	apple.appendTo(basket);
	banana.appendTo(basket);	
	orange.appendTo(basket);
	//덧붙혀지다
	/* apple.append(basket); */
});