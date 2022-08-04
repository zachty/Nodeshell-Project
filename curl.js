const request = require('request');

module.exports = function (url) {
    request(url, function (err, response, body) {
        if (err) throw err;
        process.stdout.write(body); // Print the HTML for the URL page.
        process.stdout.write('\nprompt > ');
    });
};
