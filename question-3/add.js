const fs = require('fs');
const path = require('path');

const folderName = path.join(__dirname, 'Logs');

if (!fs.existsSync(folderName)) {
	fs.mkdirSync(folderName);
}

process.chdir(folderName);

let idx = 0;
while (idx < 10) {
	let file = 'log' + idx + '.txt';
	let text = 'Log file number ' + idx;
	if (!fs.existsSync(file)) {
		fs.writeFileSync(file, text);
	}
	console.log(file);
	idx++;
}
