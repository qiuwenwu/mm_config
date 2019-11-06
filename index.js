const Base = require('./Base');
const Item = require('./item');

/**
 * @description 项目
 * @class
 */
class Index extends Base {
	/**
	 * @description 构造函数
	 * @param {String} dir
	 * @param {String} scope
	 */
	constructor(dir, scope) {
		// 文件路径
		this.filename = "";
		// 配置列表
		this.list = [];
		// 项目
		this.item = item;
	}
}

/**
 * 增
 * @param {Object} param
 */
Index.prototype.add_main = function(param) {
	if (param.constructor == this.item.constructor) {
		this.list.push(param);
	} else if (param.filename && param.config) {
		var o = new this.item();
		this.list.push();
	}
};

/**
 * 删
 * @param {Object} param
 */
Index.prototype.del_main = function(param) {
	var lt = this.list;
	var query = {};
	if (typeof(param) == 'string') {
		query.name = param;
	} else {

	}
	for (var i = lt.length - 1; i > 0; i--) {
		var cg = lt[i].config;
		if ($.as(cg, query)) {

		}
	}
};

/**
 * 改
 * @param {Object} param
 */
Index.prototype.set_main = function(param) {
	this.list.del({}, param);
};

/**
 * 查
 * @param {Object} param
 */
Index.prototype.get_main = function(param) {

};

/**
 * 更新
 * @param {Object} param
 */
Index.prototype.update_main = function(param) {

};

/**
 * 加载
 * @param {Object} param
 */
Index.prototype.load_main = function(param) {

};

/**
 * 保存
 * @param {Object} param
 */
Index.prototype.save_main = function(param) {

};

/**
 * 排序
 * @param {Object} param
 */
Index.prototype.sort_main = function(param) {

};

/**
 * 运行
 * @param {Object} param
 */
Index.prototype.run_main = function(param) {

};

module.exports = list;
