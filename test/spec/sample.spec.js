var should = chai.should();

describe('test',function(){
	it('should work',function(){
		(1+1).should.equal(2);
		[1,2,3].should.deep.equal([1,2,3]);
	});
	it('should throw an error',function(){
		(function(){
			throw new Error();
		}).should.throw(Error);
	});
});

describe('TDDSandbox',function(){
	var sandbox;
	beforeEach(function(){
		sandbox = new TDDSandbox();
	});
	afterEach(function(){
		sandbox = null;
	});
	it('should exist',function(){
		TDDSandbox.should.exist;
		sandbox.should.not.be.undefined;
	});
	describe('#init()',function(){
		it('should return "Welcome to TDD Sandbox!"',function(){
			sandbox.init().should.equal('Welcome to TDD Sandbox!');
		});
	});
	describe('mocking using Sinon',function(){
		it('should work',function(){
			var spy = sinon.spy(sandbox,'_privateFunc');
			sandbox.init();
			spy.called.should.be.true;
		});
	});
});