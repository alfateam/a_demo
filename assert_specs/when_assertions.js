var c = {};
var when = require('a').when;

when('./act', c)
	.it('can display assert fail').assertFail()
	.it('can display assert success').assert(true)
	.it('can display assert failure').assert(false)
	.it('can display assertOk success').assertOk(true)
	.it('can display assertOk failure').assertOk(false)
	.it('can display assertEqual success').assertEqual(true,true)
	.it('can display assertEqual failure').assertEqual(true, false)
	.it('can display assertNotEqual success').assertNotEqual(true,false)
	.it('can display assertNotEqual failure').assertNotEqual(true,true)
	.it('can display assertDeepEqual success').assertDeepEqual({a : 1},{a : 1})
	.it('can display assertDeepEqual failure').assertDeepEqual({a : 1},{a : 2})
	.it('can display assertNotDeepEqual success').assertNotDeepEqual({a : 1},{a : 2})
	.it('can display assertNotDeepEqual failure').assertNotDeepEqual({a : 1},{a : 1})
	.it('can display assertStrictEqual success').assertStrictEqual('foo','foo')
	.it('can display assertStrictEqual failure').assertStrictEqual({},{})
	.it('can display assertNotStrictEqual success').assertNotStrictEqual({},{})
	.it('can display assertNotStrictEqual failure').assertNotStrictEqual('foo','foo')
	.it('can display assertThrows success').assertThrows(function(){ throw 'error';})
	.it('can display assertThrows failure with plain error due to wrong exception').assertThrows(function () {throw 'error';}, /foo/)	
	.it('can display assertThrows failure due to wrong exception').assertThrows(throwError, /foo/)
	.it('can display assertThrows failure with inline block due to wrong exception').assertThrows(function() {throw new Error('error');}, /foo/)
	.it('can display assertThrows failure').assertThrows(function() {},Error)
	.it('can display assertDoesNotThrow success').assertDoesNotThrow(function () {})
	.it('can display assertDoesNotThrow failure').assertDoesNotThrow(function () {throw 'error';})
	.it('can display assertDoesNotThrow failure with stackTrace').assertDoesNotThrow(function () {throw new Error('foo');})

function throwError(){
	throw new Error('error');
}