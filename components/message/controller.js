const store = require('./store');


function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No hay usuario o menssaje');
            return reject('Los datos son incorrectos');
        }
        const fullMassege = {
            user: user,
            message: message,
            date: new Date()
        };
        store.add(fullMassege);
        resolve(fullMassege);
    });
}

function getMessages(filterMessage) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterMessage));
    });
}


function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalidated');
            return false
        }
        const result = await store.updateMessage(id, message);
        resolve(result)
    })
}


function deletemessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Parametro id invalido')
            return false
        }
        store.removeMeesage(id)
            .then(() => {
                resolve()
            })
            .catch(e => {
                reject(e)
            })
    })
}


module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deletemessage
}