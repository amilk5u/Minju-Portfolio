$(document).ready(function(){
	var tb = $('.table');
	var tg = $('.toggle');
	tg.click(function(){
		tg.toggleClass('on');
		if(tg.hasClass('on')){
			tb.stop(true).animate({
				left:'0px'
			},1000, 'easeInElastic');
		}else{
			tb.stop(true).animate({
				left:'-900px'
			},1000, 'easeInElastic');
		}
	});
});

// $(selector).animate({�Ӽ�:'��'},�ӵ�, ȣ��(�Լ��� ����(callback)));
// ��¡�Լ��� ������ �ӵ��ڿ� '��¡�Լ�'
