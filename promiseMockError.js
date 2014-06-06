var a = require('a');

var promise = a.then();

promise.then(success,error);
promise.reject(new Error('error'));

function success(arg) {
	//will not happen
}

function error(e) {
	console.log(e.stack);//will happen
}

