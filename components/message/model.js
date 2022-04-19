const mongoose = require('mongoose');


const Shcema = mongoose.Schema;

const mySchema = new Shcema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date
});

const model = mongoose.model('message', mySchema);
module.exports = model;