module.exports = function (callback) {
    const dateNow = new Date();
    callback(String(dateNow));
};
