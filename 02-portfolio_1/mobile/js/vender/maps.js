$(function(){
	initialize();
});

function initialize() {
	   var myLatlng = new google.maps.LatLng(37.538026, 127.127031);
	   var myOptions = {
		zoom: 15,
		center: myLatlng,
		 <!-- mapTypeId: google.maps.MapTypeId.TERRAIN  -->
	   mapTypeId: google.maps.MapTypeId.ROADMAP 
		}
	   var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	   var marker = new google.maps.Marker( {
		position: myLatlng, 
		map: map, 
		title:"(주)하이미디어"
	   });   
	   var infowindow = new google.maps.InfoWindow( {
		content: "(주)서울 강동구 천호동 천호역"
	   });
	   infowindow.open(map,marker);
	  }
	/*   window.onload=function() {
	   initialize();
	 } */