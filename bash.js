const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');
const date = require('./date.js');
const echo = require('./echo.js');
const head = require('./head.js');
const tail = require('./tail.js');
const sort = require('./sort.js');
const wc = require('./wc.js');
const uniq = require('./uniq.js');
const find = require('./find.js');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
    const cmd = data.toString().trim().split(' ');

    if (cmd[0] === 'ls') {
        ls(done);
    }
    if (cmd[0] === 'pwd') {
        pwd(done);
    }
    if (cmd[0] === 'cat') {
        cat(cmd[1], done);
    }
    if (cmd[0] === 'curl') {
        curl(cmd[1], done);
    }
    if (cmd[0] === 'date') {
        date(done);
    }
    if (cmd[0] === 'echo') {
        echo(cmd[1], done);
    }
    if (cmd[0] === 'head') {
        head(cmd[1], done);
    }
    if (cmd[0] === 'tail') {
        tail(cmd[1], done);
    }
    if (cmd[0] === 'sort') {
        sort(cmd[1], done);
    }
    if (cmd[0] === 'wc') {
        wc(cmd[2], cmd[1], done);
    }
    if (cmd[0] === 'uniq') {
        uniq(cmd[1], done);
    }
    if (cmd[0] === 'find') {
        find(cmd[1], done);
    }
});

function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}
