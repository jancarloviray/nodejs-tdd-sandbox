function TDDSandbox(){}

TDDSandbox.prototype.init = function(){
	this._privateFunc();
	return "Welcome to TDD Sandbox!";
};

TDDSandbox.prototype._privateFunc = function(){}

if(module && module.exports) module.exports = TDDSandbox;