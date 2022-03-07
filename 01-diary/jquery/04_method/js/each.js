$(document).ready(function(){
	var $slideShow=$('.slideShow');
	var $list=$slideShow.find('li');
	/* console.log($list.length;); */
	
 	$list.each(function(){
		 alert($(this).text()); 
		 $(this).css('background','red');		
	});  
 	/* for(var i=0; i < $list.length; i++){ */
		/* $list.css('background','red'); */
		/* alert(); */
	}
});