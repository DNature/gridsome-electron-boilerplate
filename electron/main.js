require('dotenv').config();
const { app, BrowserWindow } = require('electron');
const path = require('path');
const liveServer = require('live-server');

const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
const distDir = path.join(__dirname, '..', 'dist');
const host = 'localhost';
const port = 8081;
const url = 'http://' + host + ':' + port;
const params = {
	port: port,
	host: host,
	root: distDir,
	open: false,
	file: 'index.html',
	wait: 100,
};

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	});
	if (process.env.HDS_ENV === 'prod') {
		liveServer.start(params);
		// mainWindow.loadFile(indexPath); // You can use this to load from any html file
		mainWindow.loadURL(url);
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
