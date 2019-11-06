const Base = require('./Base');


/**
 * @description 项目
 * @class
 */
class Item extends Base {
	/**
	 * @description 构造函数
	 * @param {String} filename 文件名
	 */
	constructor(filename) {
		// 是否同步
		this.sync = false;
		// 文件路径
		this.filename = filename;
		// 配置
		this.config = {
			/**
			 * 名称, 由中英文和下“_”组成, 用于卸载接口 例如: demo
			 */
			"name": "",
			/**
			 * 标题, 介绍作用
			 */
			"title": "",
			/**
			 * 描述, 用于描述该有什么用的
			 */
			"description": "",
			/**
			 * 文件路径, 当调用函数不存在时，会先从文件中加载
			 */
			"func_file": "./index.js",
			/**
			 * 回调函数名 用于决定调用脚本的哪个函数
			 */
			"func_name": "",
			/**
			 * 排序
			 */
			"sort": 10,
			/**
			 * 开关, true表示开启，false表示关闭
			 */
			"switch": true
		};
	}
}

/**
 * 模型
 * @param {Object} param
 */
Item.prototype.model = function(param) {
	var m = {
		name: "",
		title: "",
		description: ""
	};
	if (param) {
		return Object.assign(m, param);
	} else {
		return m;
	}
};

/**
 * 增
 * @param {Object} param
 */
Item.prototype.add_main = function(param) {
	$.push(this.config, param, true);
};

/**
 * 删
 * @param {Object} param
 */
Item.prototype.del_main = function(param) {
	for (var k in param) {
		if (typeof(param[k])) {

		}
	}
};

/**
 * 改
 * @param {Object} param
 */
Item.prototype.set_main = function(param) {
	$.push(this.config, param);
};

/**
 * 查
 * @param {Object} param
 */
Item.prototype.get_main = function(param) {

};

/**
 * 更新
 * @param {Object} param
 */
Item.prototype.update_main = function(param) {
	this.config = {};
	this.load();
	this.sort();
};

/**
 * 加载
 * @param {Object} param
 */
Item.prototype.load_main = function(param) {
	if (typeof(param) == "object") {
		
	}
	var file = this.fullname.loadText();
	var config = file;
	$.push(this.config, param);
};

/**
 * 保存
 * @param {Object} param
 */
Item.prototype.save_main = function(param) {
	this.fullname.save($.toJson(this.config, true));
};

/**
 * @description 加载配置对象
 * @param {Object} cg 配置对象
 */
Item.prototype.loadObj = function(cg) {
	$.push(this.config, cg, true);
	var f = this.config.func_file;
	if (f) {
		var file = f.fullname(this.dir);
		if (file.hasFile()) {
			this.remove_module(file);
			var cs = require(file);
			if (cs) {
				var name = this.config.func_name;
				if (name) {
					this.main = cs[name];
				} else {
					$.push(this, cs, true);
				}
			}
		} else {
			this.new_script(file);
		}
	}
};

/**
 * @description 加载配置文件
 * @return {Object} 配置对象
 */
Item.prototype.loadFile = function(file) {
	var obj;
	var f = file.fullname();
	this.filename = f;
	var text = f.loadText();
	if (text) {
		obj = text.toJson();
	} else {
		this.new_config(f);
	}
	return obj;
};


/**
 * @description 新建配置
 * @param {String} file
 */
Item.prototype.new_config = function(file) {
	var fl = this.dir_base + "/config.tpl.json";
	fl.copyFile(file);
};

/**
 * @description 新建脚本
 * @param {String} file
 */
Item.prototype.new_script = function(file) {
	var fl = this.dir_base + "/script.js";
	if (fl.hasFile()) {
		fl.copyFile(file);
	}
};

/**
 * @description 移除模块
 * @param {Object} module
 */
Item.prototype.remove_module = function(module) {
	var path = require.resolve(module);
	delete require.cache[path];
};

module.exports = Item;
