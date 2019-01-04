CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [                  	                        
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];
	config.filebrowserImageUploadUrl="/marry/attach?useForAttach=true&method=upload&way=html5";// //待会要上传的action或servlet
	config.removeButtons = 'Underline,Subscript,Superscript';

	config.format_tags = 'p;h1;h2;h3;pre';
    
	config.removeDialogTabs = 'image:advanced;link:advanced';
	//当提交包含有此编辑器的表单时，是否自动更新元素内的数据
	config.autoUpdateElement = true;
	CKEDITOR.config.skin = 'v2';
	
};

