if(window.addRecord){
	alert("addRecord冲突了!");
}else{
   var addRecord={};
}


jQuery.extend(addRecord,{
	javaMap:{00:'基础知识',01:'后端框架'},
	javaScriptMap:{10:'页面样式',11:'插件封装',12:'前端框架'},
	databaseMap:{20:'mysql',21:'oracle',22:'sqlserver'},
	developToolsMap:{30:'开发工具',31:'服务器',32:'项目管理',33:'版本控制'},	
	getTheType:function(fatherType){
		switch(fatherType){
		case '0':
			addRecord.generateOption(addRecord.javaMap);break;
		case '1':
			addRecord.generateOption(addRecord.javaScriptMap);break;
		case '2':
			addRecord.generateOption(addRecord.databaseMap);break;
		case '3':
			addRecord.generateOption(addRecord.developToolsMap);break;
		default:'';		
	  }
	},
	generateOption:function(map){
  		$('#curType').html('');
  		var option='';
  		for(var key in map){
  			option+='<option value="'+key+'">'+map[key]+'</option>';
  		}
  		$('#curType').append(option);
  	},
  	check:function (){
  		 var title=$('#title').val();
  		 var curType=$('#curType').val();
  		 if(fiora.nullToReturn(title)){fiora.showGakki("标题不能为空...");return false;}
  		 if(fiora.nullToReturn(curType)){fiora.showGakki("请选择类型...");return false;}
  		 return true;
  	},
  	checkForm:function (){ 
  	  if($("#submitType").val()=="update"){
  		  for ( instance in CKEDITOR.instances ) {
  			  CKEDITOR.instances["details"].updateElement(); 	  
  		  }  
  	  }    	 
  	  return true; 
    },
  	paddingData:function(){
		$.ajax({
			url : "detail.do",
			data : {
				   "id": $("#curId").val(),
				 "type":'1'
			},
			success : function(data) {
				
			 var editor = CKEDITOR.instances["details"]; //你的编辑器的"name"属性的值
			
			    if (CKEDITOR.instances["details"]) { 
			    	CKEDITOR.instances["details"].destroy(true);//销毁编辑器
			   }       
			    CKEDITOR.replace('details'); //替换编辑器，editorID为ckeditor的"id"属性的值
			    $("#details").val(data);
			},
			error : function(xhr, status, error) {
				fiora.showGakki("获取记录详细失败");
			}
		});
	}
});

window.onload=function(){
	document.getElementById('father_curType').addEventListener('change',
			function(event){addRecord.getTheType(event.target.value);},false);
	var fatherType=curType.substring(0,1);
	document.getElementById('father_curType').value=fatherType;addRecord.getTheType(fatherType);
		/*$("#submitType").val("update");
		$("#curType").append(editStr);
		$("#title").val('<%=request.getParameter("param")%>'.split(',')[1]);
		$("#curId").val('<%=request.getParameter("param")%>'.split(',')[0]);
		paddingData();
		$("#curType option").each(function(j,k){
			if(k.value==('<%=request.getParameter("param")%>'.split(',')[2]))
				$(k).attr("selected",true);
		});*/	
}