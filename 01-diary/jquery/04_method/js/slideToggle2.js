$(document).ready(function(){
	$('h2').hover(function(){
		$(this).next().stop(true, false).slideToggle('slow');
	});
});


// stop(stopAll, goToEnd)
// stop(대기중인 애니메이션을 중지(기본은 false),  진행중인 애니메이션을 즉시 완료 할지 여부(기본값은 false))
// stop(true) **