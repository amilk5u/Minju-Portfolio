$(document).ready(function(){
	$('button').click(function(){
		$('html,body').animate({scrollTop: $('h1').offset().top-0},800);
	});
			
	});
});

// $(selector).animate({�Ӽ�:'��'},�ӵ�, ȣ��(�Լ��� ����(callback)));
// ��¡�Լ��� ������ �ӵ��ڿ� '��¡�Լ�'

/*
offset �Լ� : ������ü�� ��ǥ�ν�( top , left )
scrollTop : ������ ��� ��ġ �Ӽ� ( scrollLeft )
*/
		$('#btnDown').click(function(){
			$('html,body').animate({ scrollTop : $('#box2').offset().top-0},800);
		});
		$('#btnUp').click(function(){
			$('html,body').animate({ scrollTop : $('#box1').offset().top-0},800);
		});
	});
</script>
<style type="text/css">
	body{		margin:0;		padding:0;		font-size:12px;		}
	#header{	width:1560px;	height:20px;	background:#f00;	padding:20px;	font-size:30px;		
				position:fixed;	left:0;		top:0;
	}
	#box1{		width:1200px;	height:800px;	background:#0f0;	padding:200px;	 }
	#box2{		width:1200px;	height:800px;	background:#00f;	padding:200px;	 }
	#footer{	width:1560px;	height:20px;	background:#f00;	padding:20px;	font-size:30px;		
				position:fixed;	left:0;		bottom:0;
	}
</style>
</head>

<body>
<div id="header">header</div>
<div id="box1"><input type="button" id="btnDown" value="scrollDown" /></div>
<div id="box2"><input type="button" id="btnUp" value="scrollUp" /></div>
<div id="footer">footer</div>
</body>
</html>
