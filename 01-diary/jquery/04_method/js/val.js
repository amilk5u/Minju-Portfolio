$(document).ready(function(){
	var bt1=$('.show');
	var bt2=$('.chainge');
	var $text=$('.text');
	var $test=$('.test').val();
	bt1.click(function(){
		$('.text').text('val : '+$test);
		alert($test);
	});
	bt2.click(function(){
		$('#test').val('벨류값을 치환합니다');
	});
	
});