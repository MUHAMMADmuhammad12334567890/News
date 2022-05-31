const mongoose = require("mongoose")

const CategorySchema = mongoose.Schema({

    category_name: String
})

const CategSchema = mongoose.model("CategSchema", CategorySchema)

module.exports = CategSchema