$(document).ready(function(){
	var basket = $('#basket');
	var apple = $('#apple');
	var banana = $('#banana');
	var orange = $('#orange');
	var pink = $('#pink');
	var blue = $('#blue');
	
	orange.append(basket);
	pink.append(basket);
	blue.prependTo(banana);
	orange.prependTo(pink);
});