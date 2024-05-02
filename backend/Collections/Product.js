const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Name : String,
    Width : Number,
    Height : Number,
    Thickness : Number,
    Img : String,
    Color : String,
    QuantityPerBox : Number,
    Type : String,
    LayingType : String,
    Price:Number,
    CategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    }
});

module.exports = new mongoose.model('Product',schema);