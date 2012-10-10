var act = require('./increment_again');
var c = {};
var when = require('a').when;

when(act, c)
	.it('should increment the value once more')
		.assertEqual(2, c.sut.value);

