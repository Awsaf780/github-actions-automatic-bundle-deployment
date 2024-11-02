const fs = require('fs');

const config = JSON.parse(fs.readFileSync('config/target.json', 'utf8'));

const deployConfig = JSON.parse(fs.readFileSync('deploy.json', 'utf8'));

console.log('Config from File');
console.log(config)

console.log('Deploy Config from File');
console.log(deployConfig)

