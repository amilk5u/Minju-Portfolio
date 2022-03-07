$(document).ready(function(){
	$('p').click(function(){
		$('p:eq(0)').fadeOut();
	});
	$('button').click(function(){
		$('button').prev().fadeOut();
	});
});

	
	//fadeOut 점점 흐려지게
	//fadeIn 점점 선명하게
	
	
	