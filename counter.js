module.exports = function () {
	var counter = {
		value: 0,
		increment: function() { value++; }
	};
	
	return counter;
}
