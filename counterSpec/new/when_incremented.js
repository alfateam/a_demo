var act = require('./increment');
var c = {};
var when = require('a').when;

when(act, c)
	.it('should increment the value')
		.assertEqual(1, c.sut.value);

