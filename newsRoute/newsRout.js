const {Router} = require("express");

const {newsController} = require("../newsControlers/newsCont");

const router = Router();

router.get("/News", newsController.getNews);

router.get("/News/:id", newsController.getIdNews);

router.get("/News/cotegorControler/:id", newsController.getCatigoriNews);

router.post("/News", newsController.postNews);

router.delete("/News/:id", newsController.deleteNews);

router.patch("/News/:id", newsController.pathNews);

module.exports = router;
 

      