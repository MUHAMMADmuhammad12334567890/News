const {Router} = require('express')

const {cotegorControler} = require('../newsControlers/categoriesCont')

const router = Router()

router.post('/categories', cotegorControler.postCotegor)

router.delete('/categories/:id', cotegorControler.deleteCotegor)

router.get('/categories', cotegorControler.getCategor)

module.exports = router