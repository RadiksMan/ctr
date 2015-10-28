<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<title></title>

	<link rel="stylesheet" type="text/css" href="css/reset.css" media="all" />

	<link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=cyrillic' rel='stylesheet' type='text/css'>

	<!--<link rel="stylesheet" href="css/bootstrap.css" media="all" />
	<link rel="stylesheet" href="css/bootstrap-theme.css" media="all" />-->

	<link rel="stylesheet" type="text/css" href="css/style.css" media="all" />

	<!-- <link rel="stylesheet" href="css/tuesdayAnimate.css" media='all' /> -->

	<script src="js/jquery-1.11.3.min.js" type="text/javascript"></script>

	<!-- bootstrap -->

	<!--<script src="js/bootstrap.js" type="text/javascript"></script>-->

	<!-- /bootstrap -->

	<script src="js/selectivizr-min.js" type="text/javascript"></script>

	<link rel="stylesheet" type="text/css" href="css/jquery.znice.css" media="all" />
	<script src="js/jquery.validate.min.js" type="text/javascript"></script>
	<!--<script src="js/jquery.znice.validate.js" type="text/javascript"></script>
	<script src="js/jquery.znice.js" type="text/javascript"></script>-->

	<link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox.css" media="all" />
	<script src="fancybox/jquery.fancybox.js" type="text/javascript"></script>

	<script src="js/modernizr.js" type="text/javascript"></script>
	<script src="js/jquery.watermark.min.js" type="text/javascript"></script>

<!-- mask for inputs -->

	<script src="js/maskInput.js" type="text/javascript"></script>

<!-- /mask for inputs -->

<!-- sliders -->
	<link rel="stylesheet" type="text/css" href="css/slick.css" media="all" />
	<script src="js/slick.js" type="text/javascript"></script>
<!-- sliders -->

<!-- jScrollPane -->
	<link type="text/css" href="css/jquery.jscrollpane.css" rel="stylesheet" media="all" />
	<script type="text/javascript" src="js/jquery.mousewheel.js"></script>
	<script type="text/javascript" src="js/jquery.jscrollpane.min.js"></script>
<!-- jScrollPane -->

<!-- typed js -->

	<script src="http://code.createjs.com/easeljs-0.7.1.min.js"></script>
	<script src="http://code.createjs.com/tweenjs-0.5.1.min.js"></script>
	<script src="http://code.createjs.com/movieclip-0.7.1.min.js"></script>
	<script src="http://code.createjs.com/preloadjs-0.4.1.min.js"></script>

	<script type="text/javascript" src="js/typed.js"></script>

	<script type="text/javascript" src="js/logo_index.js"></script>

	<script src="js/team.js"></script>

	<script type="text/javascript">
	// тексты typed js
		var strings = ["ctr.design"];
	</script>

<!-- /typed js -->

<!-- video js -->

<link href="http://vjs.zencdn.net/5.0.0/video-js.css" rel="stylesheet">

<!-- video js -->

<!-- remove Files -->

	<link rel="stylesheet" href="css/radion.css" media="all" />
	<script src="js/radion.js" type="text/javascript"></script>

	<link rel="stylesheet" href="css/artem.css" media="all" />
	<script src="js/artem.js" type="text/javascript"></script>

	<link rel="stylesheet" href="css/roma.css" media="all" />
	<script src="js/roma.js" type="text/javascript"></script>

	<link rel="stylesheet" href="css/nikolay.css" media="all" />
	<script src="js/nikolay.js" type="text/javascript"></script>

	<!--<script src="js/myalert.js" type="text/javascript"></script>
	<script src="develop/autocssrenew.js" type="text/javascript"></script>-->

<!-- remove Files -->

	<link rel="stylesheet" href="css/style_main.css" media="all" />
	<script src="js/scr.js" type="text/javascript"></script>

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>


	<!--[if lt IE 9]>
		<script>
		document.createElement('header');
		document.createElement('nav');
		document.createElement('section');
		document.createElement('article');
		document.createElement('aside');
		document.createElement('footer');
		document.createElement('time');
		</script>
		<script src="js/pie.js" type="text/javascript"></script>
	<![endif]-->

	<!--[if lt IE 8]><script src="js/oldie/warning.js"></script><script>window.onload=function(){e("js/oldie/")}</script><![endif]-->

 </head>
<body>
	<?partial('zHiddenBlock');?>

	<div  class="mega-main-wrapper">
		<header class="header <? if($act == "index" || $act == "none"){echo $act;} ?>">

			<?php if($act == "index" || $act == "none"){
				partial('mainHeader');
			 }
			else {
				partial('otherHeader');
			} ?>

		</header>