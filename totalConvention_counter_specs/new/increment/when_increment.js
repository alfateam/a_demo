var c = {};
var when = require('a').when;

when(c).
	it('should have value equal to 2').
		assertEqual(2, c.sut.value);
