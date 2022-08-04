const fs = require('fs');

module.exports = function (file, callback) {
    //create new array push unique lines onto it. callback final array
    //reads file into buffer object(date)
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        let final = [];
        //need to convert buffer to an array
        arr = data.toString().split('\n');
        for (let i = 0; i < arr.length; i++) {
            //test adjacent lines, if theyre the same skip this iteration
            if (arr[i] == arr[i + 1]) continue;
            final.push(arr[i]);
        }
        callback(final.join('\n'));
    });
};
