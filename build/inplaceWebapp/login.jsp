<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE>
<html>
<head>
<title>正正的大师,永远都怀着一颗学徒的心...</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="expires" content="0">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link rel="shortcut icon" href="favicon.ico" />
<link rel="stylesheet" href="./css/login.css">
<script src='js/jquery-1.11.3.min.js'></script>
<script src='js/jquery.form.js'></script>
<script src='js/login.js'></script>
</head>
<body onkeydown="master_login.enterLogin();" style="background:rgb(43,43,43);">
<img src="loginImg/audio.png" class="audio_img"   id="audioImg" title='Open the sound'  hidden="hidden"/>
<video width="100%" height="100%" id="playVideo" autoplay="autoplay"  loop="loop" style="object-fit:fill;opacity:1;" ></video>
	<form class="login_box" id="login_box" action="login.do" method="post"  hidden="hidden">		
		<input
			type="text" class="login_input" id="username" name="username" autocomplete="new-password"  readonly  
			placeholder="press enter after input"  /><span class="error_msg">${msg}</span>
	</form>
	<div class="cr_div" hidden="hidden">©2018-2019 hlr, Inc. All rights reserved.</div>
</body>
</html>
