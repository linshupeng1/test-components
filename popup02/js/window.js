//定义window模块，return暴露接口
//添加关闭按钮
//添加handler回调
//handler && handler() ==>> if(handler) {handler}
define(['jquery'], function($) {
	function Window() {
		
	};
	Window.prototype = {
		alert: function(content,handler) {
			var boundingBox = $('<div class="window_boundingBox"></div>');
			boundingBox.appendTo("body");
			boundingBox.html(content);
			var btn = $('<input type="button" value="确定" />');
			btn.appendTo(boundingBox);
			btn.click(function(){
				handler && handler();
				boundingBox.remove();
				return false;
			})
		},
		confirm: function() {},
		prompt: function() {}
	};
	return {Window : Window};
});