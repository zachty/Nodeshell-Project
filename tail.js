const fs = require('fs');

module.exports = function (file, callback) {
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        callback(data);
    });
};
