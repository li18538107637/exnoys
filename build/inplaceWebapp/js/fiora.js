if(window.fiora){
	alert("fiora冲突了!");
}else{
   var fiora={};
}


jQuery.extend(fiora,{
	nullToReturn:function (str){//非空校验
	if(str===""||str===null||str===undefined)	return true; else  return false;},
	
    nullToStr:function (str,repStr) {/*null转指定字符串*/
    if(str ===null || str === ""||str===undefined) { str = repStr; return str;}return str;},
	
    cutStr:function (str,maxLength,cutLength) { /*内容过长*/
    if(str.length > maxLength) {str = str.substring(0, cutLength) + "...";return str;}return str;},
		
    docSize:function (number){/*附件size*/
	if(number>1024*1024){number=(number/1024/1024).toFixed(2)+"M";	return number;}else if(number>1024){number=(number/1024).toFixed(2)+"kb";return number;}else{return number+"b";}},
	
    getNowFormatDate:function (){//获取当前时间
    var date = new Date(),seperator1 = "-",seperator2 = ":", month = date.getMonth() + 1, strDate = date.getDate();
    if(month >= 1 && month <= 9) { month = "0" + month;}
    if(strDate >= 0 && strDate <= 9) {strDate = "0" + strDate; }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " +date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
    return currentdate;
   },
    
    getNowFormatDate:function (o) {//获取时间
	var date=new Date(o), seperator1 = "-",seperator2 = ":", month = date.getMonth() + 1, strDate = date.getDate();
    if(month >= 1 && month <= 9) {month = "0" + month;}
    if(strDate >= 0 && strDate <= 9) { strDate = "0" + strDate; }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1+ strDate + " " +(date.getHours()<10?("0"+date.getHours()):date.getHours()) + seperator2 + (date.getMinutes()<10?("0"+date.getMinutes()):date.getMinutes()) + seperator2 + (date.getSeconds()<10?("0"+date.getSeconds()):date.getSeconds());
    return currentdate;
    },
    showGakki:function (o){
    	$(".alert_div").css("width","300px");
    	var gakki=window.parent.document.getElementById('gakki');
    	var alert_msg=window.parent.document.getElementById('alert_msg');
    	$(alert_msg).html(o);
    	$(gakki).fadeIn(500);
    	setTimeout(function(){	
    	$(alert_msg).animate({width:200},1000);
    	},500);
    	setTimeout(function(){			 
    		$(alert_msg).animate({width:0});$(alert_msg).html('');
    		},2500); 
    	setTimeout(function(){		
    		$(gakki).fadeOut(1000); $(".alert_div").css("width","0px");		
    		},3000); 	
      },
    cancelBubble:function (e) { // 阻止事件冒泡,一般用在鼠标或键盘事件上
    if(e && e.stopPropagation) { //W3C取消冒泡事件  
        e.stopPropagation();
    } else { //IE取消冒泡事件   
        window.event.cancelBubble = true;
    }
    },
    EnterKeyDown:function (func,keyCode){//捕捉keyDown事件，执行传入方法，func方法名，keyCode回车事件代码（13回车）
	  if(event.keyCode==keyCode){eval(func);}   
 	},
    //处理键盘事件 禁止后退键（Backspace）密码或单行、多行文本框除外
    forbidBackSpace:function (e) {
    var ev = e || window.event; //获取event对象
    var obj = ev.target || ev.srcElement; //获取事件源
    var t = obj.type || obj.getAttribute('type' ); //获取事件源类型
    //获取作为判断条件的事件类型
    var vReadOnly = obj.readOnly;
    var vDisabled = obj.disabled;
    //处理undefined值情况
    vReadOnly = (vReadOnly == undefined) ? false : vReadOnly;
    vDisabled = (vDisabled == undefined) ? true : vDisabled;
    //当敲Backspace键时，事件源类型为密码或单行、多行文本的，
    //并且readOnly属性为true或disabled属性为true的，则退格键失效
    var flag1 = ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea" ) && (vReadOnly == true || vDisabled == true);
    //当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效
    var flag2 = ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea" ;
    //判断
    if (flag2 || flag1) return false;
    //禁止后退键 作用于Firefox、Opera
    document.onkeypress = forbidBackSpace;
    //禁止后退键  作用于IE、Chrome
    document.onkeydown = forbidBackSpace; 
  }
  
});

    