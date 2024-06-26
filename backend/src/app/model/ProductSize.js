const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('../../plugins/paginate');

const ProductSizeSchema = new Schema ({
    size: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    mass: {
        type: String,
        required: true
    },
    productColor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductColor',
        required: true
    }
})

ProductSizeSchema.plugin(paginate);
const ProductSize = mongoose.model('ProductSize', ProductSizeSchema)
module.exports = ProductSize