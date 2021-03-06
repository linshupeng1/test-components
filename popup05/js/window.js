/*
* 定义window模块，return暴露接口
* 添加关闭按钮
* 添加handler回调
* handler && handler() ==>> if(handler) {handler();}
* this.config.x || (window.innerWidth - this.config.width) / 2  ==>> if(this.config.x ==false) { (window.innerWidth - this.config.width) / 2}
* alert()参数统一config传入
* 定制弹框标题
*/
define(['jquery'], function($) {
	function Window() {
		//config是个字典格式，这里（构造函数中）用于设置默认值
		this.config = {
			title: '系统消息',
			width: 500,
			height: 300,
			content: '',
			handler: null
		};
	};
	Window.prototype = {
		//第三个参数，配置也是字典格式
		//参数统一用字典格式传
		alert: function(config) {
			//将两个字典进行比较，如果有同名的，后面的键名将替代同名的前面的
			var config =  $.extend(this.config,config);
			var boundingBox_html = '';
				boundingBox_html += '<div class="window_boundingBox">';
					boundingBox_html += '<div class="window_header">'+config.title+'</div>';
					boundingBox_html += '<div class="window_body">'+config.content+'</div>';
					boundingBox_html += '<div class="window_footer"><input type="button" value="确定" /></div>';
				boundingBox_html += '</div>';
			var boundingBox = $(boundingBox_html);
			boundingBox.appendTo("body");
			
			var btn = boundingBox.find(".window_footer input");
			//点击事件
			btn.click(function(){
				config.handler && config.handler();
				boundingBox.remove();
				return false;
			});
			
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