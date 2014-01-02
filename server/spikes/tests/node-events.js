/*
 * Test Dependencies
 *
 */

 var chai = require('chai');
 var sinon = require('sinon');
 var should = chai.should();

/*
 * Tests
 *
 */

 describe('Node EventEmitter',function(){
 	var EventEmitter = require('events').EventEmitter;
 	var event = require('../node-events');
 	var emitter = event._emitter;
 	var handler;

 	beforeEach(function(){
 		handler = sinon.spy();
 	});

 	afterEach(function(){
 		handler = null;
 		emitter.removeAllListeners();
 	})

 	it('should exist',function(){
 		event.should.exist;
 		emitter.should.exist;
 	});

 	it('should add a listener and trigger it on emit',function(){
 		emitter.on('login',handler);
 		emitter.emit('login');
 		handler.called.should.be.true;
 		handler.callCount.should.equal(1);
 	});

 	it('should add a listener that is triggered only once',function(){
 		emitter.once('logout',handler);
 		emitter.emit('logout');
 		emitter.emit('logout');
 		handler.callCount.should.equal(1);
 	});

 	it('should remove a listener',function(){
 		emitter.on('login',handler);
 		EventEmitter.listenerCount(emitter,'login').should.be.equal(1);
 		emitter.removeListener('login',handler);
 		EventEmitter.listenerCount(emitter,'login').should.be.equal(0);
 	});

 	describe('EventEmitter#listenerCount()',function(){
 		it('should return # of listeners',function(){
 			/* note: listenerCount is a static method, so no `new` req */
 			emitter.on('signup',handler);
 			emitter.on('signup',handler);
 			emitter.on('signup',handler);
 			EventEmitter.listenerCount(emitter, 'signup').should.equal(3);
 		});
 	});

 })