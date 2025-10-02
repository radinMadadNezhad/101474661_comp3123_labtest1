function lowerCaseWords(arr) {
	return new Promise(function(resolve, reject) {
		if (!Array.isArray(arr)) {
			reject('Not an array');
			return;
		}
		let words = [];
		for (let i = 0; i < arr.length; i++) {
			if (typeof arr[i] === 'string' && arr[i].length > 0) {
				words.push(arr[i].toLowerCase());
			}
		}
		resolve(words);
	});
}

const stuff = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(stuff)
	.then(function(result) {
		console.log(result);
	})
	.catch(function(err) {
		console.error('Oops:', err);
	});
