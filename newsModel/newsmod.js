const mongoose = require("mongoose");

const newsScema = mongoose.Schema({
  heading: String,
  text: String,
  categoryID: {
    type: mongoose.SchemaTypes.ObjectId,

    ref: "CategSchema",
  },
});

const NewsModel = mongoose.model("NewsModel", newsScema);

module.exports = NewsModel;
