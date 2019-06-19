import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function(){

	var defaults = { //默认值
		title : '',
		content : '',
		cancel : '',
		ok : '',
		handleCancle : null,
		handleOk : null
	};

	var MyComponent = Vue.extend(MessageBox);

	return function(opts) { //配置参数

		for(var attr in opts){
			defaults[attr] = opts[attr];
		}

		var vm = new MyComponent({
			el : document.createElement('div'), //vue的生命周期
			data : {
				title : defaults.title,
				content : defaults.content,
				cancel : defaults.cancel,
				ok : defaults.ok
			},
			methods : {
				handleCancel(){
					defaults.handleCancel && defaults.handleCancel.call(this);
					document.body.removeChild(vm.$el);
				},
				handleOk(){
					defaults.handleOk && defaults.handleOk.call(this);  //使用bind()未触发，使用call()可触发，这两个是什么，为什么
					document.body.removeChild(vm.$el);
				}
			}
		});

		document.body.appendChild(vm.$el);
	};

})();
