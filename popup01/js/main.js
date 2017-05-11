//配置路径
require.config({
	paths: {
		jquery: 'jquery-1.11.1.min'
	}
});
//添加模块依赖
require(['jquery','window'], function($,win){
	$("#a").click(function(){
		new win.Window().alert("welcome!");
	})
})
