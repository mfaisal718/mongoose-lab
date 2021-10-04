const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});

const products = mongoose.model('products', productsSchema);

module.exports = products;