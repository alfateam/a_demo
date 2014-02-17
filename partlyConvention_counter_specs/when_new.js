var c = {};
var when = require('a').when;

when('./new', c).
	it('should be an object').
		assertEqual('object', typeof c.sut).
	it('should have value equal to zero').
		assertEqual(0, c.sut.value).
	it('should fail just for fun').
		assertFail('error');
