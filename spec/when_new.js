var act = require('./new');
var c = {};
var when = require('a').when;

when(act, c).
	it('should be an object').
		assertTrue(typeof c.sut == 'object').
	it('should have value equal to zero').
		assertEqual(0, c.sut.value);
