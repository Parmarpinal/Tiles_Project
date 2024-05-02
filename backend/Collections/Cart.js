const mongoose = require('mongoose');

const schema = mongoose.Schema({
    UserId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDemo'
    },
    Products : [
        {
            ProductId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Product'     
            },
            Quantity : Number,
            Price : Number,
            modifiedOn: {
                type: Date,
                default: Date.now
            }
        },
        { timestamps: true }
    ]
});

module.exports = new mongoose.model('Cart',schema);