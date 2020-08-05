const fs = require('fs');
const path = require('path');

const allDir = fs.readdirSync(path.join(__dirname, '.'), 'utf8');

console.log(allDir);
