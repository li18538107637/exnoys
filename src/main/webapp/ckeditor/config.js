CKEDITOR.editorConfig = function( config ) {
	

	config.toolbar = 'Full';
	 
	config.toolbar_Full =
	[
	        { name: 'document', items : [ 'Source']},//,'-','NewPage','DocProps','Preview','Print','-','Templates' ] },
	        { name: 'clipboard', items : [ 'Cut','Copy','Paste']},//,'PasteText','PasteFromWord','-','Undo','Redo' ] },
	        //{ name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
	       // { name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 
	        //'HiddenField' ] },
	     //   '/',//换行
	        { name: 'basicstyles', items : [ 'Bold','Italic','Underline','colors']},//,'Strike','Subscript','Superscript','-','RemoveFormat' ] },
	        { name: 'paragraph', items : [
	         //'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv','-',
	        'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'
	        //,'-','BidiLtr','BidiRtl' 
	        ] },
	      //  { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
	       
	       // '/',
	        { name: 'colors' },
	        { name: 'styles', items : [ 
	                                    //'Styles','Format',
	                                    'Font','FontSize' ] },
	        { name: 'insert', items : [ 'Image',
		                                   // 'Flash','Table','HorizontalRule',
		                                   // 'Smiley'
		                                   // ,'SpecialChar','PageBreak','Iframe'
		                                    ] },
	       // { name: 'colors', items : [ 'TextColor','BGColor' ] },
	        //{ name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
	];
	config.filebrowserImageUploadUrl="uploadImg.do";// //待会要上传的action或servlet
	//config.removeButtons = 'Underline,Subscript,Superscript';
   config.extraPlugins='colorbutton';
	config.format_tags = 'p;h1;h2;h3;pre';
    
	
	//当提交包含有此编辑器的表单时，是否自动更新元素内的数据
	config.autoUpdateElement = true;
	CKEDITOR.config.skin = 'kama';
	config.width = 700; //宽度
        config.height = 500; //高度
        config.forcePasteAsPlainText =false;//不去除
        //对P标签自动进行格式化 plugins/format/plugin.js
        config.format_p = { element : 'p', attributes : { class : 'normalPara' } };
};

