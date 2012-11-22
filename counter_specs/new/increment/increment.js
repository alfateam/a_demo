function act(c) {
	c.sut.increment();
}
act.base = '../increment';
module.exports = act;
