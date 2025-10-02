const resolvedPromise = function() {
	return new Promise(function(resolve) {
		let msg = 'delayed success!';
		setTimeout(function() {
			resolve({ message: msg });
		}, 500);
	});
};

const rejectedPromise = function() {
	return new Promise(function(_, reject) {
		let errMsg = 'delayed exception!';
		setTimeout(function() {
			reject({ error: errMsg });
		}, 500);
	});
};

resolvedPromise()
	.then(function(result) {
		console.log('Success:', result);
	})
	.catch(function(err) {
		console.error('Something went wrong:', err);
	});

rejectedPromise()
	.then(function(result) {
		console.log('Should not happen:', result);
	})
	.catch(function(err) {
		console.error('Error caught:', err);
	});
