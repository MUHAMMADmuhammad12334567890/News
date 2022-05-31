const CommentSchema = require('../newsModel/commentsModel')


module.exports.commentsCont = {

    postCommit: (req, res ) => {
        CommentSchema.create({   
    commentator_s_name: req.body.commentator_s_name,
    comment_text: req.body.comment_text,
    news_comment_id: req.body.news_comment_id,
        }).then(() => {
            res.json("Коментария добавлена")
        })
    },

   deleteComment: (req, res) => {
       CommentSchema.findByIdAndRemove(req.params.id)
       .then(() => {
           res.json("Коментария Удалена")
       })
   },

   findComment: (req, res) => {
       CommentSchema.find({news_comment_id: req.params.id})
       .then((data) => {
           res.json(data)
       })
   }






}