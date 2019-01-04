$(function() {getDetail($('.list-ul li:eq(0)').attr('id'));});
// 获取详情
function getDetail(o) {
	$.ajax({
		url : "detail.do",
		data : {
			"id" : o,
			"type":'0'
		},
		success : function(data) {
			$('.index-detail').show();	
			$('.index-detail').html(data);			
			$('.index-detail').animate({scrollTop:0},'slow');
			$('.list-ul li').siblings('[id="'+o+'"]').css("box-shadow","5px 5px 5px #fff");
			$('.list-ul li[id="'+o+'"]').siblings().css("box-shadow","0px 0px 0px #fff");
		},
		error : function(xhr, status, error) {		
			fiora.showGakki("詳細情報の取得に失敗する");
		}
	});

}
// 删除记录
function delData(o, m) {
	$.ajax({
		url : "delete.do",
		data : {
			"id" : o,
			"curType" : curType
		},
		success : function(data) {
			if (data > 0) {				
				fiora.showGakki("削除成功");
				getTotal();
			} else {				
				fiora.showGakki("失敗を削除する");
			}

		}
	});

}
// 编辑记录

function editData(o) {window.parent.document.getElementById("iframe").src = "Tkuang/addJsp.jsp?curType=update&param="+o;}

function showImg(o) {
	if (curType == "de")
		$(o).find('img:eq(0)').show();
	else
		$(o).find('img').show();
}