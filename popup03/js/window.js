//定义window模块，return暴露接口
//添加关闭按钮
//添加handler回调
//handler && handler() ==>> if(handler) {handler();}
//this.config.x || (window.innerWidth - this.config.width) / 2  ==>> if(this.config.x ==false) { (window.innerWidth - this.config.width) / 2}
define(['jquery'], function($) {
	function Window() {
		//config是个字典格式，这里（构造函数中）用于设置默认值
		this.config = {
			width: 500,
			height: 300
		};
	};
	Window.prototype = {
		//第三个参数，配置也是字典格式
		alert: function(content,handler,config) {
			var boundingBox = $('<div class="window_boundingBox"></div>');
			boundingBox.appendTo("body");
			boundingBox.html(content);
			
			var btn = $('<input type="button" value="确定" />');
			btn.appendTo(boundingBox);
			//点击事件
			btn.click(function(){
				handler && handler();
				boundingBox.remove();
				return false;
			});
			//将两个字典进行比较，如果有同名的，后面的键名将替代同名的前面的
			$.extend(this.config,config);
			//设置弹窗的长宽和位置
			boundingBox.css({
				width: this.config.width +  'px',
				height: this.config.height +  'px',
				left: (this.config.x || (window.innerWidth - this.config.width) / 2) + 'px',
				top: (this.config.y || (window.innerHeight - this.config.height) / 2) + 'px',
			});
		},
		confirm: function() {},
		prompt: function() {}
	};
	return {Window : Window};
});