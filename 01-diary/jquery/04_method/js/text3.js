/* $(document).ready(function(){
	var button=$('button');
	
	button.click(function(){
		$('p').text(function(i){
			return ' (인덱스번호는 : ' + i + ' ) ';
		});	
	});
});
 */
$(document).ready(function(){
	var button=$('button');
	
	button.click(function(){
		$('p').text(function(i,dkdkdk){
			return '인덱스번호는 :'+i+dkdkdk;
		});
	});
	
	
});