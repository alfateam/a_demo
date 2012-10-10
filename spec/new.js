function act(c) {
	var createCounter = require('../counter');
	c.sut = createCounter();
}
act._name = module.filename;
module.exports = act;

