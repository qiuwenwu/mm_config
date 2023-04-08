const JSON5 = require('json5')
const {
	writeFileSync,
	readFileSync
} = require('fs');

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
		var str = readFileSync(_jsonFile, 'utf-8');
		if (!str) {
			_config = {};
		} else {
			_config = JSON5.parse(str);
		}
	}
	return new Proxy(_config, {
		set: function(obj, prop, value) {
			obj[prop] = value;
			if (_jsonFile) {
				writeFileSync(_jsonFile, JSON.stringify(obj, null, 4), 'utf-8');
			}
			return true
		}
	});
}