const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Name : String,
    Email : String,
    Subject : String,
    Message : String
});

module.exports = new mongoose.model('CustomerMessage',schema);