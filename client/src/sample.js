function TDDSandbox(){}

TDDSandbox.prototype.init = function(){
	this._privateFunc();
	return "Welcome to TDD Sandbox!";
};

TDDSandbox.prototype._privateFunc = function(){}