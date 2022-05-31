const NewsModel = require("../newsModel/newsmod");

const cotegorControler = require('../newsControlers/categoriesCont');

module.exports.newsController = {
  getNews: (req, res) => {
    NewsModel.find().then((data) => {
      res.json(data);
    });
  }, 
 
  getIdNews: (req, res) => {
    NewsModel.findById(req.params.id).then((data) => {
      res.json(data);
    }); 
  },

  getCatigoriNews: (req, res) => {
  NewsModel.find({categoryID: req.params.id})
  .then((data) => {
      res.json(data)
  })

  }, 

  postNews: (req, res) => {
    NewsModel.create({
      heading: req.body.heading,
      text: req.body.text,
      categoryID: req.body.categoryID,
    }).then((info) => {
      res.json(info);
    });
  },

  deleteNews: (req, res) => {
     NewsModel.findByIdAndRemove(req.params.id)
     .then(() => {
         res.json('Новость удалена')
     })


  },

  pathNews: (req, res) => {
   NewsModel.findByIdAndUpdate(req.params.id, {
    heading: req.body.heading,
    text: req.body.text,
    categoryID: req.body.ategoryID,
   }, {new: true})
   .then((patch) => {
       res.json(patch)
   }) 

  },
};
