var c = {};
var when = require('a').when;

when('./increment', c).
	it('should have value equal to 1').
		assertEqual(1, c.sut.value);
