$(document).ready(function(){
	$('div:last').css('margin-top','350px');		//�������� �ִ� div�� ~�ض�
	$('button').click(function(){							//��ư�� �������� �����ض�//300px �ѹ��� �����δ�
			$('.div1').animate({left: '300px'},function(){$(this).animate({left:'0px'})});
			$('.div2').animate({left: '+=300px'},500,function(){
				left:'0px'
			});	//300px�� ��� �������� 500�ʸ�ŭ
	});

});

//$('div').animate({},2000�ӵ�,functionȣ�� �Լ��� ����(){��});  �̷������� �����Ѵ�
// $(selector).animate({�Ӽ�:'��'},�ӵ�, ȣ��(�Լ��� ����(callback)));
