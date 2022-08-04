const fs = require('fs');

module.exports = function (file, callback) {
    //reads file into buffer object with length 174 for cat.js
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        let final = [];
        //need to convert buffer to an array
        arr = data.toString().split('\n');
        for (let i = 0; i < 10; i++) {
            if (arr[i] === 'undefined') break;
            final.push(arr[i]);
        }
        callback(final.join('\n'));
    });
};
