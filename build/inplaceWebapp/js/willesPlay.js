$(function() {
	var playVideo = $('video');
	var playPause = $('.play_btn'); //播放和暂停
	var playStart=$('.play_tip');//播放
	var currentTime = $('.timebar .currentTime'); //当前时间
	var duration = $('.timebar .duration'); //总时间
	var progress = $('.timebar .progress-bar'); //进度条
	var volumebar = $('.volumeBar .volumewrap').find('.progress-bar');
	playVideo[0].volume = 0.4; //初始化音量
	playPause.on('click', function(event) {
		event.stopPropagation();
		playControl();
	});
	playStart.on('click', function(event) {
		event.stopPropagation();
		playControl();
	});
	$(document).click(function() {
		$('.volumeBar').hide();
	});
	playVideo.on('loadedmetadata', function() {
		duration.text(formatSeconds(playVideo[0].duration));
	});

	playVideo.on('timeupdate', function() {
		currentTime.text(formatSeconds(playVideo[0].currentTime));
		progress.css('width', 100 * playVideo[0].currentTime / playVideo[0].duration + '%');
	});
	playVideo.on('ended', function() {
	    $('.play_tip').attr("src","../videoImg/play.png").fadeIn();
		playPause.attr("src","../videoImg/play.png");
	});
	
	window.onresize = function(){
if(!checkFull()){
//要执行的动作
$('.play_full_screen').attr("src","../videoImg/allScreen.png");
			$('#willesPlay .playControll').css({
				'bottom': -48
			}).removeClass('fullControll');
}

};

function checkFull(){
var isFull =  document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;

//to fix : false || undefined == undefined
if(isFull === undefined) isFull = false;
return isFull;
}
	
	$(window).keyup(function(event){
		event = event || window.event;
			if(event.keyCode == 32)playControl();
		event.preventDefault();
	});
	
	//阻止事件冒泡 
function cancelBubble(e) { //一般用在鼠标或键盘事件上
    if(e && e.stopPropagation) { //W3C取消冒泡事件  
        e.stopPropagation();
    } else { //IE取消冒泡事件   
        window.event.cancelBubble = true;
    }
}
	//全屏
	$('.play_full_screen').on('click', function(event) {
		if ($(this).attr("src").indexOf("unAllScreen")>-1) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozExitFullScreen) {
				document.mozExitFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
			$(this).attr("src","../videoImg/allScreen.png");
			$('#willesPlay .playControll').removeClass('fullControll');
		} else {
			if (playVideo[0].requestFullscreen) {
				playVideo[0].requestFullscreen();
			} else if (playVideo[0].mozRequestFullScreen) {
				playVideo[0].mozRequestFullScreen();
			} else if (playVideo[0].webkitRequestFullscreen) {
				playVideo[0].webkitRequestFullscreen();
			} else if (playVideo[0].msRequestFullscreen) {
				playVideo[0].msRequestFullscreen();
			}
			$(this).attr("src","../videoImg/unAllScreen.png");
			$('#willesPlay .playControll').css({
				'left': 0,
				'bottom': 0
			}).addClass('fullControll');
		}
		
		return false;
	});
	//音量
	$('.volume_img').on('click', function(e) {
		e = e || window.event;
		$('.volumeBar').toggle();
		e.stopPropagation();
	});
	$('.volumeBar').on('click mousewheel DOMMouseScroll', function(e) {
		e = e || window.event;
		volumeControl(e);
		e.stopPropagation();
		return false;
	});
	$('.timebar .progress').mousedown(function(e) {
		e = e || window.event;
		updatebar(e.pageX);
	});
	
	var updatebar = function(x) {
		var maxduration = playVideo[0].duration; //Video 
		var positions = x - progress.offset().left; //Click pos
		var percentage = 100 * positions / $('.timebar .progress').width();
		//Check within range
		if (percentage > 100) {
			percentage = 100;
		}
		if (percentage < 0) {
			percentage = 0;
		}

		//Update progress bar and video currenttime
		progress.css('width', percentage + '%');
		playVideo[0].currentTime = maxduration * percentage / 100;
	};
	//音量控制
	function volumeControl(e) {
		e = e || window.event;
		var eventype = e.type;
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
		var positions = 0;
		var percentage = 0;
		if (eventype == "click") {
			positions = volumebar.offset().top - e.pageY;
			percentage = 100 * (positions + volumebar.height()) / $('.volumeBar .volumewrap').height();
		} else if (eventype == "mousewheel" || eventype == "DOMMouseScroll") {
			percentage = 100 * (volumebar.height() + delta) / $('.volumeBar .volumewrap').height();
		}
		if (percentage < 0) {
			percentage = 0;
			$('.otherControl .volume_img').attr('src', '../videoImg/volume.png');
		}
		if (percentage > 50) {
			$('.otherControl .volume_img').attr('src', '../videoImg/volume-high.png');
		}
		if (percentage > 0 && percentage <= 50) {
			$('.otherControl .volume_img').attr('src', '../videoImg/volume-down.png');
		}
		if (percentage >= 100) {
			percentage = 100;
		}
		$('.volumewrap .progress-bar').css('height', percentage + '%');
		playVideo[0].volume = percentage / 100;
		e.stopPropagation();
		e.preventDefault();
	}

	function playControl() {
		
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
});

//秒转时间
function formatSeconds(value) {
	value = parseInt(value);
	var time;
	if (value > -1) {
		hour = Math.floor(value / 3600);
		min = Math.floor(value / 60) % 60;
		sec = value % 60;
		day = parseInt(hour / 24);
		if (day > 0) {
			hour = hour - 24 * day;
			time = day + "day " + hour + ":";
		} else time = hour + ":";
		if (min < 10) {
			time += "0";
		}
		time += min + ":";
		if (sec < 10) {
			time += "0";
		}
		time += sec;
	}
	return time;
}