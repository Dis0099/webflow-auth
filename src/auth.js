// Authentication module
function checkCredentals(username, password) {
    return username && password;
}

console.log('Debug: auth module loaded');  // отладочный код

function login(username, password) {
    // TODO: Implement
}

module.exports = { login, checkCredentals };
