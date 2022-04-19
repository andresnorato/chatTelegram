const Model = require('./model');


function addMessage(fullMessage){
    // list.push(fullMessage);
    const myMessage = new Model(fullMessage)
    myMessage.save();
}

async function getMessage(filterUser){
    let filter = {}
    if(filterUser !== null ){
        filter = {
            user: filterUser
        }
    }
    const messages = await Model.find(filter);
    return messages;
}

async function updateMessage(id, message){
    const foundMessage =  await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMeesage(id){
    return  model.deleteOne({
        _id: id
    })
}



module.exports = {
    add: addMessage,
    list: getMessage,
    updateMessage: updateMessage,
    removeMeesage: removeMeesage
    // delete
}