//配置路径
require.config({
	paths: {
		jquery: 'jquery-1.11.1.min'
	}
});
//添加模块依赖
require(['jquery','window'], function($,win){
	$("#a").click(function(){
		new win.Window().alert({
			title   : "消息",
			content : "welcome!",
			width   : 300,
			height  : 150,
			y       : 80,
			hasCloseBtn : true,
			textForAlertBtn : 'OK',
			skinClassName  :  'winSkin_a',
			handlerForAlert : function(){ alert("hello,you click the alertBtn")},
			handlerForClose : function(){ alert("hello,you click the closeBtn")}
		});
	});
});
