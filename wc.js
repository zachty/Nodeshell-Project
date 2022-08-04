const fs = require('fs');

module.exports = function (file, option, callback) {
    //options, c,l,w
    //c is byte count, or buffer length
    //l is newline count, convert to array
    //w is word count, convert to string and split ' '
    //reads file into buffer object (data):
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        //need to convert buffer to an array
        //byte count
        if (option === '-c') {
            callback(String(data.length));
        }
        //line count
        if (option === '-l') {
            let arr = data.toString().split('\n');
            callback(`${arr.length}`);
        }
        //word count
        if (option === '-w') {
            let arr = data.toString().split(' ');
            callback(`${arr.length}`);
            //use this to see how it counts white space as words
            //it is also can parse the end of one line and the start of next
            // callback(data.toString().split(' ').join(','));
        }
    });
};
