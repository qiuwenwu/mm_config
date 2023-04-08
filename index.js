require("mm_expand");

/**
 * 重够配置，同步保存
 * @param {Object} _config 配置对象
 * @param {String} _jsonFile 配置文件
 */
module.exports = function(_config, _jsonFile) {
	if (!_jsonFile) {
		_jsonFile = this.filename;
	}
	if (!_config) {
		_config = _jsonFile.loadJson() || {};
	}
	return new Proxy(_config, {
		set: function(obj, prop, value) {
			obj[prop] = value;
			if (_jsonFile) {
				_jsonFile.saveJson(obj);
			}
			return true
		}
	});
}