 $(document).ready(function(){
	$('div').hover(function(){
		$('div').animate({
			left:'500px'
		},function(){
			$(this).animate({
				left:'900px'
			});
		});
	});
 });




// $(selector).animate({�Ӽ�:'��'},�ӵ�, ȣ��(�Լ��� ����(callback)));	�����߿�....�١١١١�

//������ ���ÿ� ������ �ִϸ��̼�
/* $(document).ready(function(){
	$('div').animate({
		left:'300px',
		bottom:'200px'
	},3000);
}); */

//�ϳ��� �ִϸ��̼� ������ ������ ���� �ݹ��Լ��� ���� �ٽ� �ִϸ��̼� �����Ѵ�
/*  $(document).ready(function(){
	$('div').animate({
		left:'300px',
	},250,function(){
		$(this).animate({
			left:'0px'	 �ִϸ��̼��� �̰��� �ٽ� �ǵ��ư��� left:0 ����
		});
	});
}); 
 */