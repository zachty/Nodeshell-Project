//call pwd on all directories/files below given one
//recursive???
const pwd = require('./pwd.js');
const ls = require('./ls.js');

//check for file/directory
//if not found print 'find: 'x': No such file or directory'
//if file, print the name of the file path
//if directory, print path including directory, move into the directory and begin printing all files/directories. Continue moving into directories until only files are printed
module.exports = function (callback, arg) {
    //call pwd with file/directory name added at end
    //move into directory
    //save ls as a list
    //iterate through array calling pwd and adding item
    callback(/*TODO*/);
};
