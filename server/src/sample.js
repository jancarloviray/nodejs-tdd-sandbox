function Sample(){}

Sample.prototype.init = function(){
	this._privateFunc();
	return "Welcome to TDD Sandbox!";
};

Sample.prototype._privateFunc = function(){}

module.exports = Sample;