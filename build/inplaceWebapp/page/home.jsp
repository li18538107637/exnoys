<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE>
<html>
<head>
<title>正正的大师,永远都怀着一颗学徒的心...</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />
<link rel="shortcut icon" href="favicon.ico" />
<link rel="stylesheet" href="css/home.css">
<script type="text/javascript" src='js/jquery-1.11.3.min.js'></script>
<script type="text/javascript" src='js/fiora.js'></script>
<script type="text/javascript" src='js/home.js'></script>
</head>

<body>
<img src="img/open_menu.png" class="back-content" id="menuImg" title='打开菜单'/>
    <div id="inner-div" class="layer">
        <div class='menu'>
			<ul class='left-ul' id="menu_ul">
			</ul>
			<div class="other_modul"></div>
		</div> 
    </div>
	<div id="content_div" class="layer _background">
		<div class='index-head'>
			<span class="head_title">Reverence,forbear,know the sense of propriety.This view and some big, thin hair.
				</span> <span class="n_span">${sessionScope.person.personName
				}</span> <span class="select_menu_span2">|</span> <img src='img/lock.png'
				onclick="lockPage();" title='锁屏'
				class="lock_head_img" /> <span class="select_menu_span">|</span>  <img
				src='img/exit.png' class="exit_img"  title='退出'
				onclick="exit();" />				 
			<div class='msg_div' id="msg_div"></div>
		</div>
		<div class='index-right'>

			<div id='content' class='_content'>
				<iframe src="" id="iframe" scrolling="yes"></iframe>
			</div>
		</div>

	</div>
	<!-- 弹框 -->
	<div class="gakki-confirm" id="gakki-confirm" hidden="hidden">
	<span class='title_span' >提示</span><img src='img/info.png'  class='confirm-img info' />
	<span class="confirm-span"></span> 
	<img src='img/sure.png'  class='confirm-img sure' onclick="confirmClick('0');" />
	<img src='img/cancel.png'  class='confirm-img cancel' onclick="confirmClick('1');" />
	</div>
	
	<!-- 右下角提示信息 -->
	<div class="alert_div" id="alert_div">
		<img class="gakki" src="img/alert.png"  id="gakki" hidden="hidden" />
		<div class="alert_msg_div" id="alert_msg"></div>
	</div>
<!-- 锁屏 -->	
<div class="lock_div" id="lock_div">
<div class="lock_mid_div" id="lock_mid_div">
 <div class="lock_left_div">
</div> 
<ul class="pwd_ul">
<li style="margin-left: .5rem;"><input type="password" oninput='intoThePwdArray(0,this);'/></li>
<li><input type="password" oninput='intoThePwdArray(1,this);' /></li>
<li><input type="password" oninput='intoThePwdArray(2,this);' /></li>
<li><input type="password" oninput='intoThePwdArray(3,this);' /></li>
<li><input type="password" oninput='intoThePwdArray(4,this);' /></li>
<li><input type="password" oninput='intoThePwdArray(5,this);' /></li>
</ul>
<img src="img/screen_lock.png" class='lock_img' onclick="openLock(this)" id="lock_img"/>
</div>
</div>
</body>
</html>