//功能列表数组
var menuTopArray=['基础与框架','样式与插件','数据库','各类工具','系统设置'];
var menuMidArray=[
['基础知识','后端框架']
,['页面样式','插件封装','前端框架']
,['mysql','oracle','sqlserver']
,['开发工具','服务器','项目管理','版本控制']
,['登录账号','锁屏密码','视频娱乐']
];

window.onload=function(){                                                                                      
	for(var i in  menuTopArray){
		if(i==0){		
			document.getElementById('menu_ul').innerHTML+="<li class='top_li' style='border-top-right-radius:4px;border-top-left-radius:4px' id='topLi"+i
			+"'  openFlag='0'   onclick=\"openMidMenu('"+"topLi"+i+"','"+i+"')\"><div class='top_li_div'><img class='li_img' src='images/t"+i
			+".png' />"+menuTopArray[i]+"</div>"+creatMidUl(i)+"</li>";
		}else if (i==menuTopArray.length-1){	
			document.getElementById('menu_ul').innerHTML+="<li class='top_li' style='border-bottom-right-radius:4px;border-bottom-left-radius:4px' id='topLi"+i	
			+"'  openFlag='0'   onclick=\"openMidMenu('"+"topLi"+i+"','"+i+"')\"><div class='top_li_div'><img class='li_img' src='images/t"+i	
			+".png' />"+menuTopArray[i]+"</div>"+creatMidUl(i)+"</li>";
		}else{
			document.getElementById('menu_ul').innerHTML+="<li class='top_li' id='topLi"+i+"'  openFlag='0'    onclick=\"openMidMenu('"+"topLi"+i+"','"+i	
			+"')\"><div class='top_li_div'><img class='li_img' src='images/t"+i
			+".png' />"+menuTopArray[i]+"</div>"+creatMidUl(i)+"</li>";
		}
	}
	
	$(document.getElementById("topLi0")).bind('click',openMidMenu("topLi0",0),false);//默认点击第一个
	$(document.getElementById("0mid_li0")).bind('click',openList('00'),false);
	var vHeight = function() {
		if (window.innerHeight != undefined) {
			return window.innerHeight;
		} else {
			var B = document.body, D = document.documentElement;
			return Math.max(D.clientHeight, B.clientHeight);
		}
	}();
	var vWidth = function() {
		if (window.innerWidth != undefined) {
			return window.innerWidth;
		} else {
			var B = document.body, D = document.documentElement;
			return Math.max(D.clientWidth, B.clientWidth);
		}
	}();
var gakkiConfirm=document.getElementById('gakki-confirm');
var gakkiConfirmWidth=gakkiConfirm.currentStyle?gakkiConfirm.currentStyle['width']:getComputedStyle(gakkiConfirm,null)['width'];
var gakkiConfirmHeight=gakkiConfirm.currentStyle?gakkiConfirm.currentStyle['height']:getComputedStyle(gakkiConfirm,null)['height'];
gakkiConfirm.style.left=(vWidth-parseInt(gakkiConfirmWidth.replace('px','')))/2+'px';
gakkiConfirm.style.top=(vHeight-parseInt(gakkiConfirmHeight.replace('px','')))/2-70+'px';

var menuImg=document.getElementById('menuImg');
var menuList=document.getElementById('content_div');
 menuImg.addEventListener('click',function(){
var src=menuImg.src;
if(src.indexOf('open_menu')>-1){
menuList.style.transform="perspective(700px) scale(0.5) translateX(-16.66%) rotateY(25deg)";
menuImg.src="img/back_content.png";
}else if(src.indexOf('back_content')>-1){
menuList.style.transform="perspective(800px) scale(1) translateX(0) rotateY(0)";
menuImg.src="img/open_menu.png";
}

},false);
}

function creatMidUl(o){
	fiora.cancelBubble(event);
	var midUl="<ul class='mid_ul'  id='mid_ul"+o+"'  >";
	for(var i=0;i<menuMidArray[o].length;i++){
		midUl+="<li class='mid_li' id='"+o+"mid_li"+i+"' onClickFlag='false' onmouseover=\"changeColorOver('"+o+"mid_li"+i+"')\" onmouseout=\"replyColorOut('"+o
		+"mid_li"+i+"')\"   onclick=\"openList('"+o+""+i+"')\"><img class='li_img _mid' src='images/"+o+"m"+i+".png' />"+menuMidArray[o][i]+"</li>";
	}
	midUl+="</ul>";
	return midUl;
}
function uniqueSelected(m){
	var  topLiList = document.querySelectorAll('li[class="top_li"]');
	for(var i=0;i<topLiList.length;i++){
		if(m==i){
			topLiList[i].style.color="#b63b4d";
			document.getElementById("mid_ul"+i).style.display="block";
			topLiList[i].setAttribute("openFlag","1");
		}else{
			topLiList[i].style.color="#4D4D4D";
			document.getElementById("mid_ul"+i).style.display="none";
			topLiList[i].setAttribute("openFlag","0");
		}
	}
}

