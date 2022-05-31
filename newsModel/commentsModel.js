const mongoose = require("mongoose")

const commentsSchema = mongoose.Schema({

    commentator_s_name: String,
    comment_text: String,
    news_comment_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "NewsModel",
    },
})

const CommentSchema = mongoose.model('CommentSchema', commentsSchema)

module.exports = CommentSchema