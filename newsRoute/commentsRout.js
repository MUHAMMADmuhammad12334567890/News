const {Router} = require('express')

const {commentsCont} = require("../newsControlers/commentsCont")

const router = Router()

router.post('/comments', commentsCont.postCommit)

router.delete('/comments/:id', commentsCont.deleteComment)

router.get('/comments/:id', commentsCont.findComment)


module.exports = router