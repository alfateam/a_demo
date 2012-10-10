var act = require('./new');
var c = {};
var when = require('a').when;

when(act, c).
	it('should have value equal to zero').
		assertEqual(0, c.sut.value);
