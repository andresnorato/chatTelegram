const db = require('mongoose');
db.Promise = global.Promise;

function connect(url) {
    db.connect(url, {
        useNewUrlParser: true
    });
    console.log('[db] Conectada con exíto');
}

module.exports = connect;