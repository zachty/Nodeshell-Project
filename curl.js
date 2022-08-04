const request = require('request');

module.exports = function (url, callback) {
    request(url, function (err, response, body) {
        if (err) throw err;
        callback(body); // Print the HTML for the URL page.
    });
};
