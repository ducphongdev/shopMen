const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const paginate = require('../../plugins/paginate');

const ProductSchema = new Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true, default: null},
    salePrice: { type: Number , required: true},
    countInStock: { type: Number, required: true},
    description: { type: String, required: true},
    hot: { type: String, required: true, enums: ['hot', 'nomar']},
    sold: { type: Number},
    slug: {
        type: String,
        slug: 'name',
        unique: true
    },
    category: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    subCategory: {
        type: mongoose.Schema.ObjectId,
        ref: 'SubCategory'
    },
    color: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProductColor'
        },
    ]
},{
    timestamps: true,
})

ProductSchema.plugin(paginate);
mongoose.plugin(slug);

const Product =  mongoose.model('Product',ProductSchema)
module.exports = Product