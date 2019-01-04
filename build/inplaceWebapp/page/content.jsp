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
<base href="<%=basePath%>">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link rel="stylesheet" href="css/content.css">
<script type="text/javascript" src='js/jquery-1.11.3.min.js'></script>
<script type="text/javascript" src='js/fiora.js'></script>
<script type="text/javascript" src='js/content.js'></script>
</head>

<body>
	<div class='search_div'>
	    <img src='img/home.png' class="content_head_img home_img" onclick="curType='00';isOpen='0';$('.search_input').val('');getTotal();" title='回到最初' />
		<img src='img/add.png' class="content_head_img new_img" onclick="addPage();" title='添加记录' />
		<img src="img/recycle.png" class="content_head_img recycle_img"  title="打开回收站"
					onclick="javascript:window.parent.document.getElementById('iframe').src='page/content.jsp?curType=de'" />
		 <input class='search_input'  placeholder="请输入标题关键字搜索..."  type="text" />
		<img src='img/search.png' class='search_img'  onclick="if($('.search_input').val()!=''){getTotal();}else{fiora.showGakki('検索条件は空');}" />		
	</div>
	<div class='index-list'>
		<div id="list_li"></div>
		<div class="page_div" hidden='hidden'>
			<span id="first-page">首页</span> <span id="pre-page">上一页</span> <span
				id="cur-page">1</span> <span id="next-page">下一页</span> <span
				id="last-page">尾页</span>
		</div>
	</div>
	<div class='index-detail'>
	<div class="ghost" hidden='hidden'>
	<div class="ghostBody"></div>
	<div class="ghostEye left"></div>
	<div class="ghostEye right"></div>
	<div class="ghostMouth"></div>
	<div class="ghostWave"></div>
	<div class="shadow"></div>
    </div>
	</div>
	 
</body>
</html>
