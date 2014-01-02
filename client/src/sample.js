var Sample = (function(global){

  function Sample(){}

  Sample.prototype.init = function(){
    this._privateFunc();
    return "Welcome to TDD Sandbox!";
  };

  Sample.prototype._privateFunc = function(){}

  return Sample;

})(window);