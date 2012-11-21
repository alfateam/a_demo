function act(c) {
	c.sut.increment();
}
act.base = require('../new');
module.exports = act;
