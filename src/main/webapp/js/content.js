var startPage=0,
curType=window.parent.document.getElementById("iframe").src.substr(window.parent.document.getElementById("iframe").src.lastIndexOf("=")+1),
total = 0,
isOpen='0';
//点击新增
function addPage() {
	window.parent.document.getElementById("iframe").src = "Tkuang/addJsp.jsp?curType="+curType;
}

// 进入页面请求数据
$(function() {
	if(curType=="de"){isOpen='1';curType='';}
	if (curType.indexOf(",") > 0) {curType = curType.split(",")[2].substr(0, 2);}
	getTotal();// 查询总页数
	$(".page_div span").each(function(j, k) {
		k.addEventListener('click', function() {
			var curPage = document.getElementById('cur-page');
			if (j == "0") {// 首页
				if (startPage == 0) {
					fiora.showGakki("もうトップページです ");
				} else {
					startPage = 0;
					getQueryList();
					curPage.innerHTML = "1";
				}

			} else if (j == 1) {// 上一页
				if (startPage == 0) {
					fiora.showGakki("もうトップページです");
					curPage.innerHTML = "1";
				} else if (startPage == 1) {
					startPage -= 1;
					curPage.innerHTML = "1";
					getQueryList();
				} else {// 下一页
					startPage -= 1;
					curPage.innerHTML = startPage;
					getQueryList();
				}

			} else if (j == 3) {// 下一页
				if ((startPage + 1) == total) {
					fiora.showGakki("もう尾のページだ");
				} else {
					startPage += 1;
					getQueryList();
					curPage.innerHTML = startPage + 1;
				}

			} else if (j == 4) {// 尾页
				if ((startPage + 1) == total) {
					fiora.showGakki("もう尾のページだ ");
				} else {
					startPage = total - 1;
					getQueryList();
					curPage.innerHTML = startPage + 1;
				}

			}

		}, false);
	});
});

	// 点击页发送请求
function getTotal() {
	$.ajax({
		url : "total.do",
		data : {
			isOpen:isOpen,
			curType :curType,
			searchVal:$('.search_input').val()
		},
		type : "post",
		success : function(data) {
				
			if(data==0){
				$('.page_div').hide();fiora.showGakki("もっとデータがない");
				$(".ghost").show();
			}else{
				total = Math.ceil(data / 8);$('.page_div').show();$(".ghost").hide();getQueryList();
			}
		},
		error : function(xhr, status, error) {			
			fiora.showGakki("総記録数の取得に失敗した");
		}
	});
}
//点击页发送请求
function getQueryList() {
	$.ajax({
		url : "list.do",
		data : {
			isOpen:isOpen,
			curType : curType,
			startPage : startPage,
			searchVal:$('.search_input').val()
			},
		type : "post",
		success : function(data) {				
				$("#list_li").html(data);				
			},
		error : function(xhr, status, error) {				
			fiora.showGakki("リスト取得失敗");								
		}
	});
}