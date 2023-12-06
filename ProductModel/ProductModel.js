const mongoose = require('mongoose')

const ProductModel = mongoose.Schema({
    title:{type:String, required:true}
}, {timestamp: true})

module.exports = mongoose.model("Product",ProductModel )