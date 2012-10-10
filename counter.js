function newCounter() {
	var c = {};
	c.value = 0;
	c.increment = function() {
		c.value++;
	};
	return c;
}

module.exports = newCounter;
