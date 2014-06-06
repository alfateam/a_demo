var a = require('a');

var promise = a.then();

promise.then(success,error);
promise.resolve('success');

function success(arg) {
	console.log(arg);//success
}

function error(e) {
	//will not happen
}

