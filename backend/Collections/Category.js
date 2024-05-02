const mongoose = require('mongoose');

const schema = mongoose.Schema({
    CategoryName : String,
});

module.exports = new mongoose.model('Category',schema);