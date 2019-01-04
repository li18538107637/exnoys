<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />
<link rel="stylesheet" href="css/list.css">
<script type="text/javascript" src='js/jquery-1.11.3.min.js'></script>
<script type="text/javascript" src='js/list.js'></script>
</head>

<body>
	<ul class='list-ul'>
		<c:forEach var="hlr" items="${requestScope.Highlanders }"
			varStatus="status">
			
			<li onclick="getDetail('${hlr.id }');fiora.cancelBubble(event);"
				id='${hlr.id }' onmouseover="showImg(this);"
				onmouseout="javascript:$(this).find('img').hide();">
				<div class='li_div'>
				    <span class="li_num">${status.count+curIndex}：</span>
					<span class="li_span">${hlr.title}</span>
					 <img
						src="img/move2recyle.png" class="del_img"
						onclick="delData('${hlr.id }','<%=request.getParameter("curType") %>');fiora.cancelBubble(event);"
						curtype='<%=request.getParameter("curType") %>' hidden="hidden" /> <img
						src="img/edit.png" class="edit_img"
						onclick="editData('${hlr.id }'.concat(',').concat('${fn:escapeXml(hlr.title)}').concat(',').concat('${hlr.curType}'));fiora.cancelBubble(event);" hidden /></div>
			</li>
		</c:forEach>
	</ul>
</body>