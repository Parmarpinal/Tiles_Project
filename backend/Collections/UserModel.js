const mongoose = require('mongoose');
const {Schema} = mongoose;

const userschema = new Schema({
    Name : String,
    Email : String,
    Password : String,
    Type : String,
    MobileNo : Number,
    Address : String
});

module.exports = mongoose.model('UserDemo',userschema);