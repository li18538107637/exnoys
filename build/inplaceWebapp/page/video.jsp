<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta charset="utf-8">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link rel="stylesheet" href="../css/reset.css">
<link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
<link rel="stylesheet" href="../css/willesPlay.css">
<link rel="stylesheet" href="../css/video.css">
<script type="text/javascript" src='../js/jquery-1.11.3.min.js'></script>
<script type="text/javascript" src='../js/willesPlay.js'></script>
<style>
<!-- 
::-webkit-scrollbar{width:0px;}
 -->
</style>
<script>
 function playControls(o,num) {
	 $('.video_li:eq('+num+')').siblings().css("border","solid 0px #fff");
	 $('.video_li:eq('+(num)+')').css("border","solid 3px #fff");
	var playVideo = $('video');
	 playVideo.attr("src",o);
	var playPause = $('.play_btn'); //播放和暂停
	if (playVideo[0].paused) {
			playPause.attr("src","../videoImg/pause.png");
			playVideo[0].play();
			$('.play_tip').fadeOut();
		} else {
			playPause.attr("src","../videoImg/play.png");
			playVideo[0].pause();
			$('.play_tip').fadeIn();
		}
	} 

var  videoListName=['鸡年限定-三国系列','AOA 怦然心动','T-ara suger free','T-ara  No.9','beautiful sniper'],
     videoListUrl=['../../video/jnxd.mp4','../../video/heart attack.Mp4','../../video/suger free.mp4','../../video/no.9.mp4','../../video/T-ara Beautiful Sniper.mp4'],
	 videoListImgUrl=['../videoImg/jinianxianding.png','../videoImg/heartattack.png','../videoImg/suggerfree.png','../videoImg/no-9.png','../videoImg/butifulsniper.png'];
	 
	
$(function(){
	var li='';
	for(var i=0;i<videoListName.length;i++){
		li+='<li class="video_li" style="background: url(\''+videoListImgUrl[i]+'\') no-repeat;background-size: 100% 100%;"  '+
		' onmouseover="$(this).find(\''+'img'+'\').show();" onmouseout="$(this).find(\''+'img'+'\').hide();"> '+
		' <span class="video_span">'+videoListName[i]+'</span> '+
		' <img src="../videoImg/play.png" class="li_play" hidden '+ 
		' onclick="playControls(\''+videoListUrl[i]+'\',\''+i+'\');" '+
		' onmouseover="$(this).css(\''+'background'+'\',\''+'#415065'+'\');" onmouseout="$(this).css(\''+'background'+'\',\''+''+'\');"/> '+
		' </li>' ;	
	}
	$('.video_ul').append(li);
	document.getElementById('playVideo').src=videoListUrl[0];
});

</script>
</head>

<body>
<div class='search_div'></div>
	<div class='index-list'>
		<div id="list_li" style="overflow-y: scroll;height: 100%;"><ul class="video_ul"></ul></div>
	</div>
	<div class='index-detail' >
	<div class="playContent">
		<video width="100%" height="92.2%" id="playVideo" >
			<!-- <source src="" type="video/mp4"></source> -->
		</video>
		<img src="../videoImg/play.png"  class="play_tip"  id="playBigBtn" />
	</div>
	<div class="playControll">
		<img src="../videoImg/play.png"  class="play_btn" id="playBtn"/>
		<div class="timebar">
			<span class="currentTime">0:00:00</span>
			<div class="progress">
				<div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
				</div>
			<span class="duration">0:00:00</span>
		</div>
		<div class="otherControl">
		    <img src="../videoImg/volume.png"  class="volume_img" />					
			<img src="../videoImg/allScreen.png"  class="play_full_screen" />
			<div class="volumeBar">
					<div class="volumewrap">
						<div class="progress">
						<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 7px;height: 40%;"></div>
					</div>
						</div>
				</div>
		</div>
 </div>
</div>
</body>
</html>
