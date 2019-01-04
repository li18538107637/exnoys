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
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />
<link rel="stylesheet" href="css/detail.css">
<script type="text/javascript" src='js/detail.js'></script>
</head>

<body>
   <button type="button" onclick="$('#content-detail').animate({scrollTop:'0px'},1000);" class="top_btn" >Top</button>  
   <div id="content-detail" class='content-detail'>${requestScope.hlr.content }</div>	
</body>