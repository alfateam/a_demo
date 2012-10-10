function act(c) {
	c.sut = require('../counter')();
}
act._name = module.filename;
module.exports = act;

