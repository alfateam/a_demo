function createCounter() {
	var counter = {};
	counter.value = 0;
	counter.increment = function() {
		counter.value++;
	};
	return counter;
}

module.exports = createCounter;
