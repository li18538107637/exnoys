<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE>
<html>
 <head>
    <base href="<%=basePath%>">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" href="css/addJsp.css">
	<script type="text/javascript" src='js/jquery-1.11.3.min.js'></script>
	<script type="text/javascript" src="js/jquery.form.js"></script>
	<script type="text/javascript" src='js/fiora.js'></script>
	<script type="text/javascript">
	var curType='<%=request.getParameter("curType")%>';
	</script>
	<script type="text/javascript" src='js/addRecord.js'></script>
</head>
  
  <body>
    <div class='add_div' >
    <form id="addForm" name="addForm" action="add.do" method="post" enctype ="multipart/form-data" onSubmit="return addRecord.check();" >
    <div class="add_left">
    <div class="add_title" >
    <span class="title_span">标题</span>
     <textarea class="title_textArea" cols='5' rows='5'  id="title" name="title" placeholder="请填写标题" ></textarea>
    </div>
     <div class="add_type_father" >
    <span class="type_span">主类型</span>
    <select class="type_select"  id="father_curType" > 
    <option value='0'>java</option> 
    <option value='1'>javaScript</option> 
    <option value='2'>database</option> 
    <option value='3'>developTools</option> 
    </select>
    </div>
     <div class="add_type_son" >
    <span class="type_span">副类型</span>
    <select class="type_select"  id="curType" name="curType" ></select>
    <input type="hidden" name="submitType" id="submitType" value="add" />
    <input type="hidden" name="curId" id="curId"  />
    </div>
    </div>
    <div class="add_right" >
    <div class="add_body" >
    <span class="detail_span">内容</span>
    <textarea rows="50" cols="30" id="details" name="details"  class="ckeditor"></textarea>
    </div>
     <script  type="text/javascript" src="ckeditor/ckeditor.js" ></script>
    <script  type="text/javascript">	 
	CKEditor=CKEDITOR.replace('details');			
	</script>
    <button type="button" class="back_btn" title='返回' onclick="javascript:window.history.go(-1);"></button>
    <button type="submit" id="submit" class="sub_btn" title='提交' onClick="checkForm();"></button>
    </div>  
    </form>                   
    </div>
 </body>
</html>
