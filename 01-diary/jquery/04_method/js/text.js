$(document).ready(function(){
	var bt1= $('#btn1');
	var bt2=$('#btn2');
	var $test = $('#test').text();		//���� �ؽ�Ʈ ���븸�� get�Ѵ�
	var $html = $('#test').html();	//p�ȿ� html�±׸� �����Ͽ� get �Ѵ�(�ƹ��͵� �Ƚ������� get�Ѵٰ� �Ѵ�)
	bt1.click(function(){
		$('#text').text('text : ' + $test);			//��ư1�� Ŭ�������� �ؽ�Ʈ�� text:�ϰ� ������ �ٲ��
		alert($test);
		
	});
	bt2.click(function(){
		$('#html').html('text : ' +$html);
		alert($html);
	});
});
