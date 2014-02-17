function act(c) {
	var createCounter = require('../counter');
	c.sut = createCounter();
}
module.exports = act;

