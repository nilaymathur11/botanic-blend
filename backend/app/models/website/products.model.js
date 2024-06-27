const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

const addProductSchema = new Schema({
    product_name: { 
        type: String, 
        minLength: [4, "Product name too short"],
        required: [true, 'Product name is required']
    },
    product_desc: { 
        type: String, 
        minLength: [4, "Product description too short"],
        maxLength: 200,
        required: [true, 'Product description is required']
    },
    product_price: { 
        type: String, 
        required: [true, 'Product price is required']
    },
    product_thumbnail: { 
        type: String, 
        required: [true, 'Product image is required']
    },
    product_images: { 
        type: Array, 
        required: [true, 'Product image is required']
    },
    status: {
        type: Boolean, 
        default: true
    },
    order: {
        type: Number,
        default: 0
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    updated_at: { 
        type: Date, 
        default: null 
    },
    deleted_at: { 
        type: Date, 
        default: null }
        ,
})

const addProductModel = mongoose.model('products',addProductSchema);

module.exports = {
    addProductModel
}