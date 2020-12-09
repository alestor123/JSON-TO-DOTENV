#!/usr/bin/env node

var fs = require('fs'),
json2Env = require('./App'),
argv = process.argv[2],
pck = require('./package.json');
if(argv== '-v' ||argv == '--version'){
    console.log( `${pck.version}`)
  process.exit(1);
}
else if (argv =='-h'|| argv == '--help') { // checking undifined args
    console.log(`
    Usage: ${pck.name} <Path to json> <Path to env>
`);
}
else if (argv =='-i'|| argv == '--issue') { // checking undifined args
  console.log(`
  Issues at ${pck.bugs.url} 
`);
}

else if (argv =='-a'|| argv == '--author') { // checking undifined args
  console.log(`
  Author: ${pck.author} 
`);
}

else if (argv =='-d'|| argv == '--docs') { // checking undifined args
  console.log(`
  Docs at ${pck.homepage} 
`);}
else if (!argv){
    console.log(`${pck.name} -h for help`)
}
else{
    var store = JSON.parse(fs.readFileSync(argv, 'utf-8'));
    fs.writeFile(process.argv[3] || './.env',json2Env(store), (err) => {
        if (err){ throw err} else{
          console.log('Done')
        }
});
}
