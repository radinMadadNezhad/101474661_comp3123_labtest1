const fs = require('fs');
const path = require('path');

const folderName = path.join(__dirname, 'Logs');

if (fs.existsSync(folderName)) {
	const files = fs.readdirSync(folderName);
	for (let i = 0; i < files.length; i++) {
		let file = files[i];
		let filePath = path.join(folderName, file);
		if (fs.existsSync(filePath)) {
			fs.unlinkSync(filePath);
			console.log('delete files...' + file);
		}
	}
	fs.rmdirSync(folderName);
}
