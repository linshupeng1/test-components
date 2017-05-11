//配置路径
require.config({
	paths: {
		jquery: 'jquery-1.11.1.min'
	}
});
//添加模块依赖
require(['jquery','window'], function($,win){
	$("#a").click(function(){
		new win.Window().alert("welcome!",function(){ alert("you click the button")},
		{
			width: 300,
			height: 150,
			y: 50
		});
	});
	$(window).resize(function(){
	});
})
