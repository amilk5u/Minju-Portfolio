$(document).ready(function(){
	$('h2').hover(function(){
		$(this).next().stop(true, false).slideToggle('slow');
	});
});


// stop(stopAll, goToEnd)
// stop(������� �ִϸ��̼��� ����(�⺻�� false),  �������� �ִϸ��̼��� ��� �Ϸ� ���� ����(�⺻���� false))
// stop(true) **