function changeColorOver(o){document.getElementById(o).style.background="rgba(65,80,101,.7)";}
function replyColorOut(o){
	if(document.getElementById(o).getAttribute("onClickFlag")==="false")
    document.getElementById(o).style.background="rgba(65,80,101,1)";
}
function openMidMenu(o,m){
	var curTopLi=document.getElementById(o);
	if(curTopLi.getAttribute("openFlag")==="0"){
	     uniqueSelected(m);
	}else{
		curTopLi.style.color="#4D4D4D";
		document.getElementById("mid_ul"+m).style.display="none";
		curTopLi.setAttribute("openFlag","0");
	}
}

$(function() {
	// 设定窗口大小
	document.getElementById('content_div').setAttribute("style","width:" + window.outerWidth + "px;height:" + window.innerHeight+ "px;position:relative;");
	$(window).unbind('beforeunload');
	window.onbeforeunload = null;
});
//弹出框 
function masterConfirm(str){
	$("#gakki-confirm").fadeIn(500);
	$('.confirm-span').html(str);
}

//弹框点击处理
function confirmClick(num){
	if(num==="0"){
		functionMap[functionKey]();
     }else{ 
	   $("#gakki-confirm").fadeOut(500);
	   $('.confirm-span').html('');
	}
}
//方法map
var  functionMap={},functionKey='';

//锁屏
function openLock(o){document.getElementById('lock_div').style.display='none';document.getElementById('menuImg').style.display='block';}
//退出
function exit(){   
	masterConfirm('确定要退出吗');
	functionKey='exit';
	functionMap[functionKey]=function(){$.ajax({
		url : "exit.do",
		success:function(){
			window.location.href="login.jsp";
		},
		error : function(xhr, status, error) {
			fiora.showGakki("退出当前系统失败   o(╥﹏╥)o");
		}
	})};
}

// 当调整浏览器窗口的大小时，发生 resize 事件
$(window).resize(function() {
	document.getElementById('content_div').setAttribute("style",
					"width:" + window.outerWidth + "px;height:"+ window.innerHeight + "px;position:relative;");
});

// 菜单span点击
function openList(o) {	
	$('li [id="'+o.substr(0,1)+"mid_li"+o.substr(1)+'"]').siblings().attr("onClickFlag",'false');
	$('li [id="'+o.substr(0,1)+"mid_li"+o.substr(1)+'"]').siblings().css("box-shadow", "0px 0px 0px rgba(255,255,255,1)");
	$('li [id="'+o.substr(0,1)+"mid_li"+o.substr(1)+'"]').siblings().css("background","rgba(65,80,101,1)");
	$('li').siblings('[id="'+o.substr(0,1)+"mid_li"+o.substr(1)+'"]').css("box-shadow", "2px 0px 2px rgba(255,255,255,1)");
	$('li').siblings('[id="'+o.substr(0,1)+"mid_li"+o.substr(1)+'"]').css("background","rgba(65,80,101,.7)");
	$('li').siblings('[id="'+o.substr(0,1)+"mid_li"+o.substr(1)+'"]').attr("onClickFlag",'true');
	fiora.cancelBubble(event);
	switch (o) {
	case "42":
		document.getElementById("iframe").src = "page/video.jsp";
		break;
	default:
		document.getElementById("iframe").src = "page/content.jsp?curType="+o;
	}

}

	var lockPassword='master';
	var pwdArray=['1','1','1','1','1','1'];
	var pwdStr="";
	function intoThePwdArray(index,obj){
		pwdStr="";
		pwdArray[index]=obj.value;
		pwdStr=(function(){for(var k in pwdArray){pwdStr+=pwdArray[k];};return pwdStr;})();
		if(pwdStr=="master"){
		document.getElementById('lock_img').src='img/unlock.png';
		setTimeout(function(){document.getElementById('lock_div').style.display='none';},300);
		 
			 $(window).bind('beforeunload',function(){
	            return '';
	      });
		}
	}
	function lockPage(){
		document.getElementById('lock_div').style.display='block';
		document.getElementById('menuImg').style.display='none';
		$(window).unbind('beforeunload');
		window.onbeforeunload = null;	
	}
