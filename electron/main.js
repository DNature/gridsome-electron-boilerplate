require('dotenv').config();
const { app, BrowserWindow } = require('electron');
const path = require('path');
const liveServer = require('live-server');

const distDir = path.join(__dirname, '..', 'dist');

const host = 'localhost';
const port = 4000;
const url = 'http://' + host + ':' + port;
const params = {
	port: port,
	host: host,
	root: distDir,
	open: false,
	file: 'index.html',
};

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	});
	if (process.env.NODE_ENV === 'production') {
		liveServer.start(params);
		mainWindow.loadURL(url);
	} else {
		mainWindow.loadURL('http://localhost:8000');
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
