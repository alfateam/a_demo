var act = require('./increment');
var c = {};
var when = require('a').when;

when(act, c).
	it('should have value equal to 1').
		assertEqual(1, c.sut.value);
