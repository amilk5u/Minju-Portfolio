/* $(document).ready(function(){
		$('.button').click(function(){
			$('html, body').animate({scrollTop:0},500, 'easeInCirc');
		});		
	}); */

// $(selector).animate({�Ӽ�:'��'},�ӵ�, ȣ��(�Լ��� ����(callback)));
// ��¡�Լ��� ������ �ӵ��ڿ� '��¡�Լ�'

/*
offset �Լ� : ������ü�� ��ǥ�ν�( top , left )
scrollTop : ������ ��� ��ġ �Ӽ� (���� ���ϸ� �׳� ������� ��)
*/

$(document).ready(function(){
	$('.button').click(function(){
		$('html, body').animate({scrollTop:0},500);
	});
});
