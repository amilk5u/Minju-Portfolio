$(document).ready(function(){
	var bt1= $('#btn1');
	var bt2=$('#btn2');
	var pp = $('p');
/* 	console.log(pp); */
	bt1.click(function(){
		$('p').text(function(i, origText){
			return '기존 텍스트 : ' + origText  + '새로운 텍스트 (인덱스번호는 : ' + i + ' ) ';
			//매개변수는 함수안의 코드블럭에서 변수로 사용 할 수 있다
		});
	});
	bt2.click(function(){
		$('p').html(function(i, origText){
			return '기존 텍스트 : ' + origText  + '새로운 텍스트 (인덱스번호는 : ' + i + ' ) ';
		});
	});
});

