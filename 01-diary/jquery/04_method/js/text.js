$(document).ready(function(){
	var bt1= $('#btn1');
	var bt2=$('#btn2');
	var $test = $('#test').text();		//순수 텍스트 내용만을 get한다
	var $html = $('#test').html();	//p안에 html태그를 포함하여 get 한다(아무것도 안썼을때을 get한다고 한다)
	bt1.click(function(){
		$('#text').text('text : ' + $test);			//버튼1을 클릭했을때 텍스트에 text:하고 내용을 바꿔라
		alert($test);
		
	});
	bt2.click(function(){
		$('#html').html('text : ' +$html);
		alert($html);
	});
});
