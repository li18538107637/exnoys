if(master_login){
    alert('master_login冲突了');
}else{
  var  master_login={};
}

master_login={
	openTheAudio:function(o){ //声音控制
	var nowTitle =$(o).attr('title');
	if(nowTitle=="Open the sound"){
		document.getElementById("playVideo").muted=false;
		$(o).attr('src','loginImg/audio.png');
		$(o).attr('title','turn sound off');
	}else{
		document.getElementById("playVideo").muted=true;
		$(o).attr('title','Open the sound'); 
		$(o).attr('src','loginImg/audio2.png');
	}
	},
	enterLogin:function(){//回车登录
	var keyCode = event.keyCode;
	if (keyCode == "13")
	    document.getElementsByTagName('form')[0].submit();
	}	
}

window.onload=function(){
	 var playVideo = document.getElementById("playVideo");
	if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
		
	}else{
		//playVideo.src='../video/login.mp4'; 
	}
	setTimeout(function(){//由于视频加载，所以延迟显示
		$(".login_box").fadeIn('3000');
		$(".cr_div").fadeIn('2000');
		$(".audio_img").fadeIn('2000');	
	},100);	

	window.onresize = function(){//窗口变化时，视频窗口改变
		playVideo.width = window.innerWidth;
		playVideo.height=window.innerHeight;
	}
document.getElementById('username').addEventListener('focus',
function(event){event.target.removeAttribute('readonly');event.target.value='';$(event.target).attr('type','password');},false);
document.getElementById('audioImg').addEventListener('click',function(event){master_login.openTheAudio(event.target);},false);
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
var gakkiConfirm=document.getElementById('login_box');
var gakkiConfirmWidth=gakkiConfirm.currentStyle?gakkiConfirm.currentStyle['width']:getComputedStyle(gakkiConfirm,null)['width'];
var gakkiConfirmHeight=gakkiConfirm.currentStyle?gakkiConfirm.currentStyle['height']:getComputedStyle(gakkiConfirm,null)['height'];
gakkiConfirm.style.left=(vWidth-parseInt(gakkiConfirmWidth.replace('px','')))/2+'px';
gakkiConfirm.style.top=(vHeight-parseInt(gakkiConfirmHeight.replace('px','')))/2-70+'px';
}	
//login.jsp必须是顶层窗口
if (window != top) {
    top.location.href = location.href;
}



