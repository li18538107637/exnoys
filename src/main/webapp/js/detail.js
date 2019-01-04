//图片最宽880px
$(".content-detail img").each(function(j,k){$(k).css("max-width","880px");});
//滚动出现top按钮
$("#content-detail").scroll(function() { 
	$(".top_btn").show();
	var scrollTop = document.getElementById('content-detail').scrollTop;
	if(scrollTop==0){$(".top_btn").hide();}	
});
