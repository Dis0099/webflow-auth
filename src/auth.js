// Authentication module
function checkCredentals(username, password) {
    return username && password;
}

function login(username, password) {
    if (checkCredentals(username, password)) {
        return { success: true, token: 'abc123' };
    }
    return { success: false };
}

module.exports = { login, checkCredentals };
