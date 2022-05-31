
const CategSchema = require("../newsModel/categoryModels")


module.exports.cotegorControler = {
    postCotegor: (req, res) => {
   CategSchema.create({ 
     category_name: req.body.category_name,
   }).then((info) => {
       res.json(info)
   })
    },
    
    deleteCotegor: (req, res) => {
        CategSchema.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json("Категория удалена")
        })
    },


    getCategor: (req, res) => {
        CategSchema.find().then((data) => {
            res.json(data)
        })
    }

}