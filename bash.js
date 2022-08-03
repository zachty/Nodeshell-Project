const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
    const cmd = data.toString().trim();

    if (cmd == 'ls') {
        ls();
    }
    if (cmd == 'pwd') {
        pwd();
    }
    if (cmd.slice(0, 3) == 'cat') {
        cat(cmd.slice(4));
    }
});
