module.exports = function () {
	var counter = {
		value: 0,
		increment: function() { this.value++; }
	};

	return counter;
};
