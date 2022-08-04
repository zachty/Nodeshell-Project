const fs = require('fs');

module.exports = function (file, callback) {
    //reads file into buffer object with length 174 for cat.js
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        //need to convert buffer to an array
        arr = data.toString().split('\n');
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    let t = arr[i];
                    arr[i] = arr[j];
                    arr[j] = t;
                }
            }
        }
        callback(arr.join('\n'));
    });
};
