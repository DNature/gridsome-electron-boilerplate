require('dotenv').config();
const { app, BrowserWindow } = require('electron');

const path = require('path');

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	});
	if (process.env.HDS_ENV === 'prod') {
		const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
		mainWindow.loadFile(indexPath); // You can use this to load from any html file
	} else {
		mainWindow.loadURL('http://localhost:8080');
	}
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', function() {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') app.quit();
});
