var fs = require('fs'),
json2Env = require('./App'),
store = JSON.parse(fs.readFileSync(process.argv[2], 'utf-8'));
fs.writeFile(process.argv[3] || './.env',json2Env(store), (err) => {
    if (err) throw err;
});