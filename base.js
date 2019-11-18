/**
 * @description 构造基础
 * @class
 */
class Base {
	/**
	 * @description 构造函数
	 * @param {String} dir
	 */
	constructor() {}
}

/**
 * 回调函数(中控)
 * @param {String} name 函数名
 * @param {Object} param1
 * @param {Object} param2
 * @param {Object} param3
 * @return {Object} 任意值
 */
Base.prototype.func = function(name, param1, param2, param3) {
	var funObj = this[name];
	if (funObj) {
		if (param1 === undefined) {
			return funObj()
		} else if (param2 === undefined) {
			return funObj(param1)
		} else if (param3 === undefined) {
			return funObj(param1, param2)
		} else {
			return funObj(param1, param2, param3);
		}
	} else {
		return null;
	}
};

/**
 * 事件驱动函数
 * @param {String} name
 * @param {Object} param
 */
Base.prototype.events = function(name, param) {
	var func = this[name];
	if (func) {
		return func(param);
	} else {
		return undefined
	}
};

/**
 * 增
 * @param {Object} param
 */
Base.prototype.add = function(param) {
	var pm = this.events('add_before', param) || param;
	var msg = this.events('add_check', pm);
	var ret;
	if (!msg) {
		ret = this.events('add_main', pm);
	}
	return this.events('add_after', pm, ret) || ret;
};

/**
 * 删
 * @param {Object} param
 */
Base.prototype.del = function(param) {
	var pm = this.events('del_before', param) || param;
	var msg = this.events('del_check', pm);
	var ret;
	if (!msg) {
		ret = this.events('del_main', pm);
	}
	return this.events('del_after', pm, ret) || ret;
};

/**
 * 改
 * @param {Object} param
 */
Base.prototype.set = function(param) {
	var pm = this.events('set_before', param) || param;
	var msg = this.events('set_check', pm);
	var ret;
	if (!msg) {
		ret = this.events('set_main', pm);
	}
	return this.events('set_after', pm, ret) || ret;
};

/**
 * 查
 * @param {Object} param
 */
Base.prototype.get = function(param) {
	var pm = this.events('get_before', param) || param;
	var msg = this.events('get_check', pm);
	var ret;
	if (!msg) {
		ret = this.events('get_main', pm);
	}
	return this.events('get_after', pm, ret) || ret;
};

/**
 * 更新
 * @param {Object} param
 */
Base.prototype.update = function(param) {
	var pm = this.events('update_before', param) || param;
	var msg = this.events('update_check', pm);
	var ret;
	if (!msg) {
		ret = this.events('update_main', pm);
	}
	return this.events('update_after', pm, ret) || ret;
};

/**
 * 加载
 * @param {Object} param
 */
Base.prototype.load = function(param) {
	var pm = this.events('load_before', param) || param;
	var msg = this.events('load_check', pm);
	var ret;
	if (!msg) {
		ret = this.events('load_main', pm);
	}
	return this.events('load_after', pm, ret) || ret;
};

/**
 * 保存
 * @param {Object} param
 */
Base.prototype.save = function(param) {
	var pm = this.events('save_before', param) || param;
	var msg = this.events('save_check', pm);
	var ret;
	if (!msg) {
		ret = this.events('save_main', pm);
	}
	return this.events('save_after', pm, ret) || ret;
};

/**
 * 排序
 * @param {Object} param
 */
Base.prototype.sort = function(param) {
	var pm = this.events('sort_before', param) || param;
	var msg = this.events('sort_check', pm);
	var ret;
	if (!msg) {
		ret = this.events('sort_main', pm);
	}
	return this.events('sort_after', pm, ret) || ret;
};

/**
 * 运行
 * @param {Object} param
 */
Base.prototype.run = function(param) {
	var pm = this.events('run_before', param) || param;
	var msg = this.events('run_check', pm);
	var ret;
	if (!msg) {
		ret = this.events('run_main', pm);
	}
	return this.events('run_after', pm, ret) || ret;
};

/**
 * 初始化
 * @param {Object} param
 */
Base.prototype.init = function(param) {
	var pm = this.events('init_before', param) || param;
	var msg = this.events('init_check', pm);
	var ret;
	if (!msg) {
		ret = this.events('init_main', pm);
	}
	return this.events('init_after', pm, ret) || ret;
};

module.exports = Base;